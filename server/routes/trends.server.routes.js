/* Dependencies */
var trends = require('../controllers/trends.server.controller.js'),
    express = require('express'),
    router = express.Router();

/*
  These method calls are responsible for routing requests to the correct request handler.
*/
router.route('/')
  .get(trends.list);


/*
  The ':' specifies a URL parameter. 
 */
router.route('/:trendId')
  .get(trends.read);


module.exports = router;
