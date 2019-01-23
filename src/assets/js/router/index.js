import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/assets/js/components/Login'
import SideBar from '@/assets/js/components/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: SideBar
    }
  ]
})
