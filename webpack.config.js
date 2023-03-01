const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app.js',
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  experiments: { topLevelAwait: true },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
