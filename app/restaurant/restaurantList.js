'use strict';
var myModule = angular.module('myApp');
myModule.directive('personnes', [function () {
    return {
        templateUrl: '/graphics/madirective.html',
        scope: {
            personnes: '=lespersonnes'
        },
        link: function (scope) {         
            scope.selectPersonne = function (p) {
                scope.personne = p;
            }
        }
    };
}]);    