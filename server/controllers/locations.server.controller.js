const Location = require('../models/locations.server.model');

exports.list = function (req, res) {
  Location.find({}, (err, locations) => {
    if (err) {
      res.status(400).send("Unable to fetch locations");
    } else {
      res.json(locations);
    }
  });
}