const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let dev = !(process.env.NODE_ENV === 'production')
const version = require('./package.json').version

const banner =
  '/*!\n' +
  ' * vue-graffiti v' + version + ' (https://github.com/goto10hq/vue-graffiti)\n' +
  ' * (c) ' + new Date().getFullYear() + ' Frohikey / Goto10 \n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  entry: {
    app: './src/app.js',
    graffiti: './src/index.js'
  },
  output: {
    path: __dirname + '/example',
    publicPath: './example/',
    filename: '[name].js',
    library: 'vue-graffiti',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: banner,
      raw: true,
      entryOnly: true
    })
  ],
  devtool: dev ? '#eval-source-map' : false
}

if (!dev) {
  module.exports.entry = {
    app: './src/app.js',
    graffiti: './src/index.js'
  }

  module.exports.output.path = __dirname + '/dist';
  module.exports.output.publicPath = './dist/';

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new OptimizeCssAssetsPlugin()
  ])
}