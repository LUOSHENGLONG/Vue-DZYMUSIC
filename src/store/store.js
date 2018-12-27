 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {//要设置的全局访问的state对象
  // this.$store.state.***
  showFooter: true,
  changableNum:0,
  user: {},
  token: "",
  isLogin: false
  //要设置的初始属性值
};

const mutations = {
// this.$store.commit('方法的名称', '按需传递唯一的参数')
 showLogin(state) {
   state.isLogin = !state.isLogin
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