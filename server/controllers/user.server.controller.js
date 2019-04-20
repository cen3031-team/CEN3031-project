const User = require('../models/user.server.model');

  // Login user
exports.loginUser = (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.json(req.user);
  } else {
    res.status(400).send("Invalid Credentials");
  }
}
// Create a new user
exports.createUser = (req, res) => {
  let newUser = new User(req.body);
  console.log(req.body.user);
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
  User.findOne({username: req.params.username}, (error, user) => {
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

// Middleware: Get User by ID
exports.getUserById = (req, res, next ,id) => {
  User.findById(id, (err, user) => {
    if (err) res.status(400).send(err);
    req.user = user;
    next();
  });
}

// Auth middleware: get user by id
exports.findById = (id, callback) => {
  User.findById(id, (err, user) => {
    if (err) {
      callback(new Error('User ' + id + ' not found.'));
    } else {
      callback(null, user);
    }
  });
}

// Auth middleware: get user by username
exports.findByUsername = (username, callback) => {
  User.findOne({username: username}, (error, user) => {
    if (error) {
      return callback(null, null);
    } else {
      return callback(null, user);
    }
  });
}
