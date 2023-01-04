/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'pokemons',
  attributes: {
    name: {
      type: 'string',
      required: true,
      columnName: 'name',
      unique: true,
    },
    img: {
      type: 'string',
      required: true,
    },
    points: {
      type: 'number',
      defaultsTo: 0,
    },
  },
  customToJSON: function () {
    return _.omit(this, ['createdAt', 'updatedAt']);
  },
};
