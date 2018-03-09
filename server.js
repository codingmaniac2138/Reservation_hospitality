var express = require('express'),
  app = express(),
  port = process.env.PORT || 7000,
  mongoose = require('mongoose'),
  Task = require('./api/models/hrModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });
var routes = require('./api/routes/hrRoutes'); //importing route
routes(app); //register the route


app.listen(port,'0.0.0.0');



console.log('Hospitality Reservation System RESTful API server started on: ' + port);