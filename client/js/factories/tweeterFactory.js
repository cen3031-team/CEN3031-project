angular.module('trends', []).factory('Trends', function ($http) {

  var methods = {
    // Returns All Global Trends
    getAll: function () {
      return $http.get('/api/trends');
    },

    // Search popular tweets
    getTweets: function (query) {
      return $http.get('/api/search/' + query);
    },

    // Creates New User
    createUser: function (user) {
      return $http.post('/api/user', user);
    },

    // Login User
    loginUser: function (credentials) {
      return $http.get('/api/user/' + credentials);
    }
   

  };

  return methods;
});
