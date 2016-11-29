const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');


module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: {
    app: [
      './index.jsx',
      './assets/global.css'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: [
      '', '.scss', '.js', '.json', '.md'
    ],
    packageMains: [
      'browser', 'web', 'browserify', 'main', 'style'
    ],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: {
      'components': path.resolve(__dirname, './components/'),
      'assets': path.resolve(__dirname, './assets/'),
      'base': path.resolve(__dirname, './')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }, {
        test: /\.(css)$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('docs.css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
  ],
  stats: {
    colors: true
  },

  node: {
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: false
  },
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/static',
    contentBase: './',
    historyApiFallback: true,
    proxy: [
      // OPTIONAL: proxy configuration:
      // {
      // 	path: '/optional-prefix/**',
      // 	target: 'http://target-host.com',
      // 	rewrite: req => { req.url = req.url.replace(/^\/[^\/]+\//, ''); }   // strip first path segment
      // }
    ]
  }
};
