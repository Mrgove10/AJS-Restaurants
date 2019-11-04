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

//https://next.json-generator.com/NJAqexKqP

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.restaurants =
    [
      {
        "guid": "a5fd0333-ef4c-4920-8e86-7a7517152f51",
        "name": "Ray",
        "address": {
          "number": 766,
          "road": "Sullivan Street",
          "city": "Mathews",
          "state": 82
        },
        "email": "a.a@gmail.com",
        "about": "Minim adipisicing laborum et eiusmod reprehenderit commodo exercitation officia adipisicing. Occaecat ut non nisi sunt fugiat quis eu veniam deserunt. Minim ad anim pariatur incididunt velit aute consectetur cupidatat cupidatat enim ea.",
        "ownerName": {
          "first": "Lupe",
          "last": "Dudley"
        },
        "dateLastVisite": "Mon Jun 09 1980 12:22:38 GMT+0000 (UTC)",
        "lastcomment": "Laborum minim qui labore labore sit nisi incididunt et quis incididunt anim amet sunt ipsum. Elit incididunt in dolore tempor esse veniam. Minim deserunt laborum esse ullamco et quis cillum ullamco laboris dolore quis incididunt consequat minim. Pariatur sit qui irure nostrud culpa culpa ut. Veniam deserunt cillum duis exercitation do sunt labore sunt velit nisi ut.",
        "noteLastVisite": 4
      },
      {
        "guid": "77715761-91c6-496b-8801-871488715b69",
        "name": "Hernandez",
        "address": {
          "number": 202,
          "road": "Garden Place",
          "city": "Utting",
          "state": 12
        },
        "email": "a.a@gmail.com",
        "about": "Dolore voluptate veniam elit esse et dolor cupidatat ad ipsum ipsum consequat. Duis eu eu officia aliquip ea reprehenderit sit consectetur incididunt in. Nostrud cillum Lorem eiusmod nisi fugiat ipsum adipisicing. Non ea eu enim deserunt veniam dolor et fugiat duis voluptate.",
        "ownerName": {
          "first": "Bean",
          "last": "Flynn"
        },
        "dateLastVisite": "Tue Nov 26 1991 22:06:38 GMT+0000 (UTC)",
        "lastcomment": "Proident cillum consequat minim excepteur exercitation ex quis laborum dolore veniam deserunt. Non voluptate excepteur tempor consectetur anim cupidatat aliquip sit aute mollit esse labore amet. Cillum irure velit consequat cillum excepteur esse exercitation aute ipsum. Veniam deserunt ad aliqua pariatur elit Lorem proident est fugiat reprehenderit. Do adipisicing deserunt aliqua reprehenderit cillum ex.",
        "noteLastVisite": 1
      },
      {
        "guid": "938e02aa-4e5a-499c-9052-597b1ee1a21c",
        "name": "Mcclain",
        "address": {
          "number": 241,
          "road": "Forest Place",
          "city": "Sultana",
          "state": 35
        },
        "email": "a.a@gmail.com",
        "about": "Occaecat laboris eiusmod exercitation ad. Ex Lorem minim nostrud aute proident esse ipsum minim in dolore nulla sint laborum. Elit ullamco id duis commodo et ea velit amet cillum. Occaecat ex ex id deserunt fugiat adipisicing do. Qui excepteur irure ad laboris. Commodo in deserunt ex eu voluptate cillum.",
        "ownerName": {
          "first": "Alta",
          "last": "Ortega"
        },
        "dateLastVisite": "Fri Dec 05 2014 20:14:06 GMT+0000 (UTC)",
        "lastcomment": "Lorem minim dolore velit commodo officia exercitation do culpa cillum commodo aliquip consectetur. Lorem id exercitation velit duis in laborum ea sint ullamco elit velit. Laborum aute et nulla officia est quis. Officia laboris non incididunt ullamco aute elit esse commodo reprehenderit esse. Excepteur excepteur in sint ex reprehenderit officia. Occaecat ex quis sunt sint nisi anim consequat. Magna sit sit reprehenderit cupidatat sint ut commodo pariatur fugiat reprehenderit aliquip occaecat ad.",
        "noteLastVisite": 2
      },
      {
        "guid": "05fe7b1a-63da-4589-a1b8-76b893b7c8ab",
        "name": "Shelton",
        "address": {
          "number": 419,
          "road": "Kings Place",
          "city": "Herlong",
          "state": 15
        },
        "email": "a.a@gmail.com",
        "about": "Mollit nulla exercitation non aliqua eu reprehenderit occaecat. Tempor non veniam reprehenderit velit adipisicing elit officia est ea cupidatat laboris exercitation enim reprehenderit. Lorem est velit sunt laboris dolore aute ea in. Voluptate quis nulla laborum adipisicing ea. Irure non occaecat culpa aute aliquip fugiat in adipisicing officia consequat veniam ipsum esse mollit. Est occaecat amet veniam magna anim nisi consequat sint dolor in sunt dolor id.",
        "ownerName": {
          "first": "May",
          "last": "Franklin"
        },
        "dateLastVisite": "Sun Nov 12 1995 06:28:33 GMT+0000 (UTC)",
        "lastcomment": "Enim aliqua proident sit labore. Non mollit ut dolore cupidatat. Adipisicing est et qui esse occaecat eiusmod voluptate Lorem duis tempor enim sit quis deserunt. Nostrud ad ea ipsum Lorem. Amet sunt irure id labore ex. Eiusmod in mollit Lorem commodo aliqua Lorem deserunt Lorem nostrud eu.",
        "noteLastVisite": 5
      },
      {
        "guid": "1cd3e751-343f-4a24-9cb7-a7c8059dcd8f",
        "name": "Nguyen",
        "address": {
          "number": 876,
          "road": "Cherry Street",
          "city": "Cliffside",
          "state": 19
        },
        "email": "a.a@gmail.com",
        "about": "Est cillum cillum laboris proident commodo irure qui ad. Voluptate magna proident et mollit eu laborum ea Lorem voluptate. Sunt excepteur eiusmod ad anim adipisicing. Est exercitation labore nulla irure ex nulla veniam velit aliquip voluptate proident.",
        "ownerName": {
          "first": "Collier",
          "last": "Palmer"
        },
        "dateLastVisite": "Sat Mar 31 2001 11:02:26 GMT+0000 (UTC)",
        "lastcomment": "Minim anim in minim amet id ex adipisicing mollit tempor nulla nisi enim. Ea aute incididunt reprehenderit ut eu elit nostrud laborum sunt Lorem. Proident culpa veniam minim ex magna ex enim do nisi tempor laboris proident magna mollit.",
        "noteLastVisite": 5
      },
      {
        "guid": "193d4231-9a43-471f-9217-282f2650545b",
        "name": "Phillips",
        "address": {
          "number": 211,
          "road": "Gotham Avenue",
          "city": "Germanton",
          "state": 64
        },
        "email": "a.a@gmail.com",
        "about": "Sunt duis anim id enim consequat officia proident. Excepteur sint fugiat in occaecat elit voluptate. Elit reprehenderit commodo dolor do cillum incididunt pariatur sit quis dolore. Cupidatat aute laboris ea aliqua laboris occaecat.",
        "ownerName": {
          "first": "Ramona",
          "last": "Singleton"
        },
        "dateLastVisite": "Sun Sep 18 1988 10:10:54 GMT+0000 (UTC)",
        "lastcomment": "Ea do ullamco elit consequat velit aliquip nostrud occaecat. Sint aliquip qui occaecat tempor Lorem pariatur non id enim excepteur reprehenderit qui ipsum. Aliqua est proident consequat ex velit in commodo eu. Anim veniam dolore aute ea qui reprehenderit aliquip enim id incididunt. Exercitation amet mollit nulla deserunt dolore eu commodo dolore amet. Est ex nulla cillum non nisi pariatur incididunt aliqua tempor aliquip exercitation. Cillum ipsum ea et adipisicing labore esse tempor ea nulla aliquip ea incididunt nisi.",
        "noteLastVisite": 3
      }
    ]
  }]
  );
