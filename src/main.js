// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import axios from 'axios'
// 分页
// import VuePaginate from 'vue-paginate'
// Vue.use(VuePaginate)
// import Clipboard from 'clipboard'
Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.use(axios)
// Vue.use(Clipboard)
// import Paginate from 'vuejs-paginate'
// Vue.component('paginate', Paginate)
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import VueClipboard from 'vue-clipboard2'

//filter
Vue.filter('typeFormat', function (dataStr) {
  if(dataStr === "synthesizer"){
    return "合成器"
  }else if( dataStr === "effects") {
    return "效果器"
  }else if( dataStr === "samplePack") {
    return "采样包"
  }else if( dataStr === "host") {
    return "宿主"
  }else if( dataStr === "tutorial") {
    return "教程"
  }
})


Vue.use(VueClipboard)
import App from './App.vue'

import './normalize.css'

import store from './store/store.js'//引入store
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'swiper/dist/css/swiper.min.css'

import router from './router.js'


const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store,
  router
})