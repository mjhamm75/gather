var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: "./app",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        }]
    },
    postcss: function() {
        return [
            require('autoprefixer')
        ];
    },

    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
}
