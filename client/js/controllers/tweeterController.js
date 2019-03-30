angular.module('trends').controller('TrendsController', ['$scope', 'Trends',
  function ($scope, Trends) {
    // /* Get all the trends, then bind it to the scope */
    // Trends.getAll().then(function (response) {
    //   $scope.trendsArr = response.data.trends;
    //   $scope.location = response.data.locations[0].name;
    //   // console.log($scope.trends);
    // }, function (error) {
    //   console.log('Unable to retrieve listings:', error);
    // });

    // Frontend Toggles / Vars
    $scope.showSignupForm = false;
    $scope.showLoginForm = true;
    $scope.showTrendsPage = false;

    // Route to Sign Up Page
    $scope.toggleSignupView = function () {
      $scope.showSignupForm = true;
      $scope.showLoginForm = false;
    }
    
    // Route to Login Page
    $scope.toggleLoginView = function () {
      $scope.showLoginForm = true;
      $scope.showSignupForm = false;
    }

    // Checks whether user is logged in
    $scope.isLoggedIn = function () {
      return ($scope.user.id == null)
    }

    // User object
    $scope.user = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      id: null
    };



    var response = {
      data: {
        trends: [{
            name: '#ENGvSCO',
            url: 'http://twitter.com/search?q=%23ENGvSCO',
            promoted_content: null,
            query: '%23ENGvSCO',
            tweet_volume: 22580
          },
          {
            name: '#iTrustChowkidar',
            url: 'http://twitter.com/search?q=%23iTrustChowkidar',
            promoted_content: null,
            query: '%23iTrustChowkidar',
            tweet_volume: 21351
          },
          {
            name: '#TeamGOT7',
            url: 'http://twitter.com/search?q=%23TeamGOT7',
            promoted_content: null,
            query: '%23TeamGOT7',
            tweet_volume: 3729973
          },
          {
            name: '#TeamGOT7',
            url: 'http://twitter.com/search?q=%23TeamGOT7',
            promoted_content: null,
            query: '%23TeamGOT7',
            tweet_volume: 3729973
          }, {
            name: '#TeamGOT7',
            url: 'http://twitter.com/search?q=%23TeamGOT7',
            promoted_content: null,
            query: '%23TeamGOT7',
            tweet_volume: 3729973
          }, {
            name: '#TeamGOT7',
            url: 'http://twitter.com/search?q=%23TeamGOT7',
            promoted_content: null,
            query: '%23TeamGOT7',
            tweet_volume: 3729973
          }
        ],
        as_of: '2019-03-16T19:26:40Z',
        created_at: '2019-03-16T19:24:08Z',
        locations: [{
          name: 'Worldwide',
          woeid: 1
        }]
      }
    }
    $scope.trendsArr = response.data.trends;
    $scope.location = response.data.locations[0].name;

    // Create new user
    $scope.createUser = function () {

      Trends.createUser($scope.user).then(function (response) {
        $scope.user.first_name = response.data.first_name;
        $scope.user.last_name = response.data.last_name;
        $scope.user.username = response.data.username;
        $scope.user.id = response.data._id;

        // Toggle Views
        $scope.showSignupForm = false;
        $scope.showLoginForm = false;
        $scope.showTrendsPage = true;
      }, function (error) {
        console.log('Unable to create user:', error);
      });
    };

    // Login User
    $scope.loginUser = function () {
      if ($scope.user.username != "" && $scope.user.password != "") {
        Trends.loginUser($scope.user.username).then(function (response) {
          console.log(response);
          // Save user details
          $scope.user.first_name = response.data.first_name;
          $scope.user.last_name = response.data.last_name;
          $scope.user.username = response.data.username;
          $scope.user.id = response.data._id;

          // Toggle Views
          $scope.showSignupForm = false;
          $scope.showLoginForm = false;
          $scope.showTrendsPage = true;
        }, function (error) {
          console.log("Wrong Credentials");
        });
      }
    }

    // $scope.detailedInfo = undefined;

    // $scope.addListing = function () {
    //   /**
    //   *Save the article using the Listings factory. If the object is successfully 
    //   saved redirect back to the list page. Otherwise, display the error
    //  */
    //   if ($scope.newListing == undefined) console.log("Unable to add empty listing.");
    //   else {
    //     Listings.create($scope.newListing).then(function (response) {
    //       console.log("Successfully added " + response.data);
    //       $scope.listings.push(response.data);
    //     }), function (error) {
    //       console.log(error);
    //     }
    //   }
    // }


    // $scope.deleteListing = function (id) {
    //   /**
    //   Delete the article using the Listings factory. If the removal is successful, 
    //   navigate back to 'listing.list'. Otherwise, display the error. 
    //   */
    //   Listings.delete(id).then(function (response) {
    //     console.log(response.data);
    //     let delIndex = 0;
    //     $scope.listings.forEach((listing, index) => {
    //       if (listing.code == response.data.code) delIndex = index;
    //     });
    //     $scope.listings.splice(delIndex, 1);
    //   }), function (error) {
    //     console.log("Unable to delete listing", error);
    //   }
    // };

    // $scope.showDetails = function (index) {
    //   $scope.detailedInfo = $scope.listings[index];
    // };
  }
]);