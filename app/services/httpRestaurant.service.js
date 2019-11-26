'use strict';
angular.module('myApp.services').factory('httppersonnesService', 
        ['$resource', function($resource){
  return $resource('data/personnes/:id.json');
}]);
