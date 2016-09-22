var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: "eval",
    entry: [
        "whatwg-fetch",
        "./src/index.jsx"
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: path.join(__dirname, "../api/public"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.ejs",
            inject: "body"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loaders: ["babel?presets[]=react,presets[]=es2015"],
                include: path.join(__dirname, "src")
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.ttf$|\.eot$|\.woff$|\.svg$|\.woff2$/,
                loader: 'file',
                query: {
                    name: 'font/[hash].[ext]'
                }
            }

        ]
    }
};
