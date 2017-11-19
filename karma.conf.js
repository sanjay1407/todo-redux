module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-babel-preprocessor'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react', 'env', 'stage-0', 'stage-1'] }, exclude: /node_modules/ },
          { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.(sass|scss)$/, loader: 'css-loader!sass-loader', exclude: /node_modules/ },
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/i, loader: 'url-loader', exclude: /node_modules/ }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
