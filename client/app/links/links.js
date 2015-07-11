angular.module('shortly.links', ['shortly.services'])


.controller('LinksController', function ($scope, Links) {
  $scope.test = 'Hello'
  $scope.data = {links:[]};
  $scope.getLinks = function(){
  Links.getLinks()
  .then(function(data){
      $scope.data['links'] = data.data;
    })
  };
  $scope.getLinks();
});
