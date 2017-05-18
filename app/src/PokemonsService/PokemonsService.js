angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/BEA07ECE-559D-4FD4-FFB0-E65451226000/EEBA8A85-B41E-A254-FF39-C244D94BF700/data/pokemons',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonId, pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/BEA07ECE-559D-4FD4-FFB0-E65451226000/EEBA8A85-B41E-A254-FF39-C244D94BF700/data/pokemons',
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/BEA07ECE-559D-4FD4-FFB0-E65451226000/EEBA8A85-B41E-A254-FF39-C244D94BF700/data/pokemons',
                        data: {objectId: pokemonId}
                    });
                }

            }

        }

    );
