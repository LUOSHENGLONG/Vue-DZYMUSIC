// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import moment from 'moment' //设置中文
// 分页
// import VuePaginate from 'vue-paginate'
// Vue.use(VuePaginate)
// import Clipboard from 'clipboard'
Vue.use(VueResource)
Vue.use(VueRouter)

//图片懒加载
Vue.use(VueLazyLoad,{
  error:'./src/asset/icon/lazy.gif',
  loading:'./src/asset/icon/lazyEach.gif'
})
// Vue.use(axios)
// Vue.use(Clipboard)
// import Paginate from 'vuejs-paginate'
// Vue.component('paginate', Paginate)

//分页插件
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

// 复制到剪切板
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

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

//filter
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  
  moment.locale('zh-cn') //设置中文显示
  // return moment().startOf('day').fromNow()
  // return moment.duration(10, "minutes").humanize()
  // console.log(new Date())
  // const time = moment(new Date()).format(pattern)
  return moment(dataStr).startOf('hour').fromNow();

})

Vue.filter('userId', function(dataStr) {
  
  

})
// 
Vue.filter('colorFormat', function (dataStr) {
  if(dataStr === "synthesizer"){
    return "background: #663a9e"
  }else if( dataStr === "effects") {
    return "background: #CC3366"
  }else if( dataStr === "samplePack") {
    return "background: #03A9F4"
  }else if( dataStr === "host") {
    return "background: #3366FF"
  }else if( dataStr === "tutorial") {
    return "background: #CC0033"
  }
})


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