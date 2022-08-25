const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImgWebpackLoader = require('image-webpack-loader');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports={
    mode: "development",
    devServer: {
        open: true,
        compress: true,
        hot: true,
        port: 8000,
    },
    entry:{
        main:'./src/index',
        App:'./src/App',
        },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,"build"),
        assetModuleFilename: 'src/assets/[name][ext]',
    },
    resolve: {
        extensions: ['.js','.json','.png','.jsx', '.ts', '.tsx'],
        
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './publick/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CleanWebpackPlugin(), 
    ],
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',"@babel/preset-react","@babel/preset-typescript"]
                  }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',"@babel/preset-react","@babel/preset-typescript"]
                  }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',"@babel/preset-react"]
                  }
                }
            },
            {
                test: /\.css$/i,
                use: [{loader: MiniCssExtractPlugin.loader},'css-modules-typescript-loader','css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{loader: MiniCssExtractPlugin.loader},'css-modules-typescript-loader','css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            },
        ]
    }
}

