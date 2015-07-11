angular.module('shortly.links', ['shortly.services'])


.controller('LinksController', function ($scope, Links, Auth) {
  $scope.loggedin = false;
  $scope.data = {links:[]};
  $scope.getLinks = function(){
  Links.getLinks()
  .then(function(data){
      $scope.data['links'] = data.data;
    })
  };

  $scope.signout = function(){
    Auth.signout()
  }

  $scope.init = function(){
    $scope.loggedin = Auth.isAuth()
    $scope.getLinks();
  }
  $scope.init()


});
