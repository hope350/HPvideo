import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home'
import Category from '@/views/category/Category'
import Vip from '@/views/vip/Vip'
import Profile from '@/views/profile/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/vip',
    component: Vip
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
