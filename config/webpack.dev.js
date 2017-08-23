const config = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(config, {
//  debug: true,
  cache: true,
  devtool: '#cheap-eval-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
		{ loader: "style-loader"},
		{ loader: "css-loader"},
		{ loader: "sass-loader"}
	],
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      ENV: JSON.stringify('develop')
    })
  ]

});
