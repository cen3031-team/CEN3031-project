var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    request = require('request'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {
    useMongoClient: true
  });

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());
  
  /**
  Serve static files */
  app.use(express.static('client'));

  // // Get Bearer Token from Twitter API
  // const reqOptions = {
  //   method: 'POST',
  //   url: 'https://api.twitter.com/oauth2/token',
  //   headers: {
  //     'Authorization': config.authToken,
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   },
  //   body: 'grant_type=client_credentials'
  // }

  // request(reqOptions, (error, response, body) => {
  //   if (error) console.log(error);
  //   console.log(body);
  //   config.bearerToken = JSON.parse(body)["access_token"];
  // });

  /**
  Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);

  /**
  Go to homepage for all routes not specified */ 
  app.all('*', (req, res, next) => {
    res.redirect('/');
    next();
  });

  return app;
};  