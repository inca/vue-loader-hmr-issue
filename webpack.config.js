'use strict';

const path = require('path');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const outDir = path.resolve(__dirname, 'out');
const watchOptions = {
    ignored: [
        outDir,
        path.resolve(__dirname, 'node_modules')
    ]
};

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: outDir,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        port: 9000,
        hotOnly: true,
        contentBase: outDir,
        stats: 'minimal',
        watchOptions
    },
    watchOptions,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
};
