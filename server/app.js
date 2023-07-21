var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error!"));

var apiRouter = require('./routes/api')

var app = express();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.resolve("..", "client", "build")));
    app.length("*", (req, res) => 
    res,sendFile(path.resolve("..", "client", "build", "index.html")));
}
else if(process.env.NODE_ENV === "development"){
    var corsOptions ={
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api', apiRouter);

module.exports = app;
