
/* Dependencies */
var mongoose = require('mongoose'),
    request = require('request'),
    config = require('../config/config');
    Trend = require('../models/trends.server.model.js');


    /* Retreive all the trends */
exports.list = function(req, res) {
  // Configure req object
  const reqOptions = {
    method: 'GET',
    url: 'https://api.twitter.com/1.1/trends/place.json?id=1',
    headers: {
      'Authorization': config.bearerToken
    }
  }

  request(reqOptions, (error, response, body) => {
    if (error) console.log(error);
    const trendArr = JSON.parse(body)[0];
    res.json(trendArr);
  });


};
/* Create a listing */
// exports.create = function(req, res) {

//   /* Instantiate a Listing */
//   var listing = new Listing(req.body);


//   /* Save the listing */
//   listing.save(function(err) {
//     if(err) {
//       console.log(err);
//       res.status(400).send(err);
//     } else {
//       res.json(listing);
//     }
//   });
// };

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.trend);
};

/* Update a listing */
// exports.update = function(req, res) {
//   var listing = req.listing;

//   /**
//   /* Replace the article's properties with the new properties found in req.body */
//   /* Save the article */
//   listing.code = req.body.code;
//   listing.address = req.body.address;
//   listing.name = req.body.name;

//   listing.save((err, updatedListing) => {
//     if (err) console.log(err);
//     res.json(updatedListing);
//   })
// };

/* Delete a listing */
// exports.delete = function(req, res) {
//   var listing = req.listing;

//   /* Remove the article */
//   listing.remove((err) => {
//     if (err) console.log(err);
//     res.json(listing);
//   })
// };

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
// exports.listingByID = function(req, res, next, id) {
//   Listing.findById(id).exec(function(err, listing) {
//     if(err) {
//       res.status(400).send(err);
//     } else {
//       req.listing = listing;
//       next();
//     }
//   });
// };
