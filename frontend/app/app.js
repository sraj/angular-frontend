'use strict';

(function() {
  angular.module('AFApp', ['ngRoute', 'ui.bootstrap', 'AFApp.Home'])
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
