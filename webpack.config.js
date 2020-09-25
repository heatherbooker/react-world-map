module.exports = {
  entry: "./demo/index.jsx",
  output: {
    path: 'demo',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['env', 'react']
      }
    }]
  }
};
