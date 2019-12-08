'use strict';
angular.module('myApp').directive('editgrade', [function () {
    return {
        templateUrl: 'views/edit/editgrade/editgrade.html',
        scope: {
            restaurants : '=',
            id: '=',
            
        },
        link: function (scope) {
            scope.selectedrestau = '';
            console.log(scope.id);
            scope.selectedrestau = scope.restaurants.filter(obj => {
                return obj.guid === scope.id
            });
            console.log(scope);
        }
    }
}]);