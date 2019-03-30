angular.module('trends', []).factory('Trends', function($http) {

  var methods = {
    // Returns All Global Trends
    getAll: function() {
      return $http.get('/api/trends');
    },
      renderPieChart: function(trendsArr){
        /*  var labels = [
    "Vote for blue",
    "vote for red",
];
var data = [
    70,
    10,
   
];*/

var labels = [trendsArr.name];
var data = [trendsArr.tweet_volume];

var pie = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor:'rgba(75, 192, 192, 0.2)',
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Tweet Volume"
        }
    }
});
      } ,
	
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
