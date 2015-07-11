angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.url = ''

  $scope.addLink = function(){
    console.log($scope.url)
    Links.sendLink({url : $scope.url});
  }
});
