const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    context:            path.join(__dirname, 'src'),
    entry: {
        app:            './app.js'
    },
    output: {
        filename:       './js/[name].bundle.js',
        path:           path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            // Exports HTML as a string,
            // minimized when the compiler requests it.
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    devServer: {
        contentBase:    path.join(__dirname, 'dist/static/images'),
        stats:          'errors-only',
        open:           false,
        port:           3002,
        compress:       true
    },
    devtool:            'inline-source-map'
}

module.exports = config