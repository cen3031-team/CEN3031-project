var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Schema definition */
var trendsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  query: String,
  tweet_volume: Number,
  created_at: Date,
  updated_at: Date
});

/*'pre' function that adds the updated_at (and created_at if not already there) property */
trendsSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Instantiate mongoose model using schema */
var Trend = mongoose.model('Trend', trendsSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Trend;
