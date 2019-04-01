var path = require('path'),
  express = require('express'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  trendsRouter = require('../routes/trends.server.routes'),
  userRouter = require('../routes/user.server.routes'),
  queryRouter = require('../routes/queries.server.routes');

module.exports.init = function () {
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


  /**
  Use the listings router for requests to the api */
  app.use('/api/trends', trendsRouter);

  //Query router
  app.use('/api/search', queryRouter);
  
  // User router
  app.use('/api/user', userRouter);

  /**
  Go to homepage for all routes not specified */
  app.all('*', (req, res, next) => {
    res.redirect('/');
    next();
  });

  return app;
};  