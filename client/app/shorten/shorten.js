angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.url = ''
  $scope.loggedin = false;

  $scope.signout = function(){
    Auth.signout()
  }

  $scope.addLink = function(){
    console.log(Auth.isAuth())
    if(Auth.isAuth) {
      console.log($scope.url)
      Links.sendLink({url : $scope.url});
    } else {
      console.log('Not Logged In')
      $location.path('/signin');
    }
  };

  $scope.init = function(){
    $scope.loggedin = Auth.isAuth()
  }
  $scope.init()
})
