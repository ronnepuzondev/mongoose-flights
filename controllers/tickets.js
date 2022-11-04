const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToFlight
};

function create(req, res) {
    const ticket = new Ticket(req.body);
    console.log(req.body)
    console.log('howdy')
    ticket.save(function(err) {})
    Flight.findById(req.params.id, function(err,flight) {
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}


function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', { flight } );
    console.log('im at newTicket')
    });
}

function addToFlight(req, res) {
  Flight.findById(req.params.flightId, function (err, flight) {
    flight.ticket.push(req.body.ticketId)

    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
})
}