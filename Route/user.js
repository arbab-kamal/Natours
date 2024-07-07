const express = require('express');
const userController = require('./../Controller/usercontroller');
const authController = require('./../Controller/authController')


const userRouter = express.Router();



userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);
userRouter.get('/logout', authController.logout);
userRouter.post('/forgetPassword', authController.forgetPassword);
userRouter.patch('/resetPassword/:token', authController.resetPassword);


// Protect all Routes after this middleware

userRouter.use(authController.protect);

userRouter.patch('/UpdateMyPassword', authController.UpdatePassword);
userRouter.patch('/updateMe',
    userController.uploadUserPhoto,
    userController.resizeUserPhoto,
    userController.updateMe);
userRouter.delete('/deleteMe', userController.deleteMe);
userRouter.get('/me', userController.getMe, userController.getUser);

userRouter.use(authController.restrictTo('admin'));

userRouter.route('/').get(userController.getallUser)
    .post(userController.createUser);
userRouter.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);


module.exports = userRouter;