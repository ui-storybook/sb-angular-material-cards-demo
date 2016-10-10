var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: ['./src/index.js'],
        stories: './src/stories'
    },
    output: {
        filename: '[name].js',
        path: 'app'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/preview.html', to: 'preview.html' },
            { from: './src/index.html', to: 'index.html' }
        ]),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'app'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],
    module: {
        loaders: loaders
    }
};