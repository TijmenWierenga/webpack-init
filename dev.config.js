const baseConfig = require('./webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',

    devServer: {
        inline: true,
        contentBase: [path.resolve(__dirname, 'index.html'), path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'src/styles')],
        host: '0.0.0.0',
        port: '8080',
        watchContentBase: true
    },

    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
});