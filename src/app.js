const dbServer = require('./db/database')
const express = require('express');
const userRouter = require('./routers/user');
const groupRouter = require('./routers/group');
const indexRouter = require('./routers/index');
const restaurantRouter = require('./routers/restaurant');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(allowCrossDomain)
app.use(express.json());
app.use('/', indexRouter);
app.use('/', groupRouter);
app.use('/', userRouter);
app.use('/', restaurantRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "lunchmenutest.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });

var path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;