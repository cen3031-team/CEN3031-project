angular.module('trends').controller('TrendsController', ['$scope', 'Trends',
  function ($scope, Trends) {
    // /* Get all the listings, then bind it to the scope */
    // Listings.getAll().then(function (response) {
    //   $scope.listings = response.data;
    // }, function (error) {
    //   console.log('Unable to retrieve listings:', error);
    // });

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