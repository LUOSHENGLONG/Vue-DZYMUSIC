<template>
  <div ref="login-container" class="-container container">
    <div class="login-form">
        <div class="form-box">
            <span class="cancel glyphicon glyphicon-remove" @click="cancel()"></span>
            <div class="form-title-top">登 录</div>
            <span class="span-title">使用邮箱 / 手机登录</span>
            <div class="form-bd">
                <form id="fm" action="/auth/login" method="post" class="form-horizontal" enctype="application/x-www-form-urlencoded">
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="username">邮箱 / 手机</label> -->
                        <div class="control-col rel">
                            <input type="text" class="form-control" autocomplete="off" maxlength="32" v-model="username" name="username" id="username" placeholder="请输入邮箱 / 手机" value="">
                            <b class="abs-icon"><img src="../../images/people-icon.png" alt=""></b>
                        </div>
                    </div>
                    <div class="form-group form-group-second">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" class="form-control" id="password" @keyup.enter="post" v-model="password" name="passwd" placeholder="请输入账号密码" maxlength="16">
                            <b class="abs-icon"><img src="../../images/password-icon.png" alt=""></b>
                        </div>
                    </div>
                    
                    <div class="autoLogin" style="height:30px;text-align: left;font-size: 14px;margin: 0 auto;">
                        <span style="margin: 10px 0;text-align: top;float:left;color: #666;">
                            <i class="far fa-flag" style="font-size: 14px;margin-right: 6px;"></i>
                            记住密码 自动登录 
                            <i class="fa fa-sign-in" style="font-size: 16px;margin-left: 20px;"></i>
                        </span>
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off" style="color:#bbb;font-size: 28px;float:right;margin-top:6px;cursor:pointer"></i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on" style="font-size: 28px;float:right;margin-top:6px;cursor:pointer;color: rgb(79, 192, 141);"></i>
                    </div>

                    <transition name="fade">
                        <div ref="TipsDiv" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>
                    </transition>
    
                    <div class="form-group">
                        <div class="control-col">
                            
                            <button class="btn btn-primary btn-lg btn-login" type="button" name="bnt" ref="post" @click="post()" >登&nbsp;&nbsp;&nbsp;录</button>
                            
                            <div class="rows-forget">
                                <span class="pull-left">
                                    
                                    没有帐号？
                                    <a href="#" @click="goSignup($event)" class="zhuce-href">立即注册</a>
                                </span>
                                <router-link to="/findPassword" target="_blank" class="forger-pas">忘记密码</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div class="slogon">1788 MUSIC 欢迎你的加入</div>
        </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
        message: "账号或密码错误,2秒后返回登录",
        confirmLogin: false,
        loginTimes: 0 ,
        username: '',
        password: '',
        toggle: false,
    }
  },
  mounted() {
    
  },
  methods: {
    toggleSwitch() {
        this.toggle = !this.toggle
    },
    cancel() {
      this.$emit("cancel")
    },
    goSignup(e) {
        e.preventDefault();
        this.$emit("signup")
    },
    post() {
        //登录验证
        const tip = this.$refs.TipsDiv
        if( this.confirmLogin === false ) {
            // this.loginTimes++
            
            // if(this.loginTimes > 3) {
            //     $(tip).text("连续三次登入错误,请15分钟后再试")
            // }
            tip.style.display = "block"
            window.setTimeout(()=> {
                tip.style.display = "none"
            },2000)
            return
        }
        

        this.axios.post("/api/login",{username:this.username,password:this.password,toggle: this.toggle})
        .then(result => {
            //登录成功
            if( result.data.status === 1 ) {
                this.message = result.data.message
                tip.style.background = "rgb(79, 192, 141)"
                tip.style.display = "block"
                this.$store.state.user = result.data.user
                this.$store.state.token = result.data.user.token
                
                sessionStorage.setItem("user",JSON.stringify(result.data.user))
                sessionStorage.setItem("token",result.data.user.token)
                // 是否勾选记住密码直接登录 勾选则把token有效时间设置为15天
                if( this.toggle === true) {
                    localStorage.setItem("token",result.data.user.token)
                }
                this.$store.commit('showLogin')
                setTimeout(() => {
                    this.cancel();
                }, 1000);
                this.$router.go(0)
            }else {
                this.message = "账号或密码错误,2秒后返回登录"
                tip.style.display = "block"
                window.setTimeout(()=> {
                    tip.style.display = "none"
                },2000)
            }
        })
        .catch( err => {
            this.message = "连续五次登入错误,请15分钟后再试"
            tip.style.display = "block"
            window.setTimeout(()=> {
                tip.style.display = "none"
            },5000)
        })

        
    },
    tips() {
        const tip = this.$refs.TipsDiv
        tip.style.display = "none"
    }
    
  },
  watch: {
      username( newVal, oldVal) {
        
        //正则 手机号码验证
        const phoneConfirm = new RegExp("(^1[3,4,5,6,7,9,8][0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$)")
        //正则 邮箱验证
        const emailConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
        //验证邮箱不匹配
        if( !emailConfirm.test(newVal) ) {
            //验证邮箱不匹配 验证是否为手机号码
            this.confirmLogin = false
            if( !phoneConfirm.test(newVal) ){
                //邮箱和手机号码都不正确
                this.confirmLogin = false
            }else {
                //手机号码格式正确
                this.confirmLogin = true
            }

        }else {
        //邮箱格式正确
            this.confirmLogin = true
        }
        
    },
    password( newVal, oldVal ) {
        //正则 密码验证
        const passwordConfirm = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/
        if( !passwordConfirm.test(newVal)){
        //验证不匹配 密码格式错误
            this.confirmLogin = false
        }else{
        //密码格式正确 必须包含字母和数字 不少于8位数
            this.confirmLogin = true
        }
        
    },
  }
   
}
</script>
<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
}
// 解决 input自动提示补全 背景黄色
input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset !important;}
.login-form {
    z-index: 33;
    overflow: hidden;
    width: 350px;
    padding: 40px 0 0;
    background: #fff;
    box-shadow: 0 0 20px rgba(59,59,68,.25);
    border: 1px solid #e9e9ea;
    position: absolute;
    left: 25px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    border-bottom: none;
    font-size: 14px;
    .form-box {
        padding: 0 30px;
        
        .cancel {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 36px;
            cursor: pointer;
        }
        .form-title-top {
            font-size: 20px;
            color: rgb(25, 161, 134);
            text-align: center;
            margin-bottom: 5px;
        }
        .span-title {
            text-align: center;
            display: block;
            position: relative;
            margin-bottom: 30px;
        }
        .span-title:before {
            content: '';
            background: #e1e1e1;
            width: 35px;
            height: 2px;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            left: 36px;
        }
        .span-title:after {
            content: '';
            background: #e1e1e1;
            width: 35px;
            height: 2px;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            right: 36px;
        }
        .form-bd {
            .form-horizontal {
                
                .tipsDiv {
                    height: 46px;
                    width: 288px;
                    line-height: 46px;
                    position: absolute;
                    background-color: #c9302c;
                    border: none;
                    left: 30px;
                    top: 263px;
                    margin: 0;
                    padding: 0;
                    border-radius: 5px;
                    font-size: 18px;
                    display: none;
                    color: #fff;
                    cursor: pointer;
                }
                
                .form-group {
                    margin: 0 0 15px;
                    .rel {
                        position: relative;
                        .form-control {
                            border: 1px solid #e1e1e1;
                            box-shadow: none;
                            padding: 0 8px;
                            -webkit-border-radius: 6px;
                            -moz-border-radius: 6px;
                            border-radius: 6px;
                            height: 40px;
                            transform: none;
                        }
                        .abs-icon {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            margin-top: -10.5px;
                            img {
                                display: block;
                            }
                        }
                        
                    }
                    .btn-login {
                        width: 100%;
                        margin-top: 0;
                        font-size: 14px;
                    }
                    .btn-primary {
                        background-color: rgb(62, 175, 153);
                        border-color: rgb(62, 175, 153);
                        outline: 0;
                    }
                    .btn-lg, .btn-group-lg > .btn {
                        padding: 10px 16px;
                        font-size: 18px;
                        line-height: 1.33;
                        border-radius: 6px;
                    }
                    .rows-forget {
                        text-align: right;
                        padding-top: 10px;
                        font-size: 14px;
                        .pull-left {
                            float: left !important;
                            a {
                                color: rgb(58, 165, 144);
                                text-decoration: none;
                            }
                        }
                        a {
                                color: #1c2d3b;
                                text-decoration: none;
                        }
                    }
                    
                    .forger-pas {
                        color: #676a6c;
                    }
                }
                .form-group-second {
                    margin-bottom: 5px;
                }
            }
        }
    }
}






.slogon {
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    border-top: #f1f1f1 solid 2px;
    font-size: 14px;
    text-align: center;
    color: #666;
    background: #f7f7f7;
    margin-top: 20px;
    line-height: 40px;
}

</style>

