const merge = require('webpack-merge');

const common = require('./../webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: '3000',
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/200.html' },
      ],
    },
  },
});
