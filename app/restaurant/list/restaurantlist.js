'use strict';
angular.module('myApp').directive('restaurantlist', [function () {
    return {
        templateUrl: 'restaurant/list/restaurantlist.html',
        scope: {
            restaurants: '=',
            restaudetail: '='
        },
        link: function (scope) {
            //function when a restaurant is selected
            scope.selectRestau = function (rest) {
                scope.restaudetail = rest;
            }
        }
    };
}]);