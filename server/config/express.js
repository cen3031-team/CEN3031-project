var express = require('express'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  trendsRouter = require('../routes/trends.server.routes'),
  userRouter = require('../routes/user.server.routes'),
  locationRouter = require('../routes/locations.server.routes'),
  queryRouter = require('../routes/queries.server.routes'),
  passport = require('passport'),
  Strategy = require('passport-local').Strategy,
  userController = require('../controllers/user.server.controller');

module.exports.init = function () {
  //connect to database
  mongoose.connect(config.db.uri, {
    useMongoClient: true
  });

  // Init Passport
  passport.use(new Strategy(
    function (username, password, cb) {
      userController.findByUsername(username, function (err, user) {
        if (err) {
          return cb(err);
        }
        if (!user) {
          return cb(null, false);
        }
        if (user.password != password) {
          return cb(null, false);
        }
        return cb(null, user);
      });
    }
  ));

  // Config passport session
  passport.serializeUser(function (user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(function (id, cb) {
    userController.findById(id, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  app.use(require('cookie-parser')());

  //body parsing middleware 
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  /**
  Serve static files */
  app.use(express.static('client'));

  // Session handling
  app.use(require('express-session')({ secret: 'nyancat', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Trends router
  app.use('/api/trends', trendsRouter);

  // Location router
  app.use('/api/location', locationRouter);

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