var nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: __dirname + '/index.js',
  // externals: nodeExternals(),
  output: {
    libraryTarget: 'commonjs',
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  target: 'node',
};