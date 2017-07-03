(function() {
    'use strict';

    var dependencies = [
        'ngAnimate',
        'ngRoute',
        'ngSanitize'
    ];

    angular
        .module('portfolio', dependencies)
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'IndexController',
                controllerAs: 'vm'
            })
            .otherwise({templateUrl: 'views/not-found.html'});
    }
})();
