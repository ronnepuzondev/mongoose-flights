const Movie = require('./models/movie.js')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/movies')

// shortcut variable
const db = mongoose.connection

db.on('connected', function() {
  Movie.updateMany(
    {}, // Query object determines which docs to update
    { cast: [] }, // Update object has properties to update
    function (err, result) {
      console.log(result)
    }
  )
})