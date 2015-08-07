var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
  $scope.author = {
    'name' : 'Bobby Lopez',
    'title' : 'Master of the universe', 
    'company' : 'masters r us'
  };
});