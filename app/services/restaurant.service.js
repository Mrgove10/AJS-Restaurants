'use strict';
angular.module('mainservice').factory('restauService', ['httprestauService', function (httprestauService) {
    return {
        restau: httprestauService.query(),
        // personnes:[{"id": 1, "prenom": "Thibaut", "nom": "Montanier"},
        // {"id": 2, "prenom": "Charlotte", "nom": "🍓"},
        // {"id": 3, "prenom": "Sophie", "nom": "🦒"}],
        delete: function (personne) {
            this.personnes.splice(this.personnes.indexOf(personne), 1);
            httppersonnesService.delete({ id: personne.id });
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
            httppersonnesService.save(personne);
        }
    }
}]);