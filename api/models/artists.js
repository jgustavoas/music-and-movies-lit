/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artists.init(
    {
      artist: DataTypes.STRING,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'artists',
    }
  );
  return artists;
};
