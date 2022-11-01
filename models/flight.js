const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
        required: true,}
    }, {
        timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)