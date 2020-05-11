const express = require('express');
const { urlencoded, json } = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const database = 'mongodb://localhost:27017/EasyBet';
mongoose.connect(database, {
    useNewUrlParser:true,
    useUnifiedTopology: true 
});


const { exec } = require('child_process');
mongoose.connection.once('open', function(){ 
  console.log('Successfully connected.'); 
  exec('python parser.py', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else{
      console.log("Parsing finished.");
    }
  });
});
mongoose.connection.on('error', (error) => {
    console.log('Connecting error: ', error); 
});

app.use(json());
app.use(urlencoded({extended:false}));

const gameRoutes = require('./routes/api/matches');
app.use('/matches', gameRoutes);

app.use(function (req, res, next) {
  res.status(404).send("Bad request.");
});


app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
        error: {
        message: error.message,
        status: statusCode,
        stack: error.stack,
        },
    });
});

module.exports = app;