'use strict';
angular.module('myApp').directive('restaurantdetaillist', [function () {
    return {
        templateUrl: 'restaurant/detaillist/restaurantdetaillist.html',
        scope: {
            restau: '='
        }
    }
}]);