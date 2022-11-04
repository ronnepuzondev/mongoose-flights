const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
  seat: {
    type: String
    },
  price: {
    type: Number
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  }
},
{
  timestamps: true
}  
);

module.exports = mongoose.model('Ticket', ticketSchema);