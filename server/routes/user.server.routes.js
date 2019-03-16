const userController = require('../controllers/user.server.controller'),
      express = require('express'),
      router = express.Router();


router.route('/').post(userController.createUser);

module.exports = router;