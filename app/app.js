'use strict';

// Declare app level module which depends on views, and core components
/*angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.restaurants = [{
      name: 'Thibaut',
      adress: 'Montanier',
      dateLastVisite: 'Montanier',
      noteLastVisite: 'Montanier',
      ownerName: 'Montanier',
      email: 'Montanier',
      lastComment: "coucou"
    },
    {
      name: 'Thibaut',
      adress: 'Montanier',
      dateLastVisite: 'Montanier',
      noteLastVisite: 'Montanier',
      ownerName: 'Montanier',
      email: 'Montanier',
      lastComment: "coucou"
    },{
      name: 'Thibaut',
      adress: 'Montanier',
      dateLastVisite: 'Montanier',
      noteLastVisite: 'Montanier',
      ownerName: 'Montanier',
      email: 'Montanier',
      lastComment: "coucou"
    }]
  }]
  );
