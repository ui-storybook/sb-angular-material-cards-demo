var loaders = require("./loaders");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        stories: './src/stories',
    },
    output: {
        filename: '[name].js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    externals: {
        'angular': 'Angular'
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/preview.html', to: 'preview.html' },
            { from: './src/index.html', to: 'index.html' }
        ])
    ],
    module: {
        loaders: loaders,
        noParse: [ "angular" ]
    }
};