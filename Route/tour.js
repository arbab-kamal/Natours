const express = require('express');
const tourController = require('./../Controller/tourcontroller')
const authController = require('./../Controller/authController')
const reviewRouter = require('./review')
const tourRouter = express.Router();



tourRouter.use('/:tourId/reviews', reviewRouter);
tourRouter.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getallTours);

tourRouter.route('/tour-stats').get(tourController.getTourStats);
tourRouter.route('/monthly-plan/:year').get(authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'), tourController.getMonthlyPlan);

tourRouter.route('/tours-within/:distance/center/:latlng/unit/:unit').get(tourController.ToursWithin)
tourRouter.route('/distances/:latlng/unit/:unit').get(tourController.getDistance)

tourRouter.route('/').get(tourController.getallTours)
    .post(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.createTour);

tourRouter.route('/:id')
    .get(tourController.getTour)
    .delete(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.deleteTour)
    .patch(authController.protect,
        authController.restrictTo('admin', 'lead-guide'), tourController.uploadTourImages,
        tourController.resizeTourImage,
        tourController.updateTours);


module.exports = tourRouter;