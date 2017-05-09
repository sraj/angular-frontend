(function() {

  'use strict';

  angular.module('AFApp', [
    'ngRoute', 
    'ui.bootstrap', 
    'AFApp.Templates',
    'AFApp.Directives', 
    'AFApp.Home', 
    'AFApp.About'])

    .config(['$locationProvider', '$routeProvider', 
             function($locationProvider, $routeProvider) {
               $locationProvider.hashPrefix('!');
               $routeProvider.otherwise({
                 redirectTo: '/home'
               });
             }])

    .run(function() {
      console.log("App loaded!");
    });

  angular.element(function() {
    angular.bootstrap(document, ['AFApp']);
  });

})();
