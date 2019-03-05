/* Dependencies */
var listings = require('../controllers/listings.server.controller.js'),
    express = require('express'),
    router = express.Router();

/*
  These method calls are responsible for routing requests to the correct request handler.
*/
// router.route('/')
//   .get(listings.list)
//   .post(listings.create);


/*
  The ':' specifies a URL parameter. 
 */
router.route('/:listingId')
  .get(listings.read)
  .put(listings.update)
  .delete(listings.delete);

router.param('listingId', listings.listingByID);

module.exports = router;
