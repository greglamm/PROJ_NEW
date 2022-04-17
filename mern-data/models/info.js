const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for info
const InfoSchema = new Schema({
  cust_name: {
    type: String,
    required: [true, 'The info text field is required'],
  },
  email: {
    type: String,
    required: [true, 'The info text field is required'],
  },
});

// Create model for info
const Info = mongoose.model('info', InfoSchema);

module.exports = Info;