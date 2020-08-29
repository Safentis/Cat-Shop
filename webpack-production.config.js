const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const productionWebpackConfig = merge(baseWebpackConfig, {
        mode: 'production',
        plugins: [
            new HTMLWebpackPlugin({
                title: 'index.html',
                template: 'src/index.html',
            }),
        ],
    }
)

module.exports = new Promise((resolve, reject) => {
    resolve(productionWebpackConfig);
});