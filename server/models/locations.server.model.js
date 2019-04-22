var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Schema definition */
var locationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  placeType: {
    code: {
      type: Number,
      name: String
    }
  },
  url: String,
  parentid: Number,
  country: String,
  woeid: {
    type: Number,
    required: true,
    unique: true
  },
  countryCode: String
});


/* Instantiate mongoose model using schema */
var Location = mongoose.model('Location', locationSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Location;
