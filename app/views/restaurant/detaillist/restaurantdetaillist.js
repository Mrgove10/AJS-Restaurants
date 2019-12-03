'use strict';
angular.module('myApp').directive('restaurantdetaillist', [function () {
    return {
        templateUrl: 'views/restaurant/detaillist/restaurantdetaillist.html',
        scope: {
            restau: '='
        }
    }
}]);