'use strict';
angular.module('myApp').directive('addrestau', [function () {
    return {
        templateUrl: 'views/restaurant/addrestau/addrestau.html',
        scope: {
            restaurants: '=',
            restaudetail: '='
        },
        link: function (scope) {
            //function when a restaurant is selected
            scope.addrestau = function () {
                scope.scope = true
                console.log("adding")
            }
        }
    };
}]);