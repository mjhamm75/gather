var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
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
            presets:[ 'es2015', 'react', 'stage-2' ]
          }
        }, {
          test: /\.scss/,
          loader: ["style", "css", "sass"]
        }, {
          test: /\.css/,
          loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
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
