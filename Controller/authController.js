const crypto = require('crypto')
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../Models/userModel');
const catchAsync = require('./../utlis/catchAsync');
const AppError = require('./../utlis/appError');
const Email = require('./../utlis/email')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = catchAsync(async (req, res, next) => {

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
        role: req.body.role
    });
    const url = `${req.protocol}://${req.get('host')}/me`;

    await new Email(newUser, url).sendWelcome()
    const token = signToken(newUser._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions)

    newUser.password = undefined
    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    /// 1) Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }
    ///2) check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password'))
    }
    ///3) If everything ok,send token to client
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);
    user.password = undefined
    res.status(200).json({
        status: 'success',
        token,
        data: {
            user
        }
    });

});
exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });
    res.status(200).json({ status: 'success' });
};
exports.protect = catchAsync(async (req, res, next) => {
    /// 1) Getting token and check of it's there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    if (!token) {
        return next(
            new AppError('You are not Logged in! please login first', 401)
        );
    }

    /// 2) Verification Token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    /// 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
        return next(new AppError('The User belong to this Token Do not exist', 401))
    }

    /// 4) Check if User password changed after the token was issued
    if (freshUser.changesPasswordAfter(decoded.iat)) {
        return next(new AppError('User recently changed password,Please login again', 401))

    }
    //Grant Access
    req.user = freshUser;
    res.locals.user = freshUser;
    next();

});

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {



            // 1) verify token
            const decoded = await promisify(jwt.verify)(
                req.cookies.jwt,
                process.env.JWT_SECRET
            );

            // 2) Check if user still exists
            const currentUser = await User.findById(decoded.id);
            if (!currentUser) {
                return next();
            }

            // 3) Check if user changed password after the token was issued
            if (currentUser.changesPasswordAfter(decoded.iat)) {
                return next();
            }

            // THERE IS A LOGGED IN USER
            res.locals.user = currentUser;
            return next();
        } catch (err) {
            return next();
        }
    }

    next();
};




exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        /// Roles ['admin','lead-guide']
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to perform this action', 403));
        }
        next();
    };
};

exports.forgetPassword = catchAsync(async (req, res, next) => {
    /// 1) Get user based on Posted Email
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new AppError('There is no user with that email address..'), 404)
    }
    /// 2) Generate random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    /// 3) Send it's to user



    try {
        // await Email({
        //     email: user.email,
        //     subject: "your password reset token valid for (10min)",
        //     message
        // });
        const resetURL = `${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`
        await new Email(user, resetURL).sendPasswordReset();
        res.status(200).json({
            status: 'success',
            message: 'Token send to email'
        })

    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new AppError('There was an error sending email.Try again again Later'), 500)
    }

})
exports.resetPassword = catchAsync(async (req, res, next) => {
    /// 1) Get user based token
    const hashToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({ passwordResetToken: hashToken, passwordResetExpires: { $gt: Date.now() } })
    /// 2) If token has not expired,and there is user, set the new password
    if (!user) {
        return next(new AppError('Token is invalid or expired', 400))
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    /// 3) Update the changedPasswordAt property for user

    /// 4) log in user,send JWT 
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions)
    user.password = undefined
    res.status(200).json({
        status: 'success',
        token
    });
});



exports.UpdatePassword = catchAsync(async (req, res, next) => {
    // 1) Get User from collection
    const user = await User.findById(req.user.id).select('+password')
    // 2) Check if Posted current password was correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('Your current password is wrong', 401))
    }

    // 3) Update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
    // 4)log user in,send jwt
    const token = signToken(user.id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions)
    user.password = undefined
    user.passwordConfirm = undefined
    res.status(200).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
})