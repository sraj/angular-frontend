'use strict';

(function() {
  angular.module('AFApp', ['ngRoute', 'AFApp.Home'])
    .config(['$locationProvider', '$routeProvider', 
             function($locationProvider, $routeProvider) {
               $locationProvider.hashPrefix('!');
               $routeProvider.otherwise({
                 redirectTo: '/home'
               });
             }]);

  angular.element(function() {
    angular.bootstrap(document, ['AFApp']);
  });
})();
