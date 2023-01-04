module.exports = {
  friendlyName: 'Get top',

  description: 'List of top 10 pokemons',

  inputs: {},

  exits: {
    success: {
      responseCode: 200,
      description: 'Top 10 pokemons!',
    },
    error: {
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {
    try {
      const pokemons = await Pokemon.find({
        limit: 10,
        sort: 'points DESC',
      });

      return exits.success(pokemons);
    } catch (error) {
      console.log(error);
    }
  },
};
