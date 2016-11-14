"use strict";
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\]src[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});
// local scss modules
loaders.push({
    test: /\.s(a|c)ss$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
});

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|bower_components)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/main.jsx' // your App's entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ],
    sassLoader: {
        includePaths: ['./styles']
    }
};
