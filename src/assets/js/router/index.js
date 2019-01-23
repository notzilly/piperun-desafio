import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/assets/js/components/Login'
import Home from '@/assets/js/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
