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
var created = [];          
for (var i = 0; i < trendsArr.length; i++) {
console.log(trendsArr[i].name + trendsArr[i].tweet_volume);
if(trendsArr[i].tweet_volume != null){
    created.push(trendsArr[i].created_at);
labels.push(trendsArr[i].name);
data.push(trendsArr[i].tweet_volume);
color.push(random_rgba());
}

}


/*var labels = [trendsArr[1].name];
var data = [trendsArr[1].tweet_volume];*/

var pie = document.getElementById("pieChart").getContext('2d');
var bar = document.getElementById("barChart").getContext('2d');
var bubble = document.getElementById("bubbleChart").getContext('2d');
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
        
        


        
        
/*var myBubbleChart = new Chart(bubble, {
  type: 'bubble',
  data: {
    labels: labels,
    datasets: [
      {
        label: "Popularity",
        backgroundColor: color,
        borderColor: "rgba(255,221,50,1)",
        data: bubbledata
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Tweet Volume vs Date Created'
    }, scales: {
      yAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Popularity"
        }
      }],
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Date Created"
        }
      }]
    }
  }
});*/
        


    }
   

  };

  return methods;
});
