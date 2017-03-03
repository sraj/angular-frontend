'use strict';

angular.module('AFApp.About', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutCtrl'
    });
  })

  .controller("AboutCtrl", function() {
    console.log('about');
  });
