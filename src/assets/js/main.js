window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App'
import router from './router'
import Store from './store'
import {initialize} from './helpers/setup'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store(Store)

initialize(store, router);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
