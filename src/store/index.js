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
    ],
    testimonials: [
      {
        'fullname': 'Sarah Mukanya',
        'profile': 'https://i.postimg.cc/15ssZG6W/11.jpg',
        'description': 'Pending',
      },
      {
        'fullname': 'Rachel Mukanya',
        'profile': 'https://i.postimg.cc/SRBL8qnC/rachel.jpg',
        'description': 'Joel never ceases to amaze me with the vast amount of knowledge he has acquired over the years in software development. He is truly a great mentor.',
      },
      {
        'fullname': 'Ruth Mukanya',
        'profile': 'https://i.postimg.cc/DyGHNwPV/ruth.jpg',
        'description': 'Joel is a nice person. Someone really reliable and honest. He always does his work honestly and makes sure everything is well organized.',
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
