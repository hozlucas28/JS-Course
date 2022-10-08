
/* ----------------------------- Requerimientos ----------------------------- */

const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



/* --------------------------------- Módulos -------------------------------- */

module.exports = {
    mode: "production",

    output: {
        clean: true,
        filename: "main.[contenthash].js"
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {sources: false}
            },
            {
                test: /\.css$/i,
                exclude: /main.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /main.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.png/,
                type: "asset/resource",
                generator: {filename: "static/[hash][ext][query]"}
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/preset-env"]}
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: "src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin ({
            filename: "[name].[fullhash].css"
        })
    ]
};