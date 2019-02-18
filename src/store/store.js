 
import Vue from 'vue';
import axios from 'axios'
import Vuex from 'vuex';
Vue.use(Vuex);
// axios.defaults.baseURL = ''

Vue.prototype.axios = axios

const state = {//要设置的全局访问的state对象
  // this.$store.state.***
  showFooter: true,
  changableNum:0,
  user: {},
  token: "",
  isLogin: false,
  rightData1: [],
  rightData2: [],
  homeData:[]
  //要设置的初始属性值
};

const mutations = {
// this.$store.commit('方法的名称', '按需传递唯一的参数')
 falseLogin(state) {
   state.isLogin = false
 },
 trueLogin(state) {
  state.isLogin = true
},
 
  getHomeData(state) {
    
  }
  
}

const getters = {
// this.$store.getters.***
  
}

const store = new Vuex.Store({
  state,// this.$store.state.***
  mutations,// this.$store.commit('方法的名称', '按需传递唯一的参数')
  getters // this.$store.getters.***
});

export default store;