const express = require('express');
const viewController = require('./../Controller/viewController')
const authController = require('./../Controller/authController')
const bookingController = require('./../Controller/bookingController');
const viewRouter = express.Router()



viewRouter.get('/', bookingController.createBookingCheckout,
    authController.isLoggedIn,
    viewController.getOverview)
viewRouter.get('/tour/:slug', authController.isLoggedIn, viewController.getTour)
viewRouter.get('/login', authController.isLoggedIn, viewController.getLoginForm)
viewRouter.get('/signup', viewController.getSignUpForm)
viewRouter.get('/me', authController.protect, viewController.getAccount)
viewRouter.get('/my-tours', authController.protect, viewController.getMyTours)

viewRouter.post('/submit-user-data', authController.protect, viewController.updateUserData)



module.exports = viewRouter;
