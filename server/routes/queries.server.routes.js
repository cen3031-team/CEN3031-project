/* Dependencies */
var queries = require('../controllers/queries.server.controller.js'),
    express = require('express'),
    router = express.Router();
	
	
router.route('/')
	.put(queries.results);
	
module.exports = router;