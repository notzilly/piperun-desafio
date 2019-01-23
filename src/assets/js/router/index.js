import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/assets/js/components/Login'
import Home from '@/assets/js/components/Home'
import ActivitiesMain from '@/assets/js/components/activities/Main'
import ActivitiesList from '@/assets/js/components/activities/List'

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
    },
    {
      path: '/atividades',
      name: 'Atividades',
      component: ActivitiesMain,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          component: ActivitiesList
        },
        // {
        //   path: 'criar',
        //   component: NewActivity
        // },
        // {
        //   path: ':id',
        //   component: Activity
        // }
      ]
    }
  ]
})
