var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        js: './index.js'
    },
    output: { path: __dirname + '/assets', filename: 'bundle.js' },
    devtool: "#cheap-module-source-map",
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_module/
        },{
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
          filename: 'app.css',
          allChunks: true
        }),
    ]
}
