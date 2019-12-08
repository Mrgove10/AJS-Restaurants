'use strict';
angular.module('myApp').directive('editgrade', [function () {
    return {
        templateUrl: 'views/edit/editgrade/editgrade.html',
        scope: {
            id: '='
        },
        link: function (scope) {
            console.log(scope)
            console.log(scope.id)
        }
    }
}]);