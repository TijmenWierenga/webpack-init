const baseConfig = require('./webpack.config.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'production'
});