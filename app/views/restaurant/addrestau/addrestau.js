'use strict';
angular.module('myApp').directive('addrestau', [function () {
    return {
        templateUrl: 'views/restaurant/addrestau/addrestau.html',
        scope: {
            restaurants: '='
        },
        link: function (scope) {
            //function when a restaurant is selected
            scope.$watch(() => scope.restaudetail, function () {
                scope.myrestau = angular.copy(scope.restaudetail);
            }),

                //Validate button
                scope.valider = function () {
                    scope.tmprestau.guid = scope.uuidv4()
                    scope.restaurants.push(scope.tmprestau);
                    //TODO : mail doesnt work because there is no verifictaion i guesse (lol)
                },

                scope.uuidv4 = function() {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                }
        }
    };
}]);