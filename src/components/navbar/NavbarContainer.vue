<template>
  <div class="dzyTop">
    <nav class="navbar navbar-default navbar-fixed-top">

    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        
        <router-link class="navbar-brand" to="/"><img class="headImg" src="../../asset/icon/sss11.png" alt=""></router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!--  class="active" -->
          <li><router-link to="/">首页 <span class="sr-only">(current)</span></router-link></li>
          <li><router-link to="/synth">合成器</router-link></li>
          <li><router-link to="/effects">效果器</router-link></li>
          <li><router-link to="/sample">采样包</router-link></li>
          <li><router-link to="/host">宿主</router-link></li>
          <li><router-link to="/tutorial">教程</router-link></li>
          <li><router-link to="/more">更多</router-link></li>
         
        </ul>
        <form class="navbar-form navbar-left hidden-sm hidden-md hidden-xs">
          <div class="form-group">
            <input ref="keyword" v-model="keyword" type="text" class="form-control" placeholder="请输入搜索内容">
          </div>
          <button @click="search()" type="button" class="btn btn-primary">搜索</button>
          
        </form>
        <ul v-if="this.$store.state.isLogin" class="nav navbar-nav navbar-right hidden-sm hidden-xs  hidden-md">
          <li>
            <img @click="goUser"  :src="navAvatar" alt =".." class="img-circle">
            <!-- <i class="fa fa-user-circle img-circle" style="font-size: 26px; color: #337ab7;cursor: pointer"></i> -->
          </li>
          
          <li>
            <router-link to="/setting">设置</router-link>
          </li>
          <li>
            <a href="#" @click="logout($event)">注销</a>
          </li>
        </ul>
        <ul v-if="!this.$store.state.isLogin" class="nav navbar-nav navbar-right hidden-sm hidden-xs  hidden-md">
          
          <li>
            <a href="#" @click="showLogin($event)">登录</a>
          </li>
          <li>
            <a href="#" @click="showSignup($event)">注册</a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->

    
    </div><!-- /.container- -->
    <!-- <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style="width: 10%;height: 3px"></div>
    </div> -->
    
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
        navAvatar: ""
      }
    },
    props: {
      navStatus: {
        type: Boolean,
      }
    }
    ,
    mounted() {
      if( localStorage.getItem("user") != null) {
        this.navAvatar = JSON.parse(localStorage.getItem("user")).avatar
      }
    },
    methods: {
      showLogin(e) {
        e.preventDefault();
        this.$emit('showLogin')
      },
      showSignup(e) {
        e.preventDefault();
        this.$emit('showSignup')
      },
      search() {
        if(this.keyword.trim() !== "" || this.keyword.trim() !== null ){
          if(this.switch % 2 === 0) {
            this.$router.push({name: 'search', params: {keyword: this.keyword}})
          }else {
            this.$router.push({name: 'search2', params: {keyword: this.keyword}})
          }
          if(this.keyword !== this.oldKeyword) {
            this.switch ++
          }
          this.oldKeyword = this.keyword
        }
        
      },
      logout(e) {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.$store.commit("confirmLogin")
      },
      goUser() {
        this.$router.push({path: "user"})
      }
    },
    watch: {
      keyword(newVal, oldVal) {
        if(newVal !== oldVal) {
          
        }
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.img-circle {
  width: 30px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
}
.form-control:focus {
    border-color: rgb(109, 109, 109);
    outline: 0;
    -webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
}

.navbar {
    margin-bottom: 20px;
    z-index: 99;
    background-color: #fff;
   
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
  a:hover {
    border-bottom: 3px solid #337ab7;
  }
}
.progress {
    height: 3px;
    margin-bottom: 0;
    border-radius: 4px;
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
</style>

