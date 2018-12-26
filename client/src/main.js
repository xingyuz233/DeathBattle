import Vue from 'vue';
import App from './App.vue';
import store from './store'
import router from './router'

import 'normalize.css/normalize.css'
import './plugins/element.js'
import '@/styles/index.scss'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  methods: {
    checkLogin() {
      if (store.state.authToken) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    }
  },
  created() {
    this.checkLogin();
  }
})
