const HtmlWebPackPlugin = require("html-webpack-plugin");
// const path = require('path');

// const APP_DIR = path.resolve(__dirname, "./src/");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    // entry: './src/index.js',
    // output: {
    //     path: __dirname + '/dist',
    //     filename: 'bundle.js'
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                // include : APP_DIR,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [htmlPlugin]
}
