<template>
  <div ref="all" class="all" @touchmove.prevent>
    <!-- 顶部栏 --> 
    <Navbar @showLogin="showLoginDiv" @showSignup="showSignupDiv"></Navbar>
    <!--进度条-->
    <Progress></Progress>

    <router-view></router-view>
    
    <!--底部 copyright-->
    <div ref="login" class="login">
      <Login v-if="isLogin" @cancel="cancelLogin()"></Login>
      <Signup v-if="isSignup"  @cancel="cancelSignup()"></Signup>
    </div>
    

    <Bottom></Bottom>
    <!-- 遮罩层 -->
    <div ref="popContainer" class='popContainer'></div>
  </div> 

</template>

<script>

import './lib/pace/js/pace.min.js'

import Swiper from './components/swiper/SwiperContainer.vue'
import Navbar from './components/navbar/NavbarContainer.vue'
import Progress from './components/progress/ProgressContainer.vue'
import Bottom from './components/bottom/BottomContainer.vue'
import Login from './components/login/LoginContainer.vue'
import Signup from './components/signup/SignupContainer.vue'


import SynthesizerIndexContainer from './components/synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from './components/effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from './components/samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from './components/host/HostIndexContainer.vue'
import TutorialIndexContainer from './components/tutorial/TutorialIndexContainer.vue'



export default {
  
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      mySwiper: {},
      fullHeight: document.documentElement.clientHeight,
      isLogin: false,
      isSignup: false,
      top: 0 ,
    };
  },
  mounted() {
    window.onresize = () => {
      let divlogin = this.$refs.login
      // div宽度
      let divWidth = divlogin.offsetWidth
      // 浏览器宽度
      let docWidth = document.documentElement.clientWidth
      // 设置top
      this.$refs.login.style.left = docWidth/2 - divWidth/2 + "px"
    },
    window.onscroll = () => {
      let divlogin = this.$refs.login
      // div高度
      let divHeight = divlogin.offsetHeight
      // 屏幕滚出高度
      let srcollHeight = $('html,body').scrollTop()
      // 浏览器高度
      let docHeight = document.documentElement.clientHeight
      // 设置left
      this.$refs.login.style.top = srcollHeight+docHeight/2-divHeight/1.5 + "px"

    }
    
  },
 
  methods: {
    register() {
      this.$http
        .post(
          "http://127.0.0.1:5000/api/register",
          {
            username: this.username,
            password: this.password,
            nickname: this.nickname
          },
          { emulateJSON: true }
        )
        .then(result => {
          console.log(result);
        });
    },
    handleScroll () {
      window.addEventListener('scroll', this.handleScroll)
      
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log("-----"+scrollTop)
      
    },
    //显示登录div 遮罩层
    showLoginDiv() {
      this.isLogin = true
      let divlogin = this.$refs.login
      // div高度
      let divHeight = divlogin.offsetHeight
      // 屏幕滚出高度
      let srcollHeight = $('html,body').scrollTop()
      // 浏览器高度
      let docHeight = document.documentElement.clientHeight
      // div宽度
      let divWidth = divlogin.offsetWidth
      // 浏览器宽度
      let docWidth = document.documentElement.clientWidth
      // 设置top
      this.$refs.login.style.top = srcollHeight+docHeight/2-divHeight/1.5 + "px"
      // 设置left
      this.$refs.login.style.left = docWidth/2 - divWidth/2 + "px"
      //遮罩层 显示
      this.$refs.popContainer.style.display = "block"
      //登录div 显示
      this.$refs.login.style.visibility = "visible"
      
    },
    //登录页点X 隐藏DIV 遮罩层
    cancelLogin() {
      //遮罩层 隐藏
      this.$refs.popContainer.style.display = "none"
      //登录div 隐藏
      this.$refs.login.style.visibility = "hidden"
      this.isLogin = false
    },
    showSignupDiv() {
      this.isSignup = true
      let divlogin = this.$refs.login
      // div高度
      let divHeight = divlogin.offsetHeight
      // 屏幕滚出高度
      let srcollHeight = $('html,body').scrollTop()
      // 浏览器高度
      let docHeight = document.documentElement.clientHeight
      // div宽度
      let divWidth = divlogin.offsetWidth
      // 浏览器宽度
      let docWidth = document.documentElement.clientWidth
      // 设置top
      this.top = srcollHeight+docHeight/2-divHeight/1.5
      this.$refs.login.style.top = this.top
      console.log(this.top+" top")
      // 设置left
      this.$refs.login.style.left = docWidth/2 - divWidth/2 + "px"
      //遮罩层 显示
      this.$refs.popContainer.style.display = "block"
      //登录div 显示
      this.$refs.login.style.visibility = "visible"
    },
    //登录页点X 隐藏DIV 遮罩层
    cancelSignup() {
      //遮罩层 隐藏
      this.$refs.popContainer.style.display = "none"
      //登录div 隐藏
      this.$refs.login.style.visibility = "hidden"
      this.isSignup = false
    },

    
  },
  components: {
    Swiper,
    Navbar,
    Progress,
    Bottom,
    Login,
    Signup,
    SynthesizerIndexContainer,
    EffectsIndexContainer,
    SamplePackIndexContainer,
    HostIndexContainer,
    TutorialIndexContainer,
  }
};


</script>


<style lang="scss" scoped>
@import './lib/pace/css/pace-theme-minimal.css';
// 遮罩层
div.popContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: none;
    z-index: 33;
}




.login {
  visibility: hidden;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 20px;
  z-index: 9999;
  text-align: center;
}


a {
  text-decoration: none;
  color: #333;
}



.thumbnail {
  padding: 0;
  background-color: white;
  border: 1px solid #eee;
}
.thumbnail:hover {
  box-shadow: 0px 0px 20px #ccc; 
  background-color: #FCFCFC;
}
.thumbnail img {
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 10px #ccc; 
  vertical-align: middle;
}
.caption {
  padding: 5px px;
}

.title {
  padding-right: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  overflow: hidden;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
}
.title a {
  color: #333;
  display: inline-block;
  
  text-align: center;
}
.title a:nth-child(1) {
  font-size: 18px;
  float: left;
  
}

.title a:nth-child(2) {
  float: right;
}

.title a:hover {
  text-decoration: none;
  color: #337ab7;
  
}
.navbar {
    margin-bottom: 20px;
    
}

.top {
  position: flex;
  top: 0;
  left: 0;
}

.content {
  background-color: #fff;
  border-radius: 5px;
}


</style>
