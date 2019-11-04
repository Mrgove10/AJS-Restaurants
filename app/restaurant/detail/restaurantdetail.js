'use strict';
var myModule = angular.module('myApp');
myModule.directive('restaurantdetail', [function () {
    return {
        templateUrl: 'restaurant/detail/restaurantdetail.html',
        scope: {
            restau: '=restau'
        }
    }
}]);