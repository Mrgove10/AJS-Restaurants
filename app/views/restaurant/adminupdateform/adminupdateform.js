'use strict';
angular.module('myApp').directive('adminupdateform', [function () {
    return {
        templateUrl: 'views/restaurant/adminupdateform/adminupdateform.html',
        scope: {
            restaudetail: '=',
            restaurants: '='
        },
        link: function (scope) {
            // watches the changes
            scope.$watch(() => scope.restaudetail, function () {
                scope.myrestau = angular.copy(scope.restaudetail);
            }),

                //Validate button
                scope.valider = function () {
                    angular.copy(scope.myrestau, scope.restaudetail);
                },

                //Cancel button
                scope.annuler = function () {
                    scope.myrestau = angular.copy(scope.restaudetail);
                    scope.updateform.$setPristine();
                }

                //delete button
                scope.delete = function () {
                    var r = scope.restaurants.find(function(id){
                        return scope.restaudetail.guid == id;
                    })
                    console.log(r);
                    // console.log(scope.restaurants.indexOf(r))
                    // restaurants.splice()
                    //scope.myrestau = null;
                    //TODO : me
                }
        }
    }
}]);