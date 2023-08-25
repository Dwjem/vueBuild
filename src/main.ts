import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.config.errorHandler = (err, instance, info) => {
  // 向追踪服务报告错误
  // console.log("******有错误啦");
}
