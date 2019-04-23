angular.module('trends').controller('TrendsController', ['$scope', 'Trends',
  function ($scope, Trends) {

    $scope.locationArr = [];

    /* Get all the trends, then bind it to the scope */
    Trends.getAll(1).then(function (response) {
      $scope.trendsArr = response.data.trends;
      $scope.trendsArr.sort((a, b) => (a.tweet_volume < b.tweet_volume) ? 1 : (a.tweet_volume === b.tweet_volume) ? ((a.name < b.name) ? 1 : -1) : -1);

      $scope.location = response.data.locations[0].name;

      // console.log($scope.trends);
    }, function (error) {
      console.log('Unable to retrieve listings:', error);
    });

    // Pull Location Data
    Trends.getLocation().then(function (response) {
      $scope.locationArr = response.data;
    }, function (error) {
      console.log("Unable to fetch locations");
    })


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
      $scope.showQueryPage = false;
      $scope.showLoginForm = false;
      $scope.showQueryPage = false;
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
    }

    // Toggle Trends Tool View
    $scope.showTrendsTool = function () {
      console.log("trying trends");
      Trends.renderPieChart($scope.trendsArr);
      $scope.showTrendsPage = true;
      $scope.showQueryPage = false;

    }

    // Checks whether user is logged in
    $scope.isLoggedIn = function () {
      return ($scope.user.id == null)
    }

    $scope.selectedLocation = {
      woeid: 1
    };

    // Filter trends by location
    $scope.filterTrendsByLoc = function () {
      Trends.getAll($scope.selectedLocation.woeid).then(function (response) {
        $scope.trendsArr.length = 0;
        $scope.trendsArr = response.data.trends;
        $scope.location = response.data.locations[0].name;

        //Trends.renderPieChart($scope.trendsArr);
        // console.log($scope.trends);
      }, function (error) {
        console.log('Unable to retrieve listings:', error);
      });
    }

    // User object
    $scope.user = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      id: null
    };

    $scope.missingForm = false;

    // Create new user
    $scope.createUser = function () {
      if ($scope.user.username != "" && $scope.user.first_name != "" && $scope.user.last_name != "" && $scope.user.password != "") {
        $scope.missingForm = false;
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
      } else {
        $scope.missingForm = true;
      }

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
        $scope.missingForm = false;
        Trends.updateUser($scope.user).then(function (response) {
          console.log(response);
        }, function (error) {
          console.log('Unable to update user:', error);
        });
      } else {
        $scope.missingForm = true;
      }
    }

    // =========================================================================
    // Query Tool
    // =========================================================================
    $scope.query = {
      text: "",
      tweetArray: []
    }

    $scope.sortOptions = {
      options: [
        "popular",
        "recent"
      ]
    };

    // Formate big nums
    $scope.formatNums = function(num) {
      if (num > 1000) {
        return numeral(num).format('0.00 a');
      } else {
        return num;
      }
    }

    $scope.showHelpText = false;
    $scope.helpText = "Unable to find related tweet. Please try another query!";
    $scope.returnedQuery = "";
    $scope.selectedSort = {
      option: "popular"
    };
    // Query search button event handler
    $scope.searchTweet = function () {
      $scope.query.tweetArray.length = 0;
      $scope.queryObj = {
        queryText: $scope.query.text,
        sortOption: $scope.selectedSort.option
      };

      Trends.getTweets($scope.queryObj).then(function (response) {
        if (response.data.statuses.length == 0) {
          $scope.showHelpText = true;
        } else {
          console.log(response.data);
          $scope.showHelpText = false;
          $scope.returnedQuery = response.data.search_metadata.query;
          $scope.query.tweetArray = response.data.statuses;

          $scope.query.tweetArray.forEach(tweet => {
            tweet.user.followers_count = $scope.formatNums(tweet.user.followers_count);
            tweet.user.friends_count = $scope.formatNums(tweet.user.friends_count);
            tweet.favorite_count = $scope.formatNums(tweet.favorite_count);
            tweet.retweet_count = $scope.formatNums(tweet.retweet_count);
            tweet.user.location = tweet.user.location == "" ? "---" : tweet.user.location;
          });
        }
      }, function (error) {
        console.log("Error getting query data: " + error);
      });

      
    }


    // =========================================================================

  }
]);