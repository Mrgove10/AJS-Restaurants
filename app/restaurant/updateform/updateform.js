'use strict';
angular.module('myApp').directive('updateform', [function () {
    return {
        templateUrl: 'restaurant/updateform/updateform.html',
        scope: {
            restaudetail: '='
        },
        link: function (scope) {
            scope.$watch(() => scope.personne, function () {
                console.log("Changed");
                scope.myrestau = angular.copy(scope.restaudetail);
            }),
            scope.valider = function () {
                console.log("Validate");
                angular.copy(scope.myrestau, scope.restaudetail);
            },
            scope.annuler = function () {
                console.log("Undo");
                scope.myrestau = angular.copy(scope.restaudetail);
            }
        }
    }
}]);