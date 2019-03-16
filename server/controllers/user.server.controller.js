const User = require('../models/user.server.model'),
  mongoose = require('mongoose');

// Create a new user
exports.createUser = (req, res) => {
  let newUser = new User(req.body.user);
  newUser.save((err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(newUser);
    }
  });
}
