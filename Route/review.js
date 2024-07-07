const express = require('express');
const reviewController = require('./../Controller/reviewController');
const authController = require('./../Controller/authController');

const reviewRouter = express.Router({ mergeParams: true });


reviewRouter.use(authController.protect)

reviewRouter.route('/').get(reviewController.getAllReview)
    .post(authController.restrictTo('user'),
        reviewController.setTourUserIds,
        reviewController.createReview);


reviewRouter.route('/:id')
    .get(reviewController.getReview)
    .patch(authController.restrictTo('user', 'admin'), reviewController.updateReview)
    .delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview);
module.exports = reviewRouter;