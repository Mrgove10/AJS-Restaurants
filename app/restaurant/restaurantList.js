'use strict';
angular.module('myApp').directive('restaurantlist', [function () {
    return {
        templateUrl: 'restaurant/restaurantlist.html',
        scope: {
            restaurants: '=restaurantList'
        },
        link: function (scope) {
            scope.selectPersonne = function (p) {
                scope.personne = p;
            }
        }
    };
}
]);