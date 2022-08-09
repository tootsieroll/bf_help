const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        /** Будет запускать сервер на localhost:8080 в этой папке*/
        static : {
            directory : path.join(__dirname, "./dist")
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: 'only',
        port: 8080,
    },
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            /** Babel **/
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            /** HTML */
            {
                test: /\.(html|njk)$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'nunjucks-html-loader',
                        options: {
                            searchPaths: [
                                path.resolve(__dirname, './src/templates'),
                            ],
                        }
                    },
                ]
            },
            /** Css */
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            /** Sass */
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            /** Картинки */
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            /** Шрифты */
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ],
    },
    plugins: [].concat(
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
            filename: `index.html`,
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ),
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin(),
        ],
    },
};
