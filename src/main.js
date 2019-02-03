// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import VueCropper from 'vue-cropper'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import moment from 'moment' //设置中文
import vueToTop from 'vue-totop'
// 分页
// import VuePaginate from 'vue-paginate'
// Vue.use(VuePaginate)
// import Clipboard from 'clipboard'
import {VTable,VPagination} from 'vue-easytable'

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueCropper)
Vue.use(vueToTop)

//图片懒加载
Vue.use(VueLazyLoad,{
  error:'./src/images/1788.png',
  loading:'./src/asset/icon/lazy8.gif'
})


const options = {
  color: '#47b39d',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '1s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
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
  }else if( dataStr === "project") {
    return "工程"
  }else if( dataStr === "kontakt") {
    return "Kontakt"
  }else if( dataStr === "preset") {
    return "预置"
  }else if( dataStr === "midi") {
    return "MIDI"
  }
})




//hiddenPhone
Vue.filter('hiddenPhone', function (dataStr) {
  if(dataStr === "" || dataStr === null){
    return "未填写"
  }else {
    return dataStr
  }
})

//日起filter
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  dataStr = parseInt(dataStr)
  moment.locale('zh-cn') //设置中文显示

  // 864000000毫秒等于10天
  let now = new Date().getTime()
  if ( now - dataStr < 864000000 ) {
    dataStr = moment(dataStr).format('YYYY-MM-DD HH:mm:ss');
    return moment(dataStr).startOf('hour').fromNow();
  } else {
    return moment(dataStr).format('YYYY-MM-DD');
  }

})

Vue.filter('commentDateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  dataStr = parseInt(dataStr)
  moment.locale('zh-cn') //设置中文显示

  // 864000000毫秒等于10天
  
  return moment(dataStr).format('YYYY-MM-DD HH:mm:ss');

})

//资源大小filter
Vue.filter('sizeFormat', function(dataStr) {
  if( dataStr === "" || dataStr === null) {
    return "未知"
  }
  return dataStr

})


Vue.filter('contributeTimeFormat', function(dataStr) {
  
  return "xxxxxxxx";

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
    return "background: #9708cc"
  }else if( dataStr === "project") {
    return "background: #9452a5"
  }else if( dataStr === "kontakt") {
    return "background: #CC0033"
  }else if( dataStr === "preset") {
    return "background: #9452a5"
  }else if( dataStr === "midi") {
    return "background: #CC0033"
  }
})

Vue.filter('arrowsFormat', function (dataStr) {
  if(dataStr === "synthesizer"){
    return "color: #663a9e"
  }else if( dataStr === "effects") {
    return "color: #CC3366"
  }else if( dataStr === "samplePack") {
    return "color: #03A9F4"
  }else if( dataStr === "host") {
    return "color: #3366FF"
  }else if( dataStr === "tutorial") {
    return "color: #9708cc"
  }else if( dataStr === "project") {
    return "color: #9452a5"
  }else if( dataStr === "kontakt") {
    return "color: #CC0033"
  }else if( dataStr === "preset") {
    return "color: #9452a5"
  }else if( dataStr === "midi") {
    return "color: #CC0033"
  }
})

// 



import App from './App.vue'

import './normalize.css'

import store from './store/store.js'//引入store
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'swiper/dist/css/swiper.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router.js'



Vue.http.interceptors.push((request, next) => {
  NProgress.start();

  next((response)=>{
    NProgress.done();
  });
});

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store,
  router
})