import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About/AboutView.vue'
import Resume from '../views/Resume/Resume.vue'
import Projects from '../views/Projects/Projects.vue'
const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/Contact/Contact.vue')
  } 
 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return {x: 0, y:0 };
  },
  routes
})

export default router
