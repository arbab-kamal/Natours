/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import Stripe from 'stripe'

export const bookTour = async tourId => {
    try {
        const stripe = Stripe('pk_test_51PZsFkEl53NOCu6gW7bj0UnbdW9OTmODYEYz18j4th8M4qXMa7BKKSVvHimPWTq0kKk4yzghBg8JYyVJSKkWfJhD00gzWN5Khr');

        // 1) Get checkout session from API
        const session = await axios(
            `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);

        // 2) Create checkout form + charge credit card
        // await stripe.redirectToCheckout({
        //     sessionId: session.data.session.id
        // });
        window.location.replace(session.data.session.url);
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
