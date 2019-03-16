const request = require('request');
const config = require('./config');


// One time script tp Get Bearer Token from Twitter API
const reqOptions = {
  method: 'POST',
  url: 'https://api.twitter.com/oauth2/token',
  headers: {
    'Authorization': config.authToken,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: 'grant_type=client_credentials'
}

request(reqOptions, (error, response, body) => {
  if (error) console.log(error);
  console.log(body);
  config.bearerToken = JSON.parse(body)["access_token"];
});