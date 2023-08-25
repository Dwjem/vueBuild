const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: '/vue3_study',//github仓库名
  // assetsDir: 'vue3_study',//同上，否则访问不到静态资源
  // outputDir: "dist",
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
