'use strict';
angular.module('myApp').directive('updateform', [function () {
    return {
        templateUrl: 'views/restaurant/updateform/updateform.html',
        scope: {
            restaudetail: '='
        },
        link: function (scope) {
            // watches the changes
            scope.$watch(() => scope.restaudetail, function () {
                scope.myrestau = angular.copy(scope.restaudetail);
            }),

                //Validate button
                scope.valider = function () {
                    angular.copy(scope.myrestau, scope.restaudetail);
                },

                //Cancel button
                scope.annuler = function () {
                    scope.myrestau = angular.copy(scope.restaudetail);
                    scope.updateform.$setPristine();
                }
        }
    }
}]);