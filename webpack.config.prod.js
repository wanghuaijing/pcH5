/**
 * Created by whj57 on 2016/10/2.
 */
var webpack = require('webpack');
var config = require("./webpack.base");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

delete config.output.publicPath;
!config.plugins && (config.plugins = []);
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));
config.plugins.push(new CleanWebpackPlugin(['dist', 'build']));
config.plugins.push(new HtmlWebpackPlugin({template: './template.html'}));
config.plugins.push(new webpack.DefinePlugin({
    __PROD__: JSON.stringify(true),
    // 'process.env.NODE_ENV':JSON.stringify('production')
}));

module.exports = config;
