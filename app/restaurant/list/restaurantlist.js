'use strict';
angular.module('myApp').directive('restaurantlist', [function () {
    return {
        templateUrl: 'restaurant/list/restaurantlist.html',
        scope: {
            restaurants: '=',
            restaudetail:'='
        },
        link: function (scope) {
            scope.selectRestau = function (rest) {
                scope.restaudetail = rest;
            }
        }
    };
}]);