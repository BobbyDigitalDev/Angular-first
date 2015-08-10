var myApp = angular.module('myApp', []);

myApp.controller('MyController',['$scope', '$http', function ($scope, $http) {
  $http.get('_/js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';//this initializes the form element to default to the name option
  }); 
}]);//added the scope and http in an array to protect against corruption during minification