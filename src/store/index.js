import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Joel\'s Portfolio'
  },
  getters: {
    getTitle() {
      return this.state.title;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
