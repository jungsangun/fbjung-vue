import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about1',
      name: 'about1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About1.vue')
    },
    {
      path: '/about2',
      name: 'about2',
      component: () => import(/* webpackChunkName: "about" */ './views/About2.vue')
    },
    {
      path: '/about3',
      name: 'about3',
      component: () => import(/* webpackChunkName: "about" */ './views/About3.vue')
    },
    {
      path: '*',
      name: 'e404',
      component: () => import('./views/e404.vue')
    }
  ]
})
