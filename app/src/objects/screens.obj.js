export default [
  {
    screen: 'Artists',
    table: 'artists',
    columns: ['artist', 'genre'],
  },
  {
    screen: 'Albums',
    table: 'albums',
    columns: ['album', 'artist', 'genre'],
  },
  {
    screen: 'Tracks',
    table: 'tracks',
    columns: ['track', 'album', 'artist', 'genre'],
  },
  {
    screen: 'Movies',
    table: 'movies',
    columns: ['movie', 'genre'],
  },
  {
    screen: 'Genres',
    table: 'genres',
    columns: ['genre'],
  },
];
