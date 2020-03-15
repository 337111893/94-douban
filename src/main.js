import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式组件
import '@/styles/css/global.css'
import './styles/fonts/iconfont.css'
// 引入电影列表
import MovieList from '@/components/movie-list'
// 全局注册电影列表
Vue.component('movie-list', MovieList)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
