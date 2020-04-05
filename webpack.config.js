var path = require('path');

const config = {

    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/' + 'dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }
};

module.exports = config;