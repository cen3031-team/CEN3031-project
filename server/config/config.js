const btoa = require('btoa');
//Holds configuration variables

const apiKey = "b8UZisWJbiNR1qhqox7evsuGE";
const secret = "7cDEcaAmVHVdcboedyA3YW6UPoSzqlbFmG59pNYXBfQy44ylVS";
const base64Encoded = 'Basic ' + btoa(`${apiKey}:${secret}`);

module.exports = {
  db: {
    uri: 'mongodb://zeeshanamin3:dbpassword123@ds139929.mlab.com:39929/software-eng-db', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080,
  authToken: base64Encoded,
  bearerToken: 'AAAAAAAAAAAAAAAAAAAAAIFJ9gAAAAAAmmjlyZYDEXCl4bX2Qyu0uzZeGXQ%3D8AtS8NYTmAuT4r82kBEJAPBc8XX68nDqyFvmy8vBuxOwtYFjrZ'
};
