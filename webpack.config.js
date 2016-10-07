var devConfig  = require('./webpack.config.dev')  ;
var prodConfig = require('./webpack.config.prod');
if (process.env.NODE_ENV === 'production') {
    module.exports = prodConfig;
} else {
    module.exports = devConfig;
}
