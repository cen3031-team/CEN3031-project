var locationController = require('../controllers/locations.server.controller'),
    express = require('express');
    router = express.Router();

router.route("/").get(locationController.list);

module.exports = router;
