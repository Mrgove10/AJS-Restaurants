'use strict';

angular.module('myApp.edit', ['ngRoute', 'mainservice'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/edit/:id', {
            templateUrl: 'views/edit/edit.html',
            controller: 'BestCtrl'
        });
    }])
    .controller('BestCtrl', [function () {
    }]);