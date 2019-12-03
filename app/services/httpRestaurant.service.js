'use strict';
angular.module('mainservice').factory('httprestauService',
  ['$resource', function ($resource) {
    return $resource('data/restautant.json');
  }]);
