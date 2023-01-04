/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': 'home/index',

  'POST /auth/register': 'user/register',
  'POST /auth/login': 'user/login',
  'POST /auth/logout': 'user/logout',

  'POST /pokemons/': 'pokemons/add',
  'GET /pokemons/': 'pokemons/get-top',
  'GET /pokemons/:id': 'pokemons/find',
  'POST /pokemons/vote/:id': 'pokemons/vote',
};
