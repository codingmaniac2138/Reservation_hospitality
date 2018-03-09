'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Reservation_Details_Schema = new Schema({
  name: {
    type: String,
    required: 'Please enter your Name'
  },
  id: {
    type: Number,
    // required: ' Please enter ID'
  },
  hotelName: {
    type: String,
    required: 'Please enter your Name'
  },
  arrivalDate: {
    type: Date,
    required:'Please Enter your arrival date'  
  },
  departureDate: {
    type: Date,
    required:'Please Enter your arrival date'  
  }

});

module.exports = mongoose.model('reservation_enteries', Reservation_Details_Schema);