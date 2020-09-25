module.exports = {
  entry: "./demo/index.jsx",
  output: {
    path: 'demo',
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel',
        options: {
          presets: ['env', 'react']
        }
      },
    }]
  }
};
