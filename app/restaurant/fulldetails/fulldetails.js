'use strict';
angular.module('myApp').directive('fulldetails', [function () {
    return {
        templateUrl: 'restaurant/fulldetails/fulldetails.html',
        scope: {
            restaudetail: '='
        }
    }
}]);