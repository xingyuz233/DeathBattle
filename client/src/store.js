import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    userEmail: window.localStorage.getItem('userEmail'),
    userName: window.localStorage.getItem('userName'),
    authToken: window.localStorage.getItem('authToken')
})

export default store
