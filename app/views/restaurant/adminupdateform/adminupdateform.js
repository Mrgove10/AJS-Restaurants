'use strict';
angular.module('myApp').directive('adminupdateform', [function () {
    return {
        templateUrl: 'views/restaurant/adminupdateform/adminupdateform.html',
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

                //delete button
                scope.delete = function () {
                    scope.myrestau = null;//todo : me
                }
        }
    }
}]);