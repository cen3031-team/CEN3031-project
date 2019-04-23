angular.module('trends', []).factory('Trends', function ($http) {
var created= false;

  var methods = {
    // Returns All Global Trends
    getAll: function (woeid) {
      return $http.get('/api/trends/' + woeid);
    },

    // Get location objects
    getLocation: function () {
      return $http.get('/api/location');
    },

    // Search tweets by popularity or recent
    getTweets: function (query) {
      return $http.put('/api/search/', query);
    },


    // Update User
    updateUser: function (user) {
      return $http.put('/api/user/' + user.id, user);
    },

    // Creates New User
    createUser: function (user) {
      return $http.post('/api/user', user);
    },

    // Login User
    loginUser: function (credentials) {
      return $http.post('/api/user/login', credentials);
    },

    updateCharts: function(trendsArr){
      console.log("updating");
      myBarChart.clear();
      myChart.clear();
      console.log(update);
      var data = [];
      var labels = [];
      var color = [];
      var created = [];
      var colorsList = ['rgba(132,45,152,0.6)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(105,192,217,0.1)', 'rgba(171,222,203,0.9)', 'rgba(164, 190, 243,0.4)', 'rgba(164,190, 243, 0.1)', 'rgba(225, 146, 139,0.4)', 'rgba(239, 233, 174,1.0)', 'rgba(181, 254, 217,1.0)', 'rgba(187, 160, 202,0.5)', 'rgba(135, 37, 91,0.5)', 'rgba(72, 229, 194, 0.9)', 'rgba(82, 72, 156,0.5)', 'rgba(229, 164, 192,0.5)', 'rgba(143,213,166,0.9)', 'rgba(50,159,91,0.5)', 'rgba(50,2,31,0.5)', 'rgba(119,160,169,0.9)', 'rgba(117,244,244,0.5)', 'rgba(184,179,233,0.5)', 'rgba(217,153,185,0.9)', 'rgba(255,204,90,0.5)', 'rgba(255, 210, 90,0.5)', 'rgba(225,120,90,0.9)', 'rgba(51,102,153,0.5)', 'rgba(141,233,105,0.5)', 'rgba(203,239,67,0.9)', 'rgba(120,205,215,0.5)', 'rgba(107,212,37,0.5)', 'rgba(66,17,60,0.9)', 'rgba(241,113,50.5)', 'rgba(209,17,73,0.5)', 'rgba(126,107,143,0.9)', 'rgba(218,62,82,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)'];
      for (var i = 0; i < trendsArr.length; i++) {
        if (trendsArr[i].tweet_volume != null) {
          created.push(trendsArr[i].created_at);
          labels.push(trendsArr[i].name);
          data.push(trendsArr[i].tweet_volume);
          color.push(colorsList[i]);

        }

      }

      var pie = document.getElementById("pieChart");
      var bar = document.getElementById("barChart");

      pie.data.labels = labels;
      pie.data.datasets.data = data;
      pie.data.datasets.backgroundColor = color;
        
        myChart.update();
        myBarChart.update();
    },

    renderPieChart: function (trendsArr) {
      /*function random_rgba() {
      var o = Math.round, r = Math.random, s = 255;
      console.log('rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')');
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
      }*/
if(!created){
  created = true;
      var data = [];
      var labels = [];
      var color = [];
      var created = [];
      var colorsList = ['rgba(132,45,152,0.6)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(105,192,217,0.1)', 'rgba(171,222,203,0.9)', 'rgba(164, 190, 243,0.4)', 'rgba(164,190, 243, 0.1)', 'rgba(225, 146, 139,0.4)', 'rgba(239, 233, 174,1.0)', 'rgba(181, 254, 217,1.0)', 'rgba(187, 160, 202,0.5)', 'rgba(135, 37, 91,0.5)', 'rgba(72, 229, 194, 0.9)', 'rgba(82, 72, 156,0.5)', 'rgba(229, 164, 192,0.5)', 'rgba(143,213,166,0.9)', 'rgba(50,159,91,0.5)', 'rgba(50,2,31,0.5)', 'rgba(119,160,169,0.9)', 'rgba(117,244,244,0.5)', 'rgba(184,179,233,0.5)', 'rgba(217,153,185,0.9)', 'rgba(255,204,90,0.5)', 'rgba(255, 210, 90,0.5)', 'rgba(225,120,90,0.9)', 'rgba(51,102,153,0.5)', 'rgba(141,233,105,0.5)', 'rgba(203,239,67,0.9)', 'rgba(120,205,215,0.5)', 'rgba(107,212,37,0.5)', 'rgba(66,17,60,0.9)', 'rgba(241,113,50.5)', 'rgba(209,17,73,0.5)', 'rgba(126,107,143,0.9)', 'rgba(218,62,82,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)', 'rgba(234,90,13,0.5)', 'rgba(169,223,149,0.5)', 'rgba(149,82,49,0.9)'];
      for (var i = 0; i < trendsArr.length; i++) {
        if (trendsArr[i].tweet_volume != null) {
          created.push(trendsArr[i].created_at);
          labels.push(trendsArr[i].name);
          data.push(trendsArr[i].tweet_volume);
          color.push(colorsList[i]);

        }

      }


      /*var labels = [trendsArr[1].name];
      var data = [trendsArr[1].tweet_volume];*/

      var pie = document.getElementById("pieChart");
      var bar = document.getElementById("barChart");
      
      //var bubble = document.getElementById("bubbleChart").getContext('2d');

      if (pie != null && bar != null) {
       
        pie = pie.getContext('2d');
        bar = bar.getContext('2d');
       

         var myChart = new Chart(pie, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                borderColor: 'rgb(211,211,211)',
                backgroundColor: color,
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
                backgroundColor: color,
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: "Tweet Volume"
            },
            legend: { display: false },
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
        //myChart.clear();
      }
    }
    else{
      myChart.destroy();
      
      updateCharts(trendsArr);
    }
    }

  };

  return methods;
});