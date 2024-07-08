import { displayMap } from './leaflet';
import { login, logout } from "./login.js";
import { signup } from './signup';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';





const filetag = document.querySelector('#photo');
const preview = document.querySelector('.form__user-photo');
const userPasswordForm = document.querySelector('.form-user-password');
const leaflet = document.getElementById('map');
const loginForm = document.querySelector('.form--login')
const logOutBtn = document.querySelector('.nav__el--logout');
const bookBtn = document.getElementById('book-tour');
const signupForm = document.querySelector('.form--signup');
const userDataForm = document.querySelector('.form-user-data');




//Map
if (leaflet) {
    const locations = JSON.parse(leaflet.dataset.locations);
    displayMap(locations)
}


//Login page
if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });



//Logout button
if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
    userDataForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = new FormData();

        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);

        updateSettings(form, 'data');
    });


//Current user password reset
if (userPasswordForm)
    userPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        document.querySelector('.btn--save-password').textContent = 'Updating...';

        const passwordCurrent = document.getElementById('password-current').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;
        await updateSettings(
            { passwordCurrent, password, passwordConfirm },
            'password'
        );
        document.querySelector('.btn--save-password').textContent = 'Save password';
        document.getElementById('password-current').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password-confirm').value = '';
    });


//Sign page
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('password-confirm').value;
        signup(name, email, password, confirmPassword);
    });
}

// update photo view
const readURL = (input) => {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            preview.setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
};

if (filetag && preview) {
    filetag.addEventListener('change', function () {
        readURL(this);
    });
}


//Book tour by user

if (bookBtn)
    bookBtn.addEventListener('click', e => {
        e.target.textContent = 'Processing...';
        const { tourId } = e.target.dataset;
        bookTour(tourId);
    });

