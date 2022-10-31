var Flight = require('../models/flight');

module.exports = {
  new: newFlight,
};

// function index(req, res) {
//   Movie.find({}, function(err, movies) {
//     res.render('movies/index', { title: 'All Movies', movies });
//   });
// }

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
  }
  