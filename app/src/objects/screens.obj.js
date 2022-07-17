export default [
  {
    screen: 'Artists',
    table: 'artists',
    associations: ['genre'],
  },
  {
    screen: 'Albums',
    table: 'albums',
    associations: ['artist', 'genre'],
  },
  {
    screen: 'Tracks',
    table: 'tracks',
    associations: ['album', 'artist', 'genre'],
  },
  {
    screen: 'Movies',
    table: 'movie',
    associations: ['genre'],
  },
  {
    screen: 'Genres',
    table: 'genre',
    associations: [],
  },
];
