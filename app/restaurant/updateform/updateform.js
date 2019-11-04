'use strict';
angular.module('myApp').directive('updateform', [function () {
    return {
        templateUrl: 'restaurant/updateform/updateform.html',
        scope: {
            restaudetail: '='
        }
    }
}]);