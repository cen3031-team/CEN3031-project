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


function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var data= [];
var labels = [];
var color = [];
for (var i = 0; i < trendsArr.length; i++) {
  console.log(trendsArr[i].name + trendsArr[i].tweet_volume);
  if(trendsArr[i].tweet_volume != null){
labels.push(trendsArr[i].name);
data.push(trendsArr[i].tweet_volume);
color.push(random_rgba());
}

}


/*var labels = [trendsArr[1].name];
var data = [trendsArr[1].tweet_volume];*/

var pie = document.getElementById("pieChart").getContext('2d');
var bar = document.getElementById("barChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: 'rgb(211,211,211)',
                backgroundColor:color,
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

var myBarChart = new Chart(bar, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
        {
            data: data,
            label: "Volume",
            borderColor: 'rgb(211,211,211)',
            backgroundColor:color,
        }
    ]
},
  options: {
    title: {
      display: true,
      text: "Tweet Volume"
    },
    legend:{display:false},
    scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
        },
            //barPercentage: 1,
            barThickness: 'flex',
            //maxBarThickness: 8,
           // minBarLength: 2,
            gridLines: {
                //offsetGridLines: true
            }
        }]
    }
  }
});


      } ,
	


    // Creates New User
    createUser: function(user) {
      return $http.post('/api/user', user);
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
