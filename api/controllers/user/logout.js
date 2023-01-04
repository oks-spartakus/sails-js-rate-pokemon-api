module.exports = {
  friendlyName: 'Logout',

  description: 'Logout user',

  exits: {
    success: {
      description:
        'The requesting user agent has been successfully logged out.',
    },
  },

  fn: async function (inputs, exits) {
    delete this.req.session.userId;

    return exits.success({ message: 'user logged out successfully' });
  },
};
