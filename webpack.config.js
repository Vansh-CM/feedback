const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'feedback-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }, 
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};