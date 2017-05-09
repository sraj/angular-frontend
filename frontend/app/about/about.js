(function() {
  'use strict';

  angular.module('AFApp.About', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController'
      });
    }])
    .controller('AboutController', AboutController);

  AboutController.$inject = [];
  function AboutController() {
    //about implementation
  }

})();