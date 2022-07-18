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
        'name': 'Joel',
        'url': "https://i.postimg.cc/W3tfwN1H/joel1.jpg"
      },
      {
        'name': 'Joel',
        'url': "https://i.postimg.cc/zD64pgWS/joel2.jpg"
      }
    ],
    skills: [
      {
        'title': 'Leadership',
        'percentage': 100
      },
      {
        'title': 'Problem-solving',
        'percentage': 100
      },
      {
        'title': 'Teamwork',
        'percentage': 100
      },
      {
        'title': 'Self-development',
        'percentage': 100
      },
      {
        'title': 'Communication',
        'percentage': 100
      },
      {
        'title': 'Attention to details',
        'percentage': 100
      },
      {
        'title': 'Goal-oriented',
        'percentage': 100
      },
      {
        'title': 'Self-motivated',
        'percentage': 100
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
