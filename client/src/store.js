import Vue from 'vue'
import Vuex from 'vuex'

import { loginByEmail, getUserInfo } from '@/api/login'
import { setToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: '',
    userName: '',
    authToken: ''
  },
  mutations: {
    SET_USEREMAIL: (state, data) => {
      state.userEmail = data;
    },
    SET_USERNAME: (state, data) => {
      state.userName = data;
    },  
    SET_AUTHTOKEN: (state, data) => {
      state.authToken = data;
    },
  },
  actions: {
    // login
    LoginByEmail({ commit }, userInfo) {
      const userEmail = userInfo.userEmail.trim()
      return new Promise((resolve, reject) => {
        loginByEmail(userEmail, userInfo.password).then(response => {
          const data = response.date
          commit('SER_AUTHTOKEN', data.authToken)
          setToken(response.data.authToken)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // get user info
    GetUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.authToken).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_USERNAME', data.userName)
          commit('SET_USEREMAIL', data.userEmail)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }


  },
  getters: {
    authToken: state => state.authToken,
    userEmail: state => state.userEmail,
    userName: state => state.userName
  }
})
