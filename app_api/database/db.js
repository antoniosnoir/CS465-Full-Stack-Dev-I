const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline'); //(L)

//avoid 'current Server Discovery and Monitoring engine is deprecated'
mongoose.set("useUnifiedTopology", true );

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true, 
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`); //from video
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: `, err);//console.log('error: ' + err); //from video
    //return connect(); //from video
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`); //from video
});

if (process.platform == 'win32') {
    const rl = readLine.createInterface ({ //from video
        input: process.stdin, //from video
        output: process.stdout //from video
    }); //from video
    rl.on('SIGINT', () => { //from video
        process.emit("SIGINT"); //from video
    }); //from video
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => { //from video
        console.log(`Mongoose disconnected through ${msg}`); //from video
        callback (); //from video
    })
};

// for nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => { //from video
        process.kill(process.pid, 'SIGUSR2'); //from video
    }); //from video
});

// for app termination
process.on('SIGINT', () => { 
    gracefulShutdown('app termination', () => { //from video
        process.exit(0); //from video
    }); //from video
});

// for Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => { //from video
        process.exit(0); //from video
    }); //from video
});

connect();

//require("./models/travlr");

//bring in the Mongoose schema
require("./models/travlr"); // /models/tr