<template>
  <div ref="all" class="all">
    <vue-progress-bar></vue-progress-bar>
    <!-- 顶部栏 --> 
    <Navbar :navStatus="navStatus" @showLogin="showLoginDiv" @showSignup="showSignupDiv"></Navbar>
    
    <router-view></router-view>
    
    <!--底部 copyright-->
    <div ref="login" class="login">
      <transition name="fade">
      <Login v-if="isLogin" @cancel="cancelLogin()" @signup="switchSignup()"></Login>
      <Signup v-if="isSignup"  @cancel="cancelSignup()" @login="switchLogin()"></Signup>
      </transition>
    </div>
    

    <Bottom></Bottom>
    <!-- 遮罩层 -->
    <div ref="popContainer" class='popContainer'></div>
    <vueToTop></vueToTop>
  </div> 

</template>

<script>
import Swiper from './components/swiper/SwiperContainer.vue'
import Navbar from './components/navbar/NavbarContainer.vue'
import Bottom from './components/bottom/BottomContainer.vue'
import Login from './components/login/LoginContainer.vue'
import Signup from './components/signup/SignupContainer.vue'
import Info from './components/sub/InfoContainer.vue'


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
      isLogin: false,
      isSignup: false,
      token: "",
      top: 0 ,
      navStatus: this.$store.state.isLogin,
      // confirmLogin: false,
    };
  },
  created() {
    // this.$store.commit("confirmLogin")
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
    this.queryRightData()
  
  },
  mounted() {
    this.confirmLogin()
    this.$Progress.finish()
    window.onresize = () => {
      // 浏览器大小改变时 登陆 注册 DIV left top 值改变是其在整个窗口保持居中
      this.auto()
    },
    window.onscroll = () => {
      // 浏览器滚动时 登陆 注册 DIV left top 值改变是其在整个窗口保持居中
      this.auto()
    }
    
    // this.$store.commit("queryRightData")
  }
  ,
  methods: {
    confirmLogin() {
      let token = ""
      if( localStorage.getItem("token") != null ) {
        token = localStorage.getItem("token")
      }
      if( sessionStorage.getItem("token") != null ) {
        token = sessionStorage.getItem("token")
      }
      if( token === "") {
        return
      }
      this.axios.post('/api/confirmLogin',{token: token})
      .then( result => {
        if(result.data === false){
          sessionStorage.removeItem("user")
          sessionStorage.removeItem("token")
          this.$router.push({path: '/'})
        }else {
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
        }
      })
    },
    queryRightData() {
    this.axios.post("/api/rightData1")
      .then(result => {
        localStorage.setItem("rightData1",JSON.stringify(result.data.data))
      })
      .then(this.axios.post("/api/rightData2").then(result => {
        localStorage.setItem("rightData2",JSON.stringify(result.data.data))
      }))
    },
    auto() {
      let divlogin = this.$refs.login
      // div宽度
      let divWidth = divlogin.offsetWidth
      // 浏览器宽度
      let docWidth = document.documentElement.clientWidth
      // 设置left
      this.$refs.login.style.left = docWidth/2 - divWidth/2 + "px"

       // div高度
      let divHeight = divlogin.offsetHeight
      // 屏幕滚出高度
      let srcollHeight = $('html,body').scrollTop()
      // 浏览器高度
      let docHeight = document.documentElement.clientHeight
      // 设置left
      this.top = srcollHeight+docHeight/2-divHeight/2
      
      this.$refs.login.style.top = this.top + "px"
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
      this.$refs.login.style.top = srcollHeight+docHeight/2-divHeight/2 + "px"
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
      this.top = srcollHeight+docHeight/2-divHeight/2
      
      this.$refs.login.style.top = this.top + "px"
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

    switchSignup() {
      this.isLogin = false
      this.isSignup = true 
    },
    switchLogin() {
      this.isLogin = true
      this.isSignup = false 

    },

    
  },
  
  components: {
    Swiper,
    Navbar,
    Bottom,
    Login,
    Signup,
    Info,
    SynthesizerIndexContainer,
    EffectsIndexContainer,
    SamplePackIndexContainer,
    HostIndexContainer,
    TutorialIndexContainer,
  },
  watch: {
    
  },
};


</script>


<style lang="scss" scoped>
@import './asset/css/buttons.css';
@import './asset/css/font-awesome.min.css';
body, textarea, input, select, section {
    color: rgb(68, 68, 68);
    font-size: 14px;
    line-height: 1.8;
    font-weight: normal;
    font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
}

// 遮罩层
div.popContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: none;
    z-index: 999;
}
.all {
  // overflow-x: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
