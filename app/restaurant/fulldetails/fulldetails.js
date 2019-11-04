'use strict';
var myModule = angular.module('myApp');
myModule.directive('restaurantdetaillist', [function () {
    return {
        templateUrl: 'restaurant/detaillist/restaurantdetaillist.html',
        scope: {
            restau: '=restau'
        }
    }
}]);