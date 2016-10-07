/**
 * Created by whj57 on 2016/10/2.
 */
var webpack =require('webpack');
var path = require('path');
var plugins = require('webpack-load-plugins')

module.exports={
    entry:{
        app:['./app/app.js']
    },
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:'bundle.[hash].js',
        publicPath:'/public/'
    },
    module:{
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'react', 'es2015'
                    ],
                    plugins: ['transform-object-rest-spread']
                }
            }, {
                test: /.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /.(png|gif|jpg|jpeg|webp)$/,
                loader: 'url?limit=5000'
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            },
            output:{
                comments:false
            }
        })
    ]
};
