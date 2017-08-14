let webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    //SourceMapDevToolPlugin  = require('source-map-dev-tool-plugin'),
    sourcePath = __dirname;
let autoprefixer = require('autoprefixer');
// ==>
module.exports = {
    //sourceMap: true,
    //devtool: 'source-map',
    entry: [path.join(sourcePath, 'src/main.ts')],
    output: {
        path: path.join(sourcePath, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader'],
                fallback: ['style-loader']
            })
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDom: "react-dom"
        }),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, 'src/index.tpl.html'),
            inject: 'body',
            favicon: path.join(sourcePath, 'src/favicon.png')
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        new CopyWebpackPlugin([{
            from: path.join(sourcePath, '/src/app/assets'),
            to: path.join(sourcePath, '/dist/app/assets')
        }]),
        // new CopyWebpackPlugin([{
        //     from: path.join(sourcePath, '/src/app/**/**.html'),
        //     to: path.join(sourcePath, '/dist/app/'),
        //     toType:'dir'
        // }]),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        // new webpack.SourceMapDevToolPlugin({
        //   filename: '[name].js.map',
        //   exclude: ['vendor.js']
        // })
    ]
};
