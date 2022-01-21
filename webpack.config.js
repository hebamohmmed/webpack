const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
          {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
             
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({ filename:'index.html',template:'./src/index.html' }),
        new MiniCssExtractPlugin({filename:'style.css'})
      ],
}