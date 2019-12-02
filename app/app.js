'use strict';
angular.module('myApp', ['mainservice', 'ngRoute'])
  .controller('MainController', ['$scope', function ($scope) {
    console.log("👋 Hello Thibaut")
    $scope.restaurants =
      [
        {
          "guid": "a5fd0333-ef4c-4920-8e86-7a7517152f51",
          "name": "Ray",
          "address": {
            "number": 766,
            "road": "Sullivan Street",
            "city": "Mathews",
            "state": "New York"
          },
          "email": "a.a@gmail.com",
          "about": "Minim adipisicing laborum et eiusmod reprehenderit commodo exercitation officia adipisicing. Occaecat ut non nisi sunt fugiat quis eu veniam deserunt. Minim ad anim pariatur incididunt velit aute consectetur cupidatat cupidatat enim ea.",
          "ownerName": {
            "first": "Lupe",
            "last": "Dudley"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        },
        {
          "guid": "77715761-91c6-496b-8801-871488715b69",
          "name": "Hernandez",
          "address": {
            "number": 202,
            "road": "Garden Place",
            "city": "Utting",
            "state": "Ohio"
          },
          "email": "a.a@gmail.com",
          "about": "Dolore voluptate veniam elit esse et dolor cupidatat ad ipsum ipsum consequat. Duis eu eu officia aliquip ea reprehenderit sit consectetur incididunt in. Nostrud cillum Lorem eiusmod nisi fugiat ipsum adipisicing. Non ea eu enim deserunt veniam dolor et fugiat duis voluptate.",
          "ownerName": {
            "first": "Bean",
            "last": "Flynn"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        },
        {
          "guid": "938e02aa-4e5a-499c-9052-597b1ee1a21c",
          "name": "Mcclain",
          "address": {
            "number": 241,
            "road": "Forest Place",
            "city": "Sultana",
            "state": "Wisconson"
          },
          "email": "a.a@gmail.com",
          "about": "Occaecat laboris eiusmod exercitation ad. Ex Lorem minim nostrud aute proident esse ipsum minim in dolore nulla sint laborum. Elit ullamco id duis commodo et ea velit amet cillum. Occaecat ex ex id deserunt fugiat adipisicing do. Qui excepteur irure ad laboris. Commodo in deserunt ex eu voluptate cillum.",
          "ownerName": {
            "first": "Alta",
            "last": "Ortega"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        },
        {
          "guid": "05fe7b1a-63da-4589-a1b8-76b893b7c8ab",
          "name": "Shelton",
          "address": {
            "number": 419,
            "road": "Kings Place",
            "city": "Herlong",
            "state": "California"
          },
          "email": "a.a@gmail.com",
          "about": "Mollit nulla exercitation non aliqua eu reprehenderit occaecat. Tempor non veniam reprehenderit velit adipisicing elit officia est ea cupidatat laboris exercitation enim reprehenderit. Lorem est velit sunt laboris dolore aute ea in. Voluptate quis nulla laborum adipisicing ea. Irure non occaecat culpa aute aliquip fugiat in adipisicing officia consequat veniam ipsum esse mollit. Est occaecat amet veniam magna anim nisi consequat sint dolor in sunt dolor id.",
          "ownerName": {
            "first": "May",
            "last": "Franklin"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        },
        {
          "guid": "1cd3e751-343f-4a24-9cb7-a7c8059dcd8f",
          "name": "Nguyen",
          "address": {
            "number": 876,
            "road": "Cherry Street",
            "city": "Cliffside",
            "state": "Washinton"
          },
          "email": "a.a@gmail.com",
          "about": "Est cillum cillum laboris proident commodo irure qui ad. Voluptate magna proident et mollit eu laborum ea Lorem voluptate. Sunt excepteur eiusmod ad anim adipisicing. Est exercitation labore nulla irure ex nulla veniam velit aliquip voluptate proident.",
          "ownerName": {
            "first": "Collier",
            "last": "Palmer"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        },
        {
          "guid": "193d4231-9a43-471f-9217-282f2650545b",
          "name": "Phillips",
          "address": {
            "number": 211,
            "road": "Gotham Avenue",
            "city": "Germanton",
            "state": "Texas"
          },
          "email": "a.a@gmail.com",
          "about": "Sunt duis anim id enim consequat officia proident. Excepteur sint fugiat in occaecat elit voluptate. Elit reprehenderit commodo dolor do cillum incididunt pariatur sit quis dolore. Cupidatat aute laboris ea aliqua laboris occaecat.",
          "ownerName": {
            "first": "Ramona",
            "last": "Singleton"
          },
          "dateLastVisite": "",
          "lastcomment": "",
          "noteLastVisite": ""
        }
      ]
  }]
  ).config(['$routeProvider', '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: '../restaurant/restau.html',
      controller: 'MainController'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  }]);

