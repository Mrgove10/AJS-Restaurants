'use strict';

angular.module('myApp.bestview', ['ngRoute', 'mainservice'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/best', {
            templateUrl: 'views/best/best.html',
            controller: 'BestCtrl'
        });
    }])
    .controller('BestCtrl', [function () {
    }]);