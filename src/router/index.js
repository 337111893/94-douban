import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot'// 强制掉转到正在热映
  },
  // 四个组件都按需加载
  {
    path: '/movie', // 即将上映
    component: () => import('../views/movie')
  },
  {
    path: '/detail/:id', // 豆瓣影片详情
    component: () => import('../views/detail')
  },
  {
    path: '/top', // top250榜单
    component: () => import('../views/top')
  }, {
    path: '/hot', // 正在热映
    component: () => import('../views/hot')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
