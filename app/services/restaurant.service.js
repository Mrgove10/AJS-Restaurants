'use strict';
angular.module('mainservice').factory('restauService', ['httprestauService', function (httprestauService) {
    return {
        personnes: httprestauService.query(),

        edit: function (index) {
            $scope.entity = $scope.Profiles[index];
            $scope.entity.index = index;
            $scope.entity.editable = true;
        },

        delete: function (index) {
            this.personnes.splice(this.personnes.indexOf(personne), 1);
            httprestauService.delete({ id: personne.id });
        },

        save: function (index) {
            if (personne && !personne.id || personne.id == 0) {
                personne.id = Math.max(this.personnes.length, ...this.personnes.map(p => p.id)) + 1;
                this.personnes.push(personne);
            } else {
                // recherche de la personne dans la liste
                var p = this.personnes.find((p) => p.id === personne.id);
                // mise à jour de la personne
                angular.copy(personne, p);
            }
            httprestauService.save(personne);

        },

        add: function () {
            $scope.Profiles.push({
                name: "",
                country: "",
                editable: true
            })
        }
        
    /*       delete: function (personne) {
              this.personnes.splice(this.personnes.indexOf(personne), 1);
              httprestauService.delete({ id: personne.id });
          },
          save: function (personne) {
              if (personne && !personne.id || personne.id == 0) {
                  personne.id = Math.max(this.personnes.length, ...this.personnes.map(p => p.id)) + 1;
                  this.personnes.push(personne);
              } else {
                  // recherche de la personne dans la liste
                  var p = this.personnes.find((p) => p.id === personne.id);
                  // mise à jour de la personne
                  angular.copy(personne, p);
              }
              httprestauService.save(personne);
          }*/
    }
}]);