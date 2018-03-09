'use strict';
module.exports = function(app) {
  var hos_res = require('../controllers/hrController');



//   POST /reservation – Creates a new reservation, assigns an ID to it, and returns that ID

  app.route('/reservation')    
  .post(hos_res.create_a_reservation);

//   console.log("oooooooooooooooooooooooooo");


//   GET /reservations – Returns all reservations
  app.route('/reservations')
    .get(hos_res.list_all_reservations)

       
// GET /reservation/ID – Returns a single reservation with ID    
  app.route('/reservation/:id')
    .get(hos_res.read_a_reservation)
    // .put(todoList.update_a_task)
    // .delete(todoList.delete_a_task);


// GET /reservations?hotelName=X&arrivalDate=Y&departureDate=Z – 
// Returns all reservations that match the search criteria
  app.route('/get_reservation')
    .get(hos_res.read_reservation_parameter)


};
