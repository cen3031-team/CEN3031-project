const userController = require('../controllers/user.server.controller'),
      express = require('express'),
      passport = require('passport'),
      router = express.Router();

router.route('/login').post(passport.authenticate('local'), userController.loginUser);
router.route('/:username').get(userController.getUserByUsername);
router.route('/:username').delete(userController.deleteUser);

router.route('/:userId').put(userController.updateUser);

router.route('/').post(userController.createUser);

// Middleware gets triggered whenever a req is made with 'userId' param
// router.param('userId', userController.getUserById);

module.exports = router;