//Holds configuration variables

module.exports = {
  db: {
    uri: 'mongodb://zeeshanamin3:dbpassword123@ds139929.mlab.com:39929/software-eng-db', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};
