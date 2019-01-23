import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/assets/js/components/HelloWorld'
import SideBar from '@/assets/js/components/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: SideBar
    }
  ]
})
