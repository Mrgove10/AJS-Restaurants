'use strict';
angular.module('myApp').directive('editgrade', [function () {
    return {
        templateUrl: 'views/edit/editgrade/editgrade.html',
        scope: {
            restaurants : '=',
            id: '='
        },
        link: function (scope) {
            scope.selectedrestau = scope.restaurants.filter(obj => {
                return obj.guid === scope.id
            }),

            //creates a copy of the object
            scope.$watch(() => scope.selectedrestau, function () {
                scope.myrestau = angular.copy(scope.selectedrestau);
            }),

            scope.valider = function () {
                angular.copy(scope.selectedrestau, scope.myrestau);
                $window.location.href = '/index.html'; //doesnt work (of corse, what works in this framework ?)
            },//TODO : not working obviously, what a shitty framework

            //Cancel button
            scope.annuler = function () {
                scope.myrestau = angular.copy(scope.selectedrestau);
                scope.updateform.$setPristine();
                $window.location.href = '/index.html'; //doesnt work either (lol obviously)
            }
        }
    }
}]);