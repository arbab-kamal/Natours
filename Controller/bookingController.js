const Stripe = require('stripe')(process.env.STRIPEKEY);
const Tour = require('./../Models/tourModel')
const Booking = require('./../Models/bookingModel')
const catchAsync = require('./../utlis/catchAsync');
const AppError = require('./../utlis/appError');
const factory = require('./handlerFactory');
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
    // 1: Get the currently booked tour
    const tour = await Tour.findById(req.params.tourId);
    // 2: Create checkout session
    const session = await Stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${req.protocol}://${req.get("host")}/?tour=${req.params.tourId
            }&user=${req.user.id}&price=${tour.price}`,
        cancel_url: `${req.protocol}://${req.get("host")}/`,
        customer_email: req.user.email,
        client_reference_id: req.params.tourId,
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    unit_amount: tour.price * 100,
                    product_data: {
                        name: `${tour.name} Tour`,
                        description: tour.summary,
                        images: [
                            `https://www.natours.dev/img/tours/${tour.imageCover}`,
                        ]
                    }
                },
                quantity: 1
            }
        ]
    });
    // 3: redirect to stripe checkout page
    res.status(200).json({
        status: 'success',
        session
    });

});
exports.createBookingCheckout = catchAsync(async (req, res, next) => {
    // This is only TEMPORARY, because it's UNSECURE: everyone can make bookings without paying
    const { tour, user, price } = req.query;

    if (!tour && !user && !price) return next();
    await Booking.create({ tour, user, price });

    res.redirect(req.originalUrl.split('?')[0]);
});


exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);