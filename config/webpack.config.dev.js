const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9999,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api/': {
        target: 'https://jsonplaceholder.typicode.com/',
        changeOrigin: true,
      },
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'server': JSON.stringify('dev'),
      }
    }),
  ],
};
