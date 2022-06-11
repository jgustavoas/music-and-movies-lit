/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tracks.init(
    {
      track: DataTypes.STRING,
      album_id: DataTypes.INTEGER,
      artist_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER,
      movie_id: DataTypes.ARRAY,
    },
    {
      sequelize,
      modelName: 'tracks',
    }
  );
  return tracks;
};
