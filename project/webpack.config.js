const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports ={
    devServer:{
        contentBase: `./src`,
        overlay: true
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './main.js'
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'True',
      template: "./src/index.html"
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}