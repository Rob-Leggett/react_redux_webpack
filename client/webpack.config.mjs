import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (_env, argv) => {
  const isDev = argv.mode !== 'production';
  const isDevServer = process.env.WEBPACK_SERVE === 'true';
  const useRefresh = isDev && isDevServer;

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              // Type checking is done by `tsc --noEmit` (type-check / build scripts)
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: useRefresh ? [ReactRefreshTypeScript()] : [],
              }),
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      !isDev && new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      useRefresh && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    optimization: {
      splitChunks: { chunks: 'all' },
    },
    performance: {
      // React + React Router + Redux Toolkit alone exceed webpack's 244 KiB default hint
      maxEntrypointSize: 512 * 1024,
      maxAssetSize: 512 * 1024,
    },
    devServer: {
      port: 8080,
      hot: true,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: process.env.API_URL || 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      ],
    },
  };
};
