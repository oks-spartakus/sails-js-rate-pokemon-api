module.exports = {
  friendlyName: 'Find',

  description: 'Find pokemons.',

  inputs: {
    id: {
      type: 'number',
      example: 1,
      description: 'The id of pokemon that you are looking for.',
      required: true,
    },
  },

  exits: {
    success: {
      responseCode: 200,
      description: 'Found pokemon!',
    },
    notFound: {
      statusCode: 404,
      description: 'Pokemon not found',
    },
  },

  fn: async function (inputs, exits) {
    const pokemon = await Pokemon.findOne({ id: inputs.id });
    if (!pokemon) {
      return exits.notFound({
        error: `Pokemon with id=${inputs.id} was not found.`,
      });
    }
    return exits.success(pokemon);
  },
};
