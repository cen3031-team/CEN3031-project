const User = require('../models/user.server.model'),
  mongoose = require('mongoose');

// Create a new user
exports.createUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(newUser);
    }
  });
}

// Find user by username
exports.getUserByUsername = (req, res) => {
  User.findOne({ username: req.params.username }, (error, user) => {
    console.log(user)
    console.log(req.params.username);
    if (error || user == null) res.status(400).send(error);
    else res.json(user);
  });
}

// Update user with new info
exports.updateUser = (req, res) => {
  // const user = req.user;
  const id = req.params.userId;
  console.log(id);
  User.findById(id, (err, user) => {
    if (err) res.status(400).send(err);
    const updatedUser = req.body;
    user.first_name = updatedUser.first_name;
    user.last_name = updatedUser.last_name;
    user.password = updatedUser.password;
    console.log("updateUser called");
    user.save((err) => {
      if (err) res.status(400).send(err);
      res.json(user);
    });
  });

}

// Delete User
exports.deleteUser = (req, res) => {
  const delUser = req.params.username;
  if (!delUser) res.status(404).send('User not found');
  User.findOneAndRemove({ username: delUser }, (err, user) => {
    if (err) res.status(400).send(err);
    res.json(user);
  });
}
