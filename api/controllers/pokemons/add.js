module.exports = {
  friendlyName: 'Add',

  description: 'Add pokemons.',

  inputs: {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    img: {
      type: 'string',
      required: true,
      isURL: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: 'New pokemon created',
    },
    nameAlreadyInUse: {
      statusCode: 400,
      description: 'This pokemon already exists',
    },
    error: {
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {
    try {
      const pokemon = await Pokemon.create({ ...inputs }).fetch();

      return exits.success({
        message: `A new pokemon ${pokemon.name} has been created successfully.`,
        data: pokemon,
      });
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return exits.nameAlreadyInUse({
          message: 'Oops :) an error occurred',
          error: 'Pokemon with this name already exits',
        });
      }
      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  },
};
