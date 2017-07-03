(function() {
    'use strict';

    angular
        .module('portfolio')
        .directive('gsFadeDuringResolve', Directive);

    Directive.$inject = ['$rootScope'];

    function Directive($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $rootScope.$on('$routeChangeStart', function(event, currentRoute, previousRoute) {
                    if (!previousRoute) return;

                    element.addClass('faded');
                });

                $rootScope.$on('$routeChangeSuccess', function() {
                    element.removeClass('faded');
                });

                $rootScope.$on('$routeChangeError', function() {
                    element.removeClass('faded');
                });
            }
        };
    }
})();
