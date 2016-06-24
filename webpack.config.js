module.exports = {
  entry: "./src/WorldMap.jsx",
  output: {
    path: 'build',
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
