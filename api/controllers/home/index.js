module.exports = {
  friendlyName: "Index",

  description: "Index home.",

  inputs: {},

  exits: {},

  fn: async (_, exits) => {
    exits.success({ message: "hello" });
  },
};
