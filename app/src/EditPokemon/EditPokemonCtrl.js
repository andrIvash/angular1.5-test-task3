'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, PokemonsService) {

    $scope.editPokemon = function(myPokemon) {

        $scope.pokemon = {};

        $scope.editError = false;
        $scope.editSuccess = false;

        PokemonsService.editPokemon(myPokemon.objectId, myPokemon).then(function successCallback(response) {

            $scope.pokemon = {};
            $scope.pokemon = response.data.objectId;
            $scope.editSuccess = true;


        }, function errorCallback(response) {
            $scope.editError = true;
        });

    }

});
