angular.module('trends').controller('TrendsController', ['$scope', 'Trends',
  function ($scope, Trends) {
    /* Get all the trends, then bind it to the scope */
    Trends.getAll().then(function (response) {
      $scope.trendsArr = response.data.trends;
      $scope.location = response.data.locations[0].name;

      // console.log($scope.trends);
    }, function (error) {
      console.log('Unable to retrieve listings:', error);
    });

    // Frontend Toggles
    $scope.showLoginForm = true;
    $scope.showSignupForm = false;
    $scope.showProfilePage = false;
    $scope.showDashboard = false;
    $scope.showQueryPage = false;
    $scope.showTrendsPage = false;

    // Route to Dashboard
    $scope.toggleDashboardView = function () {
      $scope.showDashboard = true;
      $scope.showTrendsPage = true;
      $scope.showLoginForm = false;
      $scope.showSignupForm = false;
      $scope.showProfilePage = false;
    }

    // Route to Sign Up Page
    $scope.toggleSignupView = function () {
      $scope.showSignupForm = true;
      $scope.showLoginForm = false;
      $scope.showProfilePage = false;
      $scope.showDashboard = false;
    }

    // Route to Login Page
    $scope.toggleLoginView = function () {
      $scope.showLoginForm = true;
      $scope.showSignupForm = false;
      $scope.showProfilePage = false;
      $scope.showDashboard = false;
    }

    $scope.toggleLogoutView = function () {

      $scope.user = {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        id: null
      };
      $scope.toggleLoginView();
    }

    // Route to Profile Page
    $scope.toggleProfileView = function () {
      $scope.showProfilePage = true;
      $scope.showLoginForm = false;
      $scope.showSignupForm = false;
      $scope.showDashboard = false;
    }

    // Toggle Query Tool View
    $scope.showQueryTool = function () {
      $scope.showQueryPage = true;
      $scope.showTrendsPage = false;
      $scope.showLoginForm = false;
      $scope.showSignupForm = false;
      $scope.showProfilePage = false;
    }

    // Toggle Trends Tool View
    $scope.showTrendsTool = function () {
      console.log("trying trends");
      $scope.showTrendsPage = true;
      $scope.showQueryPage = false;
      $scope.showLoginForm = false;
      $scope.showSignupForm = false;
      $scope.showProfilePage = false;
    }

    // Checks whether user is logged in
    $scope.isLoggedIn = function () {
      return ($scope.user.id == null)
    }

    // Toggle Query Tool View
    $scope.showQueryTool = function () {
      $scope.showQueryPage = true;
      $scope.showTrendsPage = false;
      $scope.showProfilePage = false;

    }

    // Toggle Trends Tool View
    $scope.showTrendsTool = function () {
      Trends.renderPieChart($scope.trendsArr);
      $scope.showQueryPage = false;
      $scope.showTrendsPage = true;
      $scope.showProfilePage = false;

    }

    // User object
    $scope.user = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      id: null
    };

    // var response = {
    //   data: {
    //     trends: [{
    //       name: '#ENGvSCO',
    //       url: 'http://twitter.com/search?q=%23ENGvSCO',
    //       promoted_content: null,
    //       query: '%23ENGvSCO',
    //       tweet_volume: 22580
    //     },
    //     {
    //       name: '#iTrustChowkidar',
    //       url: 'http://twitter.com/search?q=%23iTrustChowkidar',
    //       promoted_content: null,
    //       query: '%23iTrustChowkidar',
    //       tweet_volume: 21351
    //     },
    //     {
    //       name: '#TeamGOT7',
    //       url: 'http://twitter.com/search?q=%23TeamGOT7',
    //       promoted_content: null,
    //       query: '%23TeamGOT7',
    //       tweet_volume: 3729973
    //     },
    //     {
    //       name: '#TeamGOT7',
    //       url: 'http://twitter.com/search?q=%23TeamGOT7',
    //       promoted_content: null,
    //       query: '%23TeamGOT7',
    //       tweet_volume: 3729973
    //     }, {
    //       name: '#TeamGOT7',
    //       url: 'http://twitter.com/search?q=%23TeamGOT7',
    //       promoted_content: null,
    //       query: '%23TeamGOT7',
    //       tweet_volume: 3729973
    //     }, {
    //       name: '#TeamGOT7',
    //       url: 'http://twitter.com/search?q=%23TeamGOT7',
    //       promoted_content: null,
    //       query: '%23TeamGOT7',
    //       tweet_volume: 3729973
    //     }
    //     ],
    //     as_of: '2019-03-16T19:26:40Z',
    //     created_at: '2019-03-16T19:24:08Z',
    //     locations: [{
    //       name: 'Worldwide',
    //       woeid: 1
    //     }]
    //   }
    // }
    // $scope.trendsArr = response.data.trends;
    // $scope.location = response.data.locations[0].name;

    // Create new user
    $scope.createUser = function () {

      Trends.createUser($scope.user).then(function (response) {
        $scope.user.first_name = response.data.first_name;
        $scope.user.last_name = response.data.last_name;
        $scope.user.username = response.data.username;
        $scope.user.id = response.data._id;
        console.log("creating user");
        // Toggle Views
        $scope.toggleDashboardView();
      }, function (error) {

        console.log('Unable to create user:', error);
      });
    };

    // Login form data
    $scope.credentials = {
      username: "",
      password: ""
    }

    $scope.wrongCreds = false;
    $scope.missingCreds = false;

    // Login User
    $scope.loginUser = function () {
      if ($scope.credentials.username != "" && $scope.credentials.password != "") {

        Trends.loginUser($scope.credentials).then(function (response) {
          $scope.wrongCreds = false;
          $scope.missingCreds = false;
          // Save user details
          $scope.user.first_name = response.data.first_name;
          $scope.user.last_name = response.data.last_name;
          $scope.user.username = response.data.username;
          $scope.user.id = response.data._id;
          // Toggle Views
          $scope.toggleDashboardView();
        }, function (error) {
          $scope.missingCreds = false;
          $scope.wrongCreds = true;
        });
      }
      else {
        $scope.missingCreds = true;
        $scope.wrongCreds = false;
      }
    }

    $scope.saveUser = function () {
      if ($scope.user.first_name != "" && $scope.user.last_name != "" && $scope.user.password != "") {
        Trends.updateUser($scope.user).then(function (response) {
        }, function (error) {
          console.log('Unable to update user:', error);
        });
      }
    }

    // =========================================================================
    // Query Tool
    // =========================================================================
    $scope.query = {
      text: "",
      tweetArray: []
    }

    $scope.showHelpText = false;
    $scope.helpText = "Unable to find related tweet. Please try another query!";
    $scope.returnedQuery = "";
    // Query search button event handler
    $scope.searchTweet = function () {
      $scope.query.tweetArray.length = 0;
      Trends.getTweets($scope.query.text).then(function (response) {
        console.log(response.data);
        if (response.data.statuses.length == 0) {
          $scope.showHelpText = true;
        } else {
          $scope.showHelpText = false;
          $scope.returnedQuery = response.data.search_metadata.query;
          $scope.query.tweetArray = response.data.statuses;
        }
      }, function (error) {
        console.log("Error getting query data: " + error);
      });
    }


    // =========================================================================

  }
]);