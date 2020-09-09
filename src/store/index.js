import Vue from 'vue'
import Vuex from 'vuex'
import userState from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    processing: false,
    error: null
  },
  mutations: {
    SET_PROCESSING(state, payload){
      state.processing = payload
    },
    SET_ERROR(state, payload){
      state.error = payload
    },
    CLEAN_ERROR(state){
      state.error = null
    }
  },
  getters: {
    getProcessing: (state) => state.processing,
    getError: (state) => state.error
  },
  modules: {
    userState
  }
})
