/* Dependencies */
var request = require('request'),
  config = require('../config/config');

exports.results = function (req, res) {
  // Configure req object
  const reqOptions = {
    method: 'GET',
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.queryId + '&result_type=popular&count=10&tweet_mode=extended',
    headers: {
      'Authorization': config.bearerToken
    }
  }

  request(reqOptions, (error, response, body) => {
    if (error) res.status(400).send(error);
    const queryArr = JSON.parse(body);
    res.json(queryArr);
  });

};
