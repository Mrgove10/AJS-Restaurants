'use strict';
angular.module('myApp').directive('updateform', [function () {
    return {
        templateUrl: 'restaurant/updateform/updateform.html',
        scope: {
            restaudetail: '='
        },
        link: function (scope) {
            scope.$watch(() => scope.restaudetail, function () {
                scope.myrestau = angular.copy(scope.restaudetail);
                scope.updateform.$setPristine();
            }),
            scope.valider = function () {
                angular.copy(scope.myrestau, scope.restaudetail);
            },
            scope.annuler = function () {
                scope.myrestau = angular.copy(scope.restaudetail);
                scope.updateform.$setPristine();
            }
        }
    }
}]);