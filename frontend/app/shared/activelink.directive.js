(function() {
    'use strict';

    angular
        .module('AFApp.Directives', [])
        .directive('activeLink', ActiveLink);

    ActiveLink.inject = ['$location'];
    function ActiveLink($location) {
        var directive = {
            restrict: 'A',
            link: link,
            replace: false
        };
        return directive;
        
        function link(scope, elem, attrs) {
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#!' + $location.path(), 
                '#!' + $location.path(), //html5: false
                $location.path()]; //html5: true

                _.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (_.indexOf(hrefs, a.attr('href')) !== -1) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');
                    }
                });
            });
        }
    }
})();