/* Dependencies */
var request = require('request'),
    config = require('../config/config');
	
exports.results = function(req, res) {
  // Configure req object
  const reqOptions = {
    method: 'GET',
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.queryId + '&result_type=popular&count=10',
    headers: {
      'Authorization': config.bearerToken
    }
  }

  
  console.log(reqOptions.url);
  request(reqOptions, (error, response, body) => {
    if (error) res.status(400).send(error);
    const queryArr = JSON.parse(body);
	console.log(queryArr);
    res.json(queryArr);
  });
  
};

exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.query);
};