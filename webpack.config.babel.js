import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const sassLoaderConfig = {
  fallback: 'style-loader',
  use: [{ loader: 'css-loader', options: { url: false } }, { loader: 'sass-loader',options:{url:false} }]
};

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react', 'env', 'stage-0', 'stage-1'] }, exclude: /node_modules/ },
      { test: /\.js$/, loader: 'eslint-loader', query: { presets: ['react', 'env', 'stage-0', 'stage-1'] }, exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(sassLoaderConfig), exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf|jpg)$/i, loader: 'url-loader', options: { limit: 1000, name: 'assets/[hash].[ext]' }, exclude: /node_modules/ }
    ]
  },
  stats: { colors: true },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true })
  ],
  devtool: 'source-map'
};
