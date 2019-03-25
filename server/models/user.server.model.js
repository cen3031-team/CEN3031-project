const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

// Define User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  const currentTime = new Date().toISOString();
  this.updated_at = currentTime;
  if (this.created_at == null)
  {
    this.created_at = currentTime;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;