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
                    console.log("adding");
                    console.log(scope.tmprestau);
                    scope.tmprestau.guid = uuidv4()
                    scope.restaurants.push(scope.tmprestau);
                    console.log(scope.restaurants);
                }


            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }

        }
    };
}]);