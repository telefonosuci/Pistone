var path = require('path');

const config = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/' + 'dist'
  }
};

module.exports = config;