const path = require('path');
const express = require('express');
const morgan = require('morgan');
const AppError = require('./utlis/appError');
const globalErrorHandler = require('./Controller/errorController');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const HPP = require('hpp')
const tourRouter = require('./Route/tour')
const userRouter = require('./Route/user')
const reviewRouter = require('./Route/review')
const viewRouter = require('./Route/viewRoute')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const bookingRouter = require('./Route/bookingRoute')
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

// Serving static file
app.use(express.static(path.join(__dirname, 'public')));


// Set Security for Http header


//set security http headers




// Global middleware

// Development logging
if (!process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP,Please try again in an hour!'
})
app.use('/api', limiter);


// Body parser,reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())
// Data sanitization against NoSQL query injection
app.use(mongoSanitize())
// Data sanitization against XSS
// Prevent parameter pollution
app.use(HPP({
  whitelist: ['duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price']
}))

// Test middleware
app.use((req, res, next) => {
  // req.requestTime = new Date().toISOString();

  next();
});




app.use(compression())
///Route

app.use('/', viewRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter)


app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;