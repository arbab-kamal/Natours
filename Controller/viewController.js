const Tour = require('./../Models/tourModel');
const User = require('./../Models/userModel');
const catchAsync = require('./../utlis/catchAsync');
const AppError = require('./../utlis/appError');
const Booking = require('./../Models/bookingModel')
exports.getOverview = catchAsync(async (req, res, next) => {

    // 1) Get Tour Data from collection
    const tours = await Tour.find();
    // 2) Build template

    // 3) Render
    res.status(200).render('overview', {
        title: 'All Tours',
        tours
    })
});

exports.getTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    })
    if (!tour) {
        return next(new AppError('There is no tour with that name', 404))

    }
    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour
    })
});

exports.getLoginForm = (req, res) => {

    res.status(200).render('login', {
        title: 'Log into your account'
    })
}
exports.getAccount = (req, res) => {


    res.status(200).render('account', {
        title: 'Your account'
    });
}
exports.updateUserData = catchAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        email: req.body.email

    },

        {
            new: true,
            runValidators: true,
        });
    res.status(200).render('account', {
        title: `Your Account`,
        user: updatedUser,
    });
})



exports.getSignUpForm = (req, res) => {
    res.status(200).render('signup', {
        title: `Create New Account`,
    });
};


exports.getMyTours = catchAsync(async (req, res, next) => {
    /// Find All Booking

    const bookings = await Booking.find({ user: req.user.id })
    /// Find tours with return IDs
    const tourIDs = bookings.map(el => el.tour);
    const tours = await Tour.find({ _id: { $in: tourIDs } });

    res.status(200).render('overview', {
        title: 'My Tours',
        tours
    });
})

