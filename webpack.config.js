const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, { mode = 'production' }) => ({
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    mode == 'production' ? MiniCssExtractPlugin.loader : 'style-loader', // Hack until mini-css plugin implements HMR
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
                    }},
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true,
                            outputStyle: 'compressed'
                    }}
                ]
            }
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin({ 'NODE_ENV': mode }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin()
    ]
});
