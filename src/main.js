// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)


import App from './App.vue'

import './normalize.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'swiper/dist/css/swiper.min.css'

import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})