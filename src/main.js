import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './App.vue'

import { routes } from './route'

Vue.use(VueRouter)
const router = new VueRouter({
  mode : 'history',
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
