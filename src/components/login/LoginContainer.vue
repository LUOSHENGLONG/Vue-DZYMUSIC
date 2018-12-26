<template>
  <div ref="login-container" class="-container container">
    <div class="login-form">
        <div class="form-box">
            <span class="cancel glyphicon glyphicon-remove" @click="cancel()"></span>
            <div class="form-title-top">登录</div>
            <span class="span-title">使用邮箱/手机登录</span>
            <div class="form-bd">
                <form id="fm" action="/auth/login" method="post" class="form-horizontal" enctype="application/x-www-form-urlencoded">
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="username">邮箱 / 手机</label> -->
                        <div class="control-col rel">
                            <input type="text" class="form-control" maxlength="32" v-model="username" name="username" id="username" placeholder="请输入邮箱 / 手机" value="">
                            <b class="abs-icon"><img src="../../images/people-icon.png" alt=""></b>
                        </div>
                    </div>
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" class="form-control" id="password" v-model="password" name="passwd" placeholder="请输入账号密码" maxlength="16">
                            <b class="abs-icon"><img src="../../images/password-icon.png" alt=""></b>
                        </div>
                    </div>

                    <transition name="fade">
                        <div ref="TipsDiv" @click="tips" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>
                    </transition>

                    <div class="form-group">
                        <div class="control-col">
                            <button class="btn btn-primary btn-lg btn-login" type="button" name="bnt" @click="post()">登&nbsp;&nbsp;&nbsp;录</button>
                            
                            <div class="rows-forget"><span class="pull-left">没有帐号？<a href="#" @click="goSignup($event)" class="zhuce-href">立即注册</a></span><a href="/reg/forget-pwd" target="_blank" class="forger-pas">忘记密码</a></div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div class="slogon">开发者零门槛加入&nbsp;&nbsp;快速集到现有产品</div>
        </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
        message: "账号或密码错误,点击返回登录",
        confirmLogin: false,
        loginTimes: 0 ,
        username: '',
        password: ''
    }
  },
  mounted() {
    
  },
  methods: {
    cancel() {
      this.$emit("cancel")
    },
    goSignup(e) {
        e.preventDefault();
        this.$emit("signup")
    },
    post() {
        console.log(this.username)
        console.log(this.password)
        axios.post("http://localhost:3001/login",{username:this.username,password:this.password})
        .then(result => {
            console.log(result)
            if( result.data.staus === 1 ) {

            }
        })
        .catch( err => {
            console.log(err)
        })


        // if( this.confirmLogin === false ) {
        //     this.loginTimes++
            
        //     const tip = this.$refs.TipsDiv
        //     if(this.loginTimes > 3) {
        //         $(tip).text("连续三次登入错误,请15分钟后再试")
        //     }
        //     tip.style.display = "block"
        //     window.setTimeout(()=> {
        //         tip.style.display = "none"
        //     },3000)
        // }
    },
    tips() {
        const tip = this.$refs.TipsDiv
        tip.style.display = "none"
    }
    
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
            color: #3668b4;
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
                    top: 233px;
                    margin: 0;
                    padding: 0;
                    border-radius: 5px;
                    font-size: 16px;
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
                        background-color: #337ab7;
                        border-color: #337ab7;
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
                                color: #428bca;
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
                
            }
        }
    }
}







.slogon {
    border-top: #f1f1f1 solid 2px;
    font-size: 12px;
    text-align: center;
    color: #b8b8b8;
    background: #f7f7f7;
    margin-top: 20px;
    line-height: 40px;
}

</style>

