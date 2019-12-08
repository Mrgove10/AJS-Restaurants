'use strict';
angular.module('myApp', ['mainservice', 'ngRoute'])
  .controller('MainController', ['$scope', '$route', function ($scope, $routeParams) {
    $scope.selectedid = $routeParams.param1;
    $scope.restaurants =
      [
        {
          "guid": "a5fd0333-ef4c-4920-8e86-7a7517152f51",
          "name": "Ray",
          "address": "dssdfdsf",
          "email": "a.a@gmail.com",
          "about": "Minim adipisicing laborum et eiusmod reprehenderit commodo exercitation officia adipisicing. Occaecat ut non nisi sunt fugiat quis eu veniam deserunt. Minim ad anim pariatur incididunt velit aute consectetur cupidatat cupidatat enim ea.",
          "ownerName": "Lupe Dudley",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "4"
        },
        {
          "guid": "77715761-91c6-496b-8801-871488715b69",
          "name": "Hernandez",
          "address": "dgdgdg",
          "email": "a.a@gmail.com",
          "about": "Dolore voluptate veniam elit esse et dolor cupidatat ad ipsum ipsum consequat. Duis eu eu officia aliquip ea reprehenderit sit consectetur incididunt in. Nostrud cillum Lorem eiusmod nisi fugiat ipsum adipisicing. Non ea eu enim deserunt veniam dolor et fugiat duis voluptate.",
          "ownerName": "Bean Flynn",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "2"
        },
        {
          "guid": "938e02aa-4e5a-499c-9052-597b1ee1a21c",
          "name": "Mcclain",
          "address": "yuiyuiyu",
          "email": "a.a@gmail.com",
          "about": "Occaecat laboris eiusmod exercitation ad. Ex Lorem minim nostrud aute proident esse ipsum minim in dolore nulla sint laborum. Elit ullamco id duis commodo et ea velit amet cillum. Occaecat ex ex id deserunt fugiat adipisicing do. Qui excepteur irure ad laboris. Commodo in deserunt ex eu voluptate cillum.",
          "ownerName": "Alta Ortega",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "5"
        },
        {
          "guid": "05fe7b1a-63da-4589-a1b8-76b893b7c8ab",
          "name": "Shelton",
          "address": "ytjgh,bn,",
          "email": "a.a@gmail.com",
          "about": "Mollit nulla exercitation non aliqua eu reprehenderit occaecat. Tempor non veniam reprehenderit velit adipisicing elit officia est ea cupidatat laboris exercitation enim reprehenderit. Lorem est velit sunt laboris dolore aute ea in. Voluptate quis nulla laborum adipisicing ea. Irure non occaecat culpa aute aliquip fugiat in adipisicing officia consequat veniam ipsum esse mollit. Est occaecat amet veniam magna anim nisi consequat sint dolor in sunt dolor id.",
          "ownerName": "May Franklin",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "1"
        },
        {
          "guid": "1cd3e751-343f-4a24-9cb7-a7c8059dcd8f",
          "name": "Nguyen",
          "address": "oyghfhtf",
          "email": "a.a@gmail.com",
          "about": "Est cillum cillum laboris proident commodo irure qui ad. Voluptate magna proident et mollit eu laborum ea Lorem voluptate. Sunt excepteur eiusmod ad anim adipisicing. Est exercitation labore nulla irure ex nulla veniam velit aliquip voluptate proident.",
          "ownerName": "Collier Palmer",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "3"
        },
        {
          "guid": "193d4231-9a43-471f-9217-282f2650545b",
          "name": "Phillips",
          "address": "ztrerere",
          "email": "a.a@gmail.com",
          "about": "Sunt duis anim id enim consequat officia proident. Excepteur sint fugiat in occaecat elit voluptate. Elit reprehenderit commodo dolor do cillum incididunt pariatur sit quis dolore. Cupidatat aute laboris ea aliqua laboris occaecat.",
          "ownerName": "Ramona Singleton",
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": "2"
        }
    ]
  }]
  ).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/index.html', {
          templateUrl: 'views/restaurant/restau.html',
          controller: 'MainController'
        })
        .when('/', {
          templateUrl: 'views/restaurant/restau.html', //base (entry point html)
          controller: 'MainController'
        })
        .when('/best', {
          templateUrl: 'views/best/best.html',
          controller: 'MainController'
        })
        .when('/edit/:id', {
          templateUrl: 'views/edit/edit.html',
          controller: 'MainController'
        })
        .otherwise({ redirectTo: '/' });
    }]);