import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/assets/js/components/Login'
import SideBar from '@/assets/js/components/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: SideBar,
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
