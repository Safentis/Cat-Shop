const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
}

module.exports = {
    entry: `${PATHS.src}/index.js`,
    output: {
        filename: 'js/index.js',
        path: `${PATHS.dist}`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true, 
                            config: { path: `postcss.config.js`} 
                        }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' }, 
                    { loader: 'sass-loader'}, 
                    {
                        loader: 'postcss-loader',
                        options: { 
                            config: { path: `postcss.config.js` }
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: `images/[name].[ext]`,
                    publicPath: `../`,
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: `fonts/[name].[ext]`,
                    publicPath: '../',
                }
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: `${PATHS.src}/images`, to: `${PATHS.dist}/images`},
                {from: `${PATHS.src}/static`, to: `${PATHS.dist}/static`},
                {from: `site.webmanifest`, to: ``},
                {from: `serviceWorker.js`, to: ``}
            ]
        })
    ]
}