'use strict';
angular.module('myApp').directive('fulldetails', [function () {
    return {
        templateUrl: 'views/restaurant/fulldetails/fulldetails.html',
        scope: {
            restaudetail: '=',
            restaurants: '='
        }
    }
}]);