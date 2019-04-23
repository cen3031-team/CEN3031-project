'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
  mongoose = require('mongoose'),
  Location = require('../models/locations.server.model'),
  config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri, {
  useMongoClient: true
});
/* 
  Save Location JSON to database
 */

// Read json file
fs.readFile('./config/locations.json', (err, data) => {
  if (err) console.log(err);
  const locationJson = JSON.parse(data);
  // Create new instances of Location model iterating over the json array
  locationJson.forEach((entry) => {
    let newLocation = Location(entry);
    // Save the new Location
    newLocation.save((err) => {
      if (err) console.log(err);
    })
  });
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */