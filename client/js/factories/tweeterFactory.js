angular.module('trends', []).factory('Trends', function($http) {

  var methods = {
    // Returns All Global Trends
    getAll: function() {
      return $http.get('/api/trends');
    },
	
	// create: function(listing) {
	//   return $http.post('/api/listings', listing);
  //   }, 

  //   delete: function(id) {
	//    /**
  //       return result of HTTP delete method
  //      */
  //     return $http.delete('/api/listings/' + id);

  //   }
  };

  return methods;
});