const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vueBuild/',
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./public.scss";` //引入全局变量
      }
    }
  }
})
