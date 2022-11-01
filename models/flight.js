const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW','DEN','LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
  }, {
    timestamps: true
  });


var flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    },
    airport: {
        type: String,
        required: true
    },
    flightNo: {
        type: String,
        required: true,
    },
    departs: {
        type: Date,
        required: true,},
    destinations: [destinationSchema]
    }, {
        timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)