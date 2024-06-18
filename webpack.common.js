const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        fallback: {
            "fs": false,
            "path": require.resolve("path-browserify"),
            "url": require.resolve("url/"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/")
        }
    },
    plugins: [

        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: path.resolve(__dirname, 'src/templates/login.html'),
        
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),

        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/templates/about.html'),
        }),

        new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: path.resolve(__dirname, 'src/templates/profile.html'),
        
        }),

        new HtmlWebpackPlugin({
            filename: 'history.html',
            template: path.resolve(__dirname, 'src/templates/history.html'),
        
        }),

        new HtmlWebpackPlugin({
            filename: 'content-detail.html',
            template: path.resolve(__dirname, 'src/templates/content-detail.html'),
        
        }),

        new HtmlWebpackPlugin({
            filename: 'faq.html',
            template: path.resolve(__dirname, 'src/templates/faq.html'),
        
        }),

        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: path.resolve(__dirname, 'src/templates/register.html'),
        
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
                {
                    from: path.resolve(__dirname, 'src/public/images/'),
                    to: path.resolve(__dirname, 'dist/images/'),
                },
                {
                    from: path.resolve(__dirname, 'src/public/icons/'),
                    to: path.resolve(__dirname, 'dist/icons/'),
                },
            ],
        }),
    ],
};