'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('reservation_enteries');

//   get all the reseravtions
exports.list_all_reservations = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_reservation = function(req, res) {
  var new_task = new Task(req.body);
  console.log(req.body,"ppppppppppppppppppppppppppppppppppp")
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_reservation = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
      console.log("innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",req.params.taskId)
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_reservation_parameter = function(req, res) {
  Task.find({"hotelName": req.query.hotelName,"arrivalDate":req.query.arrivalDate,"departureDate":req.query.departureDate}, function(err, task) {
    console.log(req.query.hotelName,req.query.departureDate,req.query.arrivalDate,"")
    if (err)
      res.send(err);
    res.json(task);
  });
};


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };