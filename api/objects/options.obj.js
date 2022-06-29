const models = require('../models');

const defaultColumns = ['created_at', 'updated_at'];

module.exports = {
  genres: {
    attributes: ['id', 'genre', ...defaultColumns],
  },
  artists: {
    attributes: ['id', 'artist', 'genre_id', ...defaultColumns],
    include: { model: models.genres, attributes: ['genre'] },
  },
  albums: {
    attributes: ['id', 'album', 'artist_id', 'genre_id', ...defaultColumns],
    include: [
      { model: models.artists, attributes: ['artist'] },
      { model: models.genres, attributes: ['genre'] },
    ],
  },
  tracks: {
    attributes: [
      'id',
      'track',
      'album_id',
      'artist_id',
      'genre_id',
      'movie_id',
      ...defaultColumns,
    ],
    include: [
      { model: models.albums, attributes: ['album'] },
      { model: models.artists, attributes: ['artist'] },
      { model: models.genres, attributes: ['genre'] },
    ],
  },
  movies: {
    attributes: ['id', 'genre_id', ...defaultColumns],
  },
};
