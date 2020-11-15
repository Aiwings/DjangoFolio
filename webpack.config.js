const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'
module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/js/index.js', './src/scss/index.scss'],
	output: {
		path: path.resolve(__dirname, 'djangofolio/dist'),
		filename: 'js/main.js',
	},
  module: {
    rules: [
      {
        test:  /\.sc|ass$/,
        use: [
          // fallback to style-loader in development
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: isDevelopment,
            },
          },
          {
            loader:"postcss-loader",
          },
          {
            loader:"sass-loader",
            options: {
              sourceMap: isDevelopment
            },
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'dist/resource',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'css/[name].css',
      chunkFilename:'css/[id].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
