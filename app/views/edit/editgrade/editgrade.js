'use strict';
angular.module('myApp').directive('editrestaugrade', [function () {
    return {
        templateUrl: 'views/edit/editgrade/editgrade.html',
        scope: {
            id: $routeParams.id
        }
    }
}]);