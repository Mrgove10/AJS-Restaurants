'use strict';
angular.module('myApp').directive('restaurantdetaillist', [function () {
    return {
        templateUrl: 'views/best/bestlist/bestlist.html',
        scope: {
            restau: '='
        }
    }
}]);