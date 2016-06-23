module.exports = {
  entry: "./demo/index.jsx",
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
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};
