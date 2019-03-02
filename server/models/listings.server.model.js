var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Schema definition */
var listingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  address: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  created_at: Date,
  updated_at: Date
});

/*'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Instantiate mongoose model using schema */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
