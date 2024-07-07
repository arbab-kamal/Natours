const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! Shutting Down...')
    console.log(err.name, err.message);
    process.exit(1);
});
dotenv.config({ path: './config.env' })
const app = require('./app');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);


mongoose.connect(DB).then(() => console.log('Connected to database'));




const server = app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});


process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! Shutting Down...')
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});



