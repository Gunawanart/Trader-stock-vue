import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './App.vue'

import { routes } from './route'

import  store  from './store/store'

Vue.use(VueRouter)
const router = new VueRouter({
  mode : 'history',
  routes
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
