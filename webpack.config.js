var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var bannerPlugin = new webpack.BannerPlugin({
    banner: '/*\n * github: https://github.com/stbui/stbui-weex-app \n * update: '+(+new Date())+'\n */\n',
    raw: true
});

var htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: ' - Power by stbui',
    inject: 'body',
    template: './index.html',
    hash: true,
    minify: {
        removeComments: false,
        collapseWhitespace: false
    }
});

var copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: './node_modules/vue/dist/vue.js',
        to: './'
    }, {

        from: './node_modules/weex-vue-render/index.js',
        to: './'
    }
]);

var loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
});

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        join_vars: true,
        if_return: true
    },
    output: {
        comments: false
    },
    sourceMap: false
})

function getBaseConfig() {
    return {
        entry: {
            'index': path.resolve('src', 'entry.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }, {
                    test: /\.vue(\?[^?]+)?$/,
                    loaders: []
                }, {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: '/assets/[name].[hash:8].[ext]'
                    }
                }
            ]
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
            bannerPlugin,
            htmlWebpackPlugin,
            copyWebpackPlugin
            // loaderOptionsPlugin,
            // uglifyJsPlugin
        ]
    }
}

var webConfig = getBaseConfig();
webConfig.output.filename = '[name].web.js';
webConfig.module.rules[1].loaders.push('vue-loader');

var nativeConfig = getBaseConfig();
nativeConfig.output.filename = '[name].weex.js';
nativeConfig.module.rules[1].loaders.push('weex-loader');


module.exports = [webConfig, nativeConfig]
