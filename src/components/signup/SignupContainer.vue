<template>
  <div ref="loginContainer" class="login-container container">
    <div ref="loginForm" class="login-form">
        <div class="form-box">
            <span class="cancel glyphicon glyphicon-remove" @click="cancel()"></span>
            <div class="form-title-top">注册</div>
            <span class="span-title">使用邮箱/手机注册</span>
            <div class="form-bd">
                <form id="fm" action="/auth/login" method="post" class="form-horizontal" enctype="application/x-www-form-urlencoded">
                    <div class="form-group first-group">
                        <!-- <label class="col-xs-12 control-label" for="username">邮箱 / 手机</label> -->
                        <div class="control-col rel">
                            <input type="text" class="form-control" autocomplete="off" maxlength="32" name="email" id="email" placeholder="请输入注册邮箱 / 手机" v-model="email">
                            <b class="abs-icon first-abs-icon"><img src="../../images/people-icon.png" alt=""></b>
                            <span ref="emailErrorTips" class="glyphicon glyphicon-remove error-tips email-error-tips" @mouseout="hiddenEmailErrorDiv()" @mouseover="showEmailErrorDiv()"></span>
                            <span ref="emailSuccessTips" class="glyphicon glyphicon-ok success-tips email-success-tips"></span>
                            <div ref="emailTipsDiv" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>

                        </div>
                    </div>
                    
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码" maxlength="16" v-model="password">
                            <b class="abs-icon"><img src="../../images/password-icon.png" alt=""></b>
                            <span ref="passwordErrorTips" class="glyphicon glyphicon-remove error-tips password-error-tips" @mouseout="hiddenPasswordErrorDiv()" @mouseover="showPasswordErrorDiv()"></span>
                            <span ref="passwordSuccessTips" class="glyphicon glyphicon-ok success-tips password-success-tips"></span>
                            <div ref="passwordTipsDiv" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" class="form-control" id="CAPTCHA" name="passwd" placeholder="请输入验证码" maxlength="16" v-model="CAPTCHA">
                            <button type="button" class="btn-CAPTCHA btn btn-default disabled" @click="sendCode($event)">发送验证码</button>
                            <span class="glyphicon glyphicon-remove error-tips CAPTCHA-error-tips"></span>
                            <span class="glyphicon glyphicon-ok success-tips CAPTCHA-success-tips"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="control-col">
                            <button ref="summit" class="btn btn-success btn-lg btn-login" type="button" name="bnt" @click="summit()">注&nbsp;&nbsp;&nbsp;册</button>
                            <div class="rows-forget"><span class="pull-left">已注册？<a href="#" @click="goLogin($event)" class="zhuce-href">立即登录</a></span><a href="/reg/forget-pwd" target="_blank" class="forger-pas">忘记密码</a></div>
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

export default {
  data() {
    return {
        email: "",
        password: "",
        CAPTCHA: "",
        message: "",
        isRegister: false
    }
  },
  mounted() {
    
  },
  methods: {
    cancel() {
      this.$emit("cancel")
    },
    goLogin(e) {
        e.preventDefault();
        this.$emit("login")
    },
    sendCode(e) {
        e.preventDefault();
        console.log('124')
    },
    summit() {
        if(this.isRegister === false) {
            console.log(this.$refs.errorAnimate)
        }
    },
    showEmailErrorDiv() {
        const tips = this.$refs.emailTipsDiv
        if ( tips.textContent.length > 0){
            tips.style.visibility = "visible"
        }
    },
    hiddenEmailErrorDiv() {
        this.$refs.emailTipsDiv.style.visibility = "hidden"
    },
    showPasswordErrorDiv() {
        const tips = this.$refs.passwordTipsDiv
        if ( tips.textContent.length > 0){
            tips.style.visibility = "visible"
        }
    },
    hiddenPasswordErrorDiv() {
        this.$refs.passwordTipsDiv.style.visibility = "hidden"
    },
    errorAnimate() {
        this.$refs.loginContainer
    }
  },
  watch: {
    email( newVal, oldVal) {
        
        //正则 邮箱验证
        const emailConfirm = new RegExp("(^1[3,4,5,6,7,9,8][0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$)")
        //正则 手机号码验证
        const phoneConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
        //验证邮箱不匹配
        if( !emailConfirm.test(newVal) ) {
            //验证邮箱不匹配 验证是否为手机号码
            if( !phoneConfirm.test(newVal) ){
                //邮箱和手机号码都不正确
                this.$refs.emailSuccessTips.style.visibility = "hidden"
                this.$refs.emailErrorTips.style.visibility = "visible"
                this.message = "邮箱或手机号码格式错误"
            }else {
                //手机号码格式正确
                this.$refs.emailSuccessTips.style.visibility = "visible"
                this.$refs.emailErrorTips.style.visibility = "hidden"
                this.message = ""
                //设置是否可以注册提交
                this.isRegister = true
            }

        }else {
        //手机号码格式正确
            this.$refs.emailErrorTips.style.visibility = "hidden"
            this.$refs.emailSuccessTips.style.visibility = "visible"
            this.message = ""
            //设置是否可以注册提交
            this.isRegister = true
        }
        //
        if(newVal === "" || newVal.length === 0) {
        this.$refs.emailErrorTips.style.visibility = "hidden"
        this.$refs.emailSuccessTips.style.visibility = "hidden"
        }
    },
    password( newVal, oldVal ) {
        //正则 密码验证
        const passwordConfirm = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/
        if( !passwordConfirm.test(newVal)){
        //验证不匹配 密码格式错误
            this.$refs.passwordSuccessTips.style.visibility = "hidden"
            this.$refs.passwordErrorTips.style.visibility = "visible"
            this.message = "密码必须包含字母和数字且不低于八位数"
            //设置是否可以注册提交
            this.isRegister = false    
        }else{
        //密码格式正确 必须包含字母和数字 不少于8位数
            this.$refs.passwordErrorTips.style.visibility = "hidden"
            this.$refs.passwordSuccessTips.style.visibility = "visible"
            this.message = ""
            //设置是否可以注册提交
            this.isRegister = true
        }
        //
        if(newVal === "" || newVal.length === 0) {
        this.$refs.emailErrorTips.style.visibility = "hidden"
        this.$refs.emailSuccessTips.style.visibility = "hidden"
        }
    },
    
  }
   
}
</script>
<style lang="scss" scoped>

.login-form {
    z-index: 33;
    overflow: hidden;
    width: 400px;
    padding: 40px 0 0;
    background: #fff;
    box-shadow: 0 0 20px rgba(59,59,68,.25);
    border: 1px solid #e9e9ea;
    position: absolute;
    left: 0;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    border-bottom: none;
    font-size: 14px;
    .form-box {
        padding: 0 60px;
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
            margin-bottom: 10px;
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
                    margin-bottom: 10px;
                    text-align: center;
                    position: absolute;
                    left: 0px;
                    bottom: -40px;
                    opacity: 0.8;
                    visibility: hidden;
                    width: 278px;
                    z-index: 1;
                }
                .form-group {
                    margin: 0 0 15px;
                    .rel {
                        position: relative;
                        #CAPTCHA {
                            max-width: 150px;
                        }
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
                        .error-tips {
                            position: absolute;
                            right: -30px;
                            top: 10px;
                            font-size: 18px;
                            color: #ef5b54;
                            visibility: hidden;
                        }
                        .success-tips {
                            position: absolute;
                            right: -30px;
                            top: 10px;
                            font-size: 18px;
                            color: #5cb85c;
                            visibility: hidden;
                        }
                        
                        .alert {
                            padding: 8px;
                            margin-bottom: 0;
                        }
                        
                    }
                    .btn:focus {
                        outline: none;
                    }
                    .btn-login {
                        width: 100%;
                        font-size: 14px;
                    }
                    .btn-primary {
                        background-color: #ef5b54;
                        border-color: #ef5b54;
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
                    .btn-CAPTCHA {
                        display: inline-block;
                        width: 120px;
                        height: 40px;
                        position: absolute;
                        right: 0;
                        top: 0;
                        border-color: #e9e9ea;
                    }
                    .btn-CAPTCHA:focus {
                        outline: none;
                    }
                    .btn-default.focus, .btn-default:focus, .btn-default:hover {
                        color: #333;
                        background-color: #fff;
                        border-color: #e9e9ea;
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

