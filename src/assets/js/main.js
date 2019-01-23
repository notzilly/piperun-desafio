window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App'
import router from './router'
import Store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store(Store)

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = store.state.currentUser;

  if(requiresAuth && !currentUser) {
    next('/login');
  } else if(to.path == '/login' && currentUser) {
    next('/');
  } else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
