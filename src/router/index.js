import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: 'dashboard',
  // },
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile.vue'),
  },
  {
    path: '/doctors',
    name: 'doctor',
    component: () => import('@/views/Doctor.vue'),
  },
  {
    path: '/nurses',
    name: 'nurse',
    component: () => import('@/views/Nurse.vue'),
  },
  {
    path: '/patients',
    name: 'patient',
    component: () => import('@/views/Patient.vue'),
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
