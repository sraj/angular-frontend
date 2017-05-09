(function() {
  'use strict';

  angular.module('AFApp.Home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });
    }])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {
    //homecontroller implementation
  }

})();