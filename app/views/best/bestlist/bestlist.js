'use strict';
angular.module('myApp').directive('bestrestaulist', [function () {
    return {
        templateUrl: 'views/best/bestlist/bestlist.html',
        scope: {
            restaurants: '=',
        },
        link: function (scope) {
            scope.restaurants.sort((a, b) => (a.noteLastVisite < b.noteLastVisite) ? 1 : -1);
            scope.restaurants = scope.restaurants.slice(0,2);
        }
    }
}]);