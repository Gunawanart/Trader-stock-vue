import Vue from 'vue'

import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

import App from './App.vue'

import { routes } from './route'

import  store  from './store/store'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
Vue.use(VueRouter)
const router = new VueRouter({
  mode : 'history',
  routes
})

Vue.use(VueResource)

Vue.http.options.root = 'https://trading-app-b8c1e.firebaseio.com/'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
