/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {
      // define association here
    } */
  }
  genres.init(
    {
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'genres',
      underscored: true,
      // https://sequelize.org/docs/v6/other-topics/naming-strategies/#the-underscored-option
    }
  );
  return genres;
};
