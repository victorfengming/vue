# 09_Vue3-webpack打包ts


# [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#_4-使用webpack打包ts)4. 使用webpack打包TS

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#下载依赖)下载依赖

```text
yarn add -D typescript
yarn add -D webpack webpack-cli
yarn add -D webpack-dev-server
yarn add -D html-webpack-plugin clean-webpack-plugin
yarn add -D ts-loader
yarn add -D cross-env
```

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#入口js-src-main-ts)入口JS: src/main.ts

```typescript
// import './01_helloworld'

document.write('Hello Webpack TS!')
```

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#index页面-public-index-html)index页面: public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>webpack & TS</title>
</head>
<body>
  
</body>
</html>
```

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#build-webpack-config-js)build/webpack.config.js

```javascript
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'
  },

  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}
```

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#配置打包命令)配置打包命令

```text
"dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
"build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
```

## [#](https://24kcs.github.io/vue3_study/chapter1/04_webpack打包.html#运行与打包)运行与打包

```text
yarn dev
yarn build
```