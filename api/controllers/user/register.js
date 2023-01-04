module.exports = {
  friendlyName: 'Register',

  description: 'Register user.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: 'New user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'Email address already in use',
    },
    error: {
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {
    try {
      const newEmailAddress = inputs.email.toLowerCase();

      let newUser = await User.create({
        fullName: inputs.name,
        email: newEmailAddress,
        password: inputs.password,
      }).fetch();

      this.req.me = newUser;
      this.req.session.userId = newUser.id;

      return exits.success({
        message: `An account has been created for ${newUser.email} successfully.`,
        user: newUser,
      });
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return exits.emailAlreadyInUse({
          message: 'Oops :) an error occurred',
          error: 'This email address already exits',
        });
      }
      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  },
};
