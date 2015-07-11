angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.url = ''

  $scope.addLink = function(){
    if(!Auth.isAuth) {
      console.log($scope.url)
      Links.sendLink({url : $scope.url});
    } else {
      console.log('Not Logged In')
      $location.path('/signin');
    }
  };
})
