'use strict';
angular.module('MainController').directive('editrestaugrade', [function () {
    return {
        templateUrl: 'views/edit/editgrade/editgrade.html',
        scope: {
            id: '='
        },
        link: function (scope) {
            console.log(scope.id)
        }
    }
}]);