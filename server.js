const path = require('path');
var cors = require('cors');
var json2xls = require('json2xls');
var express = require('express'),
  app = express(),

  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Question = require('./api/models/questionModel'),
  Student = require('./api/models/studentModel'),
  Answer = require('./api/models/answerModel'),
  Cat = require('./api/models/catModel');
  Questionset = require('./api/models/questionsetModel');
  Result = require('./api/models/resultModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:bsu123456@ds151282.mlab.com:51282/bsu');
app.use(cors());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    res.setHeader('Access-Control-Max-Ag', '3600');

    next();
});
app.use(json2xls.middleware);
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies



var routes = require('./api/routes/bsuRoutes'); //importing route
routes(app); //register the route


app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('BSU RESTful API server started on: ' + port);
