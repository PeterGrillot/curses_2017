const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const isProd = (process.env.NODE_ENV === 'production')

// Plugins
function getPlugins() {
  var plugins = [];
  plugins.push(new webpack.DefinePlugin({
    ENV: "\"development\""
  }));
  
  if (isProd) {
    plugins.push(new HtmlWebpackPlugin({
        filename: '../../index.html',
        template: 'src/index.html'
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))
    plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    )
  } else {
    plugins.push(new HtmlWebpackPlugin({
        filename: '../../index.html',
        template: 'src/index.html'
    }))
  }
  return plugins;
}

module.exports = {
  entry: './src/entry.js',
  output: {
    path: './dist/assets/js/',
    filename: 'app.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: 'style-loader!css-loader?url=false!sass-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader?name=../images/[name].[ext]"
    }]
  },
  resolve: {
    alias: {
      'styles': './assets/styles/global.scss',
      'vue$': 'vue/dist/vue.min.js',
      'assets': './assets'
    }
  },
  plugins: getPlugins()
}
