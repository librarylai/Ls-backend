const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: ['./app.js', './bin/www', ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: { //設定你的檔案選項
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, ],
    },
}