import { createStore } from 'vuex'

export default createStore({
  state: {
    jobTitle : ["a CEO & Founder", "an IT Lecturer", "a Software Developer","a SQL Developer", "a Web Developer"],
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
    ],
    educations: [
      {
        year: 2020,
        schoolName: 'Data Camp',
        description: 'I got my certificates on Data science',
        certificateUrl: 'https://drive.google.com/file/d/1-f1yRukcXLo0e8ip3Cb7Z3D29Er9ENn_/view',
        optained: 'Certifate'
      },
      {
        year: 2019,
        schoolName: 'Data Camp',
        description: 'I got my certificates on Advanced to Python',
        certificateUrl: 'https://drive.google.com/file/d/1qd2xS-HvI4c_C4vf1-Z1R_bPxzF7SZ-t/view',
        optained: 'Certifate'
      },
      {
        year: 2018,
        schoolName: 'Data Camp',
        description: 'I got my certificates on Intro to Python',
        certificateUrl: 'https://drive.google.com/file/d/1-_DBHhxHKGS3Gqsy5eJ-_16WJN50OfXX/view',
        optained: 'Certifate'
      },
      {
        year: 2015,
        schoolName: 'Study Jams',
        description: 'I got my certificates on Intro to Android Developer',
        certificateUrl: 'https://drive.google.com/file/d/102891ip_JFl_NEwW942zbvbkG7SXHx0G/view',
        optained: 'Certifate'
      },
      {
        year: 2014,
        schoolName: 'Tshwane University of Technology',
        description: 'I got my diploma on Software Engineering',
        certificateUrl: '',
        optained: 'Diploma'
      },
      {
        year: 2005,
        schoolName: 'Havatech',
        description: 'Completed my course on PC Engineering',
        certificateUrl: '',
        optained: 'Certifate'
      },
      {
        year: 2000,
        schoolName: 'Technical & Commercial Institute',
        description: 'Matric / Grade 12',
        certificateUrl: '',
        optained: 'Certifate'
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Rainbow',
        description: 'Rainbow project was build using plain html5, css3 only',
        imageUrl: 'https://i.postimg.cc/FKr61g5m/rainbow.png',
        gihubLink: 'https://github.com/joelmukanya/rainbow',
        hostedLink: 'https://rainbowbyjoel.netlify.app'
      },
      {
        id: 2,
        name: 'Bootstrap Portfolio',
        description: 'This project was build using HTML5, CSS3, JS, and Bootstrap',
        imageUrl: 'https://i.postimg.cc/XJh12RZ7/portfolio.png',
        gihubLink: 'https://github.com/joelmukanya/joel_portfolio',
        hostedLink: 'https://joelmukanyaportfolio.netlify.app'
      },
      {
        id: 3,
        name: 'Vue Portfolio',
        description: 'Rainbow project was build Vue 3, router, and store',
        imageUrl: 'https://i.postimg.cc/s2KYq8yL/vue-portfolio.png',
        gihubLink: 'https://github.com/joelmukanya/vuePortfolio',
        hostedLink: 'https://joelmukanya-vue-portfoli-586ad.web.app/'
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
