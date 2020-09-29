const path = require('path');

module.exports = {
  entry: "./docs/index.jsx",
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    }]
  }
};
