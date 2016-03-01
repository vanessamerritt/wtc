/*TODO #1: Add a dependency on the router module*/
var app = angular.module('WTC', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home',{
    templateUrl: '../partials/home.html',
    controller: 'mainCtrl as ctrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
})

