<template>
  <div class="dzyTop">
    <nav class="navbar navbar-default navbar-fixed-top">

    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">DZYMUSIC</router-link>
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
            <input type="text" class="form-control" placeholder="请输入搜索内容">
          </div>
          <button type="submit" class="btn btn-primary">搜索</button>
        </form>
        <ul v-if="isLogin" class="nav navbar-nav navbar-right hidden-sm hidden-xs  hidden-md">
          <li>
            <img src="../../images/tx.jpg" alt="..." class="img-circle">
          </li>
          <li>
            <router-link to="/user">用户名</router-link>
          </li>
          <li>
            <router-link to="/setting">设置</router-link>
          </li>
        </ul>
        <ul v-if="!isLogin" class="nav navbar-nav navbar-right hidden-sm hidden-xs  hidden-md">
          
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
        isLogin: false
      }
    },
    props: {
      
    }
    ,
    methods: {
      showLogin(e) {
        e.preventDefault();
        this.$emit('showLogin')
      },
      showSignup(e) {
        e.preventDefault();
        this.$emit('showSignup')
      }
    }
  }
</script>

<style lang="scss" scoped>

.img-circle {
  width: 30px;
  height: 30px;
  margin: 10px 0;
}
.form-control:focus {
    border-color: #F2F2F2;
    outline: 0;
    -webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.075);
}

.navbar {
    margin-bottom: 20px;
    z-index: 1;
   
}

.progress {
    height: 3px;
    margin-bottom: 0;
    border-radius: 4px;
    border: 0;

    background-color: #f8f8f8;
}
</style>

