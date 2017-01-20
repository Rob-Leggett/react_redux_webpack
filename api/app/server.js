const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require("./configuration/config");
const authenticateRouter = require("./authenticate/authenticateRouter");
const customerRouter = require("./customer/customerRouter");
const exceptionHandler = require("./exceptionHandler");
const seed = require("../config/seed");

// ######### Database Connection ###########

mongoose.connect(config.database).then(() => {

  if (process.env.NODE_ENV === 'development') {
    seed();
  }
}); // connect to database

const uiDomain = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'http://example.com.au';

// ######### Express Application ###########

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev')); // logging requests

// CORS
app.all('*', function (req, res, next) {
  res.set('Content-Type', 'application/json');
  res.set('Access-Control-Allow-Origin', uiDomain);
  res.set('Access-Control-Allow-Headers', 'Content-Type,Content-Disposition,X-Requested-With,accept,token');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Expose-Headers', 'Content-Disposition');

  next();
});


// ######### Token Routes ###########

app.use("/authenticate", authenticateRouter);

// ######### Customer Routes ###########

app.use("/customer", customerRouter);

// ######### Exception Handling ###########

app.use(exceptionHandler.handle);

// ######### Server Listener ###########

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});