<template>
  <div class="dzyTop">
    <nav class="navbar navbar-default navbar-fixed-top" style="box-shadow: 0 4px 10px #ddd;">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"><img class="headImg" src="../../asset/icon/logo.png" alt=""></router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!--  class="active" -->
          <li class="hidden-sm"><router-link to="/">首页 <span class="sr-only">(current)</span></router-link></li>
          <li><router-link to="/synthesizer">合成器</router-link></li>
          <li><router-link to="/effects">效果器</router-link></li>
          <li><router-link to="/samplePack">采样包</router-link></li>
          <li><router-link to="/host">宿主</router-link></li>
          <li><router-link to="/tutorial">教程</router-link></li>
          <!-- <li><router-link to="/last" style="margin-right: 0">最新</router-link></li> -->
          <li role="presentation" ref="more" class="dropdown" @mouseover="overClick" @mouseleave="outClick">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
              更多 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu moreUl">
              <li><router-link to="/kontakt">Kontakt</router-link></li>
              <li><router-link to="/preset">预置</router-link></li>
              <li><router-link to="/project">工程</router-link></li>
              <li role="separator" class="divider"></li>
              <li><router-link to="/last">最新</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left  hidden-sm hidden-md" style="text-align: center;">
          <div class="form-group">
            <input ref="keyword" v-model="keyword" @keyup.enter="search" type="text" class="form-control" placeholder="请输入搜索内容">
            <i class="fas fa-search" @click="search" style="cursor: pointer;"></i>
          </div>
          
        </form>
        <ul v-if="this.$store.state.isLogin" class="nav navbar-nav navbar-right">
          <li class="hidden-sm">
            <router-link to="/contribute" class="contribute">
            &nbsp;&nbsp;<i class="fas fa-edit" style="font-size: 18px"></i>
            <span style="font-size: 16px">投稿&nbsp;&nbsp;</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/user/personalInfo" style="padding: 0;margin: 0 4px;border: 0;">
              <img id="imgSrc" v-lazy="navAvatar" alt =".." class="img-circle" >
            </router-link>
          </li>
          
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="margin-right: 0;font-size: 16px;">{{ nickname }} <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li class="dropdown-info">
                <router-link to="/user/personalInfo">
                  <div class="dropdown-info-left">
                    <img :src="navAvatar" alt =".." class="img-info-circle">
                  </div>
                  <div class="dropdown-info-right">
                    <p>{{ nickname }} </p>
                    <p>{{ emailOrPhone }}</p>
                  </div>

                </router-link>
              </li>
              <li>
                <router-link to="/user/personalInfo">
                  <i class="fas fa-user-circle" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>个人中心</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </router-link>
              </li>
              
              <li>
                <router-link to="/setting/updateAvatar">
                  <i class="fas fa-cog" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>资料设置</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </router-link>
              </li>
              
              
              <li>
                <a href="javascript: void(0)" style="position: relative" class="weixin">
                  <i class="fab fa-weixin" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>微信公众号</span>
                  <i class="fa fa-qrcode" style="font-size: 24px;float: right;margin-top:8px"></i>
                  <div class="qrcode" style="">
                  <img src="../../images/qrcode.jpg" alt="" style="">
                </div>
                </a>
              </li>
              <li>
                <a href="https://weibo.com/u/6725785449/home" target="_blank">
                  <i class="fab fa-weibo" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>官方微博</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="http://space.bilibili.com/380735644?">
                  <i class="fas fa-tv" style="margin-right: 20px;font-size: 18px;vertical-align: -3px;"></i>
                  <span>&nbsp;哔哩哔哩</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/1788music/">
                  <i class="fab fa-instagram" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>&nbsp;Instagram</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.youtube.com/channel/UC-zwZZMXX34hGRanbZ6rMDg">
                  <i class="fab fa-youtube" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>Youtube</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </a>
              </li>
              <li>
                <router-link to="/feedback">
                  <i class="fas fa-comment-alt" style="margin-right: 22px;font-size: 22px;vertical-align: -3px;"></i>
                  <span>发送反馈</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </router-link>
              </li>
              <li>
                <router-link target="_blank" to="/help">
                  <i class="fas fa-question-circle" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>帮助</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </router-link>
              </li>
              <li>
                <router-link target="_blank" to="/sponsor">
                  <i class="fas fa-wallet" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>赞助</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </router-link>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a href="#" @click="logout($event)">
                  <i class="fas fa-sign-out-alt" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>注销</span>
                </a>
              </li>
            </ul>
          </li>
          
          
        </ul>
        <ul v-if="!this.$store.state.isLogin" class="nav navbar-nav navbar-right">
          
          <li>
            <a class="loginTagA" href="#" @click="showLogin($event)">登录</a>
          </li>
          <li>
            <a class="signupTagA" href="#" @click="showSignup($event)">注册</a>
          </li>
        </ul>
        
      </div>
        <button type="button" class="navbar-toggle collapsed  hidden-sm hidden-md  hidden-lg" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
    
    </div>
    
    </nav>

  </div>
</template>

<script>



  export default {
    data() {
      return {
        keyword: "",
        switch: 0,
        oldKeyword: "",
        navAvatar: `` + this.$store.state.user.avatar,
        nickname: this.$store.state.user.nickname,
        emailOrPhone: "",
      }
    },
    props: {
      navStatus: {
        type: Boolean,
      }
    },
    created() {
      // this.confirmLogin()

    },
    mounted() {
      let fr = new FileReader()
      if( sessionStorage.getItem("user") != null) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        this.navAvatar = `` + user.avatar
        this.nickname = user.nickname
        this.$store.commit("trueLogin")
      } 
    },
    updated() {
      if( sessionStorage.getItem("user") != null) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        this.navAvatar = `` + user.avatar
        this.nickname = user.nickname
        if(user.email.trim() != "" || user.email !=null) {
          this.emailOrPhone = user.email
        } else {
          this.emailOrPhone = user.phone
        }
      } 
    },
    methods: {
      overClick() {
        $(this.$refs.more).addClass("open")
      },
      outClick() {
        $(this.$refs.more).removeClass("open")
      },
      showLogin(e) {
        e.preventDefault();
        this.$emit('showLogin')
      },
      showSignup(e) {
        e.preventDefault();
        this.$emit('showSignup')
      },
      search() {
        if(this.keyword.trim() === "") {
          return
        }
        if(this.keyword.trim() !== "" || this.keyword.trim() !== null ){
          // this.keyword = this.keyword.replace(/\s+/g,"")
          if(this.switch % 2 === 0) {
            this.$router.push({name: 'search', params: {keyword: this.keyword.trim()}})
          }else {
            this.$router.push({name: 'search2', params: {keyword: this.keyword.trim()}})
          }
          if(this.keyword !== this.oldKeyword) {
            this.switch ++
          }
          this.oldKeyword = this.keyword
        }
        
      },
      logout(e) {
        e.preventDefault()
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")
        if( localStorage.getItem("token") ) {
          localStorage.removeItem("token")
        }
        // this.$store.commit("confirmLogin")
        this.$router.go(0)
      },
      
    },
      
    watch: {
      keyword(newVal, oldVal) {
        if(newVal !== oldVal) {
          
        }
      },
      
    }
    
  }
</script>

<style lang="scss" scoped>

// @media screen and (min-width: 1200px) {
//   .navbar-fixed-top {
//     width: 80%;
//   }
// }
@media screen and (max-width: 1530px) {
  .container {
    width: 98%;
  }
}


.container {
  padding: 0;
  position: relative;
}
.img-circle {
  width: 30px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
}
.form-control:focus {
    border-color: #47b39d9d;
    outline: 0;
    -webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
}
.form-control {
    border-radius: 40px;
    padding-right: 34px;
    font-size: 14px;
}

.navbar {
    margin-bottom: 20px;
    z-index: 99;
    background-color: #fff;
    
   
}
ul {
  margin: 0;
}
.dropdown {
  a {
    padding-right: 0;
  }
}


ul li {
  font-size: 16px;
  a {
    padding: 5px;
    margin: 10px;
    margin-bottom: 6px;
    border-bottom: 3px solid rgba(255, 255, 255, 0.9);
    color: #34495ed5 !important;
    
  }
  a.contribute {
    margin-left: 0;
    margin-top: 8px; 
    height: 34px;
    line-height: 24px;
    letter-spacing: 2px;
    border-radius: 40px;
  }
  
  a:hover {
    border-bottom: 3px solid #47b39d;
    opacity: 0.9;
  }
}
.progress {
    height: 3px;
    margin-bottom: 0;
    border-radius: 2px;
    border: 0;

    background-color: #f8f8f8;
}

.headImg {
  width: 140px;
  height: 30px;
}
.navbar-brand {
  padding: 10px;
}

.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus {
    background-color: #fff;
    color: #555;
}

.navbar-default .navbar-nav>li>a.contribute:hover, .navbar-default .navbar-nav>li>a.contribute:focus {
    color: #333;
    background-color: #47b39d;
    color: #fff !important;
    border: 0;
    transition: all 1s ease;
}
ul li {
  text-align: center;
}


.dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
    text-decoration: none;
    color: #262626;
    background-color: #f5f5f5;
}
.dropdown-menu>li>a:first-child:hover, .dropdown-menu>li>a:first-child:focus {
    text-decoration: none;
    color: #262626;
    background-color: none;
}

.dropdown-menu {
  border: none;
  padding: 0;
  width: 300px;
  position: absolute;
  right: 0;
  top: 50px;
  
  .divider {
    margin: 2px 0;
  }
  li {
      margin: 6px 0;
    a {
      height: 40px;
      border: 0;
      margin: 0 auto;
      padding: 4px 0;
      color: #333 !important;
      line-height: 40px;
      padding: 0 26px;
      text-align: left;
      font-size: 16px;
      span {

      }
    }
    a:hover {
      border: 0;
      color: #47b39d;
    }
    
  }
  li.dropdown-info {
    margin: 0;
    padding: 6px 20px;
    background-color: rgba(238, 238, 238, 0.582);
    text-align: center;
    position: relative;
    height: 72px;
    overflow: hidden;
    a {
      line-height: 20px;
    }
    .dropdown-info-left {
      position: absolute;
      left: 20px;
      top: 16px;
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
    }
    .dropdown-info-right {
      text-align: left;
      position: absolute;
      overflow: hidden;
      left: 78px;
      top: 18px;
      p:first-child {
        margin: 0;    
        font-weight: 700;
      }
      p:last-child {
        font-size: 14px;
        width: 200px;
      }
    }
  }
  
}
// .dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
//     text-decoration: none;
//     color: #262626;
//     background-color: rgb(124, 120, 120);
// }


.contribute {
  margin-right: 20px;
  background-color: #47b39d;
  color: #fff !important;
  border-radius: 4px;
  border: 0;
}
// .contribute:hover {
//   background-color: #47b39d;
//   margin-right: 20px;
//   color: #fff !important;
//   border-radius: 4px;
//   border: 0;
// }
.btn,
.btn:focus,
.btn:hover,
.btn.active,
.btn-primary,
.btn-primary:focus,
.btn-primary:hover,
.btn-primary.active {
  border-color: #47b39d !important;
  outline: 0;
}

.nav .open>a, .nav .open>a:hover, .nav .open>a:focus {
    background-color: #eee;
    border-color: #47b39d;
}

.navbar-toggle {
  position: absolute;
  right: 0;
  top: 0;
}
.loginTagA {
  margin-left: 0;
}
.signupTagA {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

// .navbar-right {
//   position: absolute;
//   right: 0;
//   top: 0;
// }

.form-group {
  position: relative;
  .fa-search {
    position: absolute;
    right: 12px;
    top: 10px;
    color: #47b39d;
  }
} 
.qrcode {
  position: absolute;
  left: -205px;
  top:0px;
  display:none;
  width: 200px;
  opacity: 1;
  img {
    width: 200px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    opacity: 1;
  }
}
.weixin:hover {
  .qrcode {
    display: block;
  }
}

.moreUl {
  width: 80px;
  li {
    a {
      color: #666 !important;
    }
  }
}
</style>

