'use strict';
angular.module('myApp').directive('bestrestaulist', [function () {
    return {
        templateUrl: 'views/best/bestlist/bestlist.html',
        scope: {
            restau: '='
        }
    }
}]);