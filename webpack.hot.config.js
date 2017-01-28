var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = __dirname
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
		{
			test : /\.js$/,
			include : APP_DIR,
			loaders : ['babel-loader']
		}
    ]
  }
};

module.exports = config;