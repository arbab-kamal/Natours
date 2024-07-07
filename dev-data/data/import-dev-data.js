const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../Models/tourModel');
const User = require('./../../Models/userModel');
const Review = require('./../../Models/reviewModel');



dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log('DATABASE connection successful..');
});

//Read File

const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));


//Import data

const importData = async () => {
    try {
        await Review.create(reviews);
        await Tour.create(tours);
        await User.create(users, { validateBeforeSave: false });
        console.log('Data successful');
        process.exit();
    } catch (err) {
        console.log(err);

    }
}

//Delete Data from DB
const deleteData = async () => {

    try {
        await Review.deleteMany();
        await Tour.deleteMany();
        await User.deleteMany();
        console.log('Data successful Delete');
        process.exit();
    } catch (err) {
        console.log(err);

    }

}



if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);