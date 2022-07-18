import { createStore } from 'vuex'

export default createStore({
  state: {
    jobTitle : ["a CEO & Founder", "an IT Lecturer", "a Software Developer","a SQL Developer", "a Web Developer"],
    // Declaring variables
    cnt : 0,
    title : "",
    index : 0,
    letter : "",
    title: 'Joel\'s Portfolio',
    profiles: [
      {
        'name': 'Joel',
        'url': "https://i.postimg.cc/rwL322fD/joel3.jpg"
      },
      {
        "name": "Logo",
        "url": "https://i.postimg.cc/sxQ9v1g3/logo.jpg"
      }
    ]
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
