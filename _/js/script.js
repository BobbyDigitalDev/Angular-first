var myApp=angular.module("myApp",["ngRoute","artistControllers"]);myApp.config(["$routeProvider",function(a){a.when("/list",{templateUrl:"partials/list.html",controller:"ListController"}).when("/details/:itemId",{templateUrl:"partials/details.html",controller:"DetailsController"}).otherwise({redirectTo:"/list"})}]);var artistControllers=angular.module("artistControllers",["ngAnimate"]);artistControllers.controller("ListController",["$scope","$http",function(a,b){b.get("_/js/data.json").success(function(b){a.artists=b,a.artistOrder="name"})}]),artistControllers.controller("DetailsController",["$scope","$http","$routeParams",function(a,b,c){b.get("_/js/data.json").success(function(b){a.artists=b,a.whichItem=c.itemId,c.itemId>0?a.prevItem=Number(c.itemId)-1:a.prevItem=a.artists.length-1,c.itemId<a.artists.length-1?a.nextItem=Number(c.itemId)+1:a.nextItem=0})}]);