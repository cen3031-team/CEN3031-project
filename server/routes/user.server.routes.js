const userController = require('../controllers/user.server.controller'),
      express = require('express'),
      router = express.Router();

router.route('/:username').get(userController.getUserByUsername);

router.route(':/userId')
  .put(userController.updateUser);
  // .delete(userController.deleteUser);

router.route('/').post(userController.createUser);

// Middleware gets triggered whenever a req is made with 'userId' param
router.param('userId', userController.getUserById);

module.exports = router;