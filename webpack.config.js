const path = require('path');

module.exports = {
  entry: {
    main: './dist/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      game: path.resolve(__dirname, 'dist/game'),
    },
  },
};
