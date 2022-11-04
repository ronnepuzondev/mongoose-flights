var Flight = require("../models/flight");
let today = new Date();
var Ticket = require("../models/ticket");

module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", { title: "Flight Detail", flight, tickets });
    });
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    console.log(flight);
    res.redirect("/flights");
  });
}
