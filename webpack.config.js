const path = require('path');

module.exports = {
  entry: "./demo/index.jsx",
  output: {
    path: path.resolve(__dirname, './demo'),
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
