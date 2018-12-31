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
                            <input ref="email" type="text" class="form-control" autocomplete="off" maxlength="32" name="email" id="email" placeholder="请输入注册邮箱 / 手机" v-model="email">
                            <b class="abs-icon first-abs-icon"><img src="../../images/people-icon.png" alt=""></b>
                            <span ref="emailErrorTips" class="glyphicon glyphicon-remove error-tips email-error-tips" @mouseout="hiddenEmailErrorDiv()" @mouseover="showEmailErrorDiv()"></span>
                            <span ref="emailSuccessTips" class="glyphicon glyphicon-ok success-tips email-success-tips"></span>
                            <div ref="emailTipsDiv" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>

                        </div>
                    </div>
                    
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" ref="password" class="form-control" id="password" name="password" placeholder="请输入密码" maxlength="16" v-model="password">
                            <b class="abs-icon"><img src="../../images/password-icon.png" alt=""></b>
                            <span ref="passwordErrorTips" class="glyphicon glyphicon-remove error-tips password-error-tips" @mouseout="hiddenPasswordErrorDiv()" @mouseover="showPasswordErrorDiv()"></span>
                            <span ref="passwordSuccessTips" class="glyphicon glyphicon-ok success-tips password-success-tips"></span>
                            <div ref="passwordTipsDiv" class="tipsDiv alert alert-danger alert-dismissible fade in">{{ message }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="text" class="form-control" id="CAPTCHA" name="passwd" placeholder="请输入验证码" maxlength="16" v-model="CAPTCHA" ref="CAPTCHA">
                            <button ref="btnCAPTCHA" type="button" class="btn-CAPTCHA btn btn-default" @click="sendCode($event)">发送验证码</button>
                            <span class="glyphicon glyphicon-remove error-tips CAPTCHA-error-tips"></span>
                            <span class="glyphicon glyphicon-ok success-tips CAPTCHA-success-tips"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="control-col">
                            <button ref="summit()" class="btn btn-success btn-lg btn-login" type="button" name="bnt" @click="summit()">注&nbsp;&nbsp;&nbsp;册</button>
                            <div ref="errorTip" @click="hiddenErrorTip" class="errorTip">邮箱或手机号码已注册 点击返回</div>
                            <div class="rows-forget"><span class="pull-left">已注册？<a href="#" @click="goLogin($event)" class="zhuce-href">立即登录</a></span><a href="/reg/forget-pwd" target="_blank" class="forger-pas">忘记密码</a></div>
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
import axios from 'axios'

export default {
    
  data() {
    return {
        email: "",
        password: "",
        CAPTCHA: "",
        message: "",
        isRegister: false,
        confirmEmailOrPhone: false,
        confirmPassword: false,
        confirmCAPTCHA: false,
        CAPTCHANum1: 0,
        CAPTCHANum2: 0,
    }
  },
  mounted() {
    
  },
  methods: {
    cancel() {
      this.$emit("cancel")
    },
    goLogin() {
        if(arguments.length > 0){
            arguments[0].preventDefault();
        }
        this.$emit("login")
    },
    sendCode(e) {
        e.preventDefault();
        if(this.confirmEmailOrPhone === false) {
            const email = this.$refs.email
            this.message = "请输入正确的邮箱地址或手机号码"
            $(email).focus();
            this.showEmailErrorDiv();
            window.setTimeout( () => {
                this.hiddenEmailErrorDiv()
            },3000)
            return
        }

        if(this.confirmPassword === false) {
            $(this.$refs.password).focus();
            this.showPasswordErrorDiv();
            this.message = "密码必须包含字母和数字且不低于八位数"
            window.setTimeout( () => {
                this.hiddenPasswordErrorDiv()
            },3000)
            
            return
        }
        console.log("可以发送验证码")
        
        this.CAPTCHANum1 = Math.floor(Math.random()*9)+1
        this.CAPTCHANum2 = Math.floor(Math.random()*9)+1
        const bnt = this.$refs.btnCAPTCHA
        $(bnt).text(this.CAPTCHANum1 + ` + ` + this.CAPTCHANum2 +` = ?`)
        
        //发送验证码后禁用button 120秒后才能再次发送
        
        //$(bnt).attr("disabled",true)
        // let i = 120

        // const timeOut = window.setInterval(() => {
        //     $(bnt).text(`已发送 `+ i-- +`秒`)
        // },1000)

        // window.setTimeout( () => {
        //     window.clearInterval(timeOut)
        //     $(bnt).attr("disabled",false)
        //     $(bnt).text(`发送验证码`)

        // },121000)

    },
    //提交注册
    summit() {
        if(this.confirmEmailOrPhone === false) {
            const email = this.$refs.email
            $(email).focus();
            this.showEmailErrorDiv();
            window.setTimeout( () => {
                this.hiddenEmailErrorDiv()
            },3000)
            return
        }

        if(this.confirmPassword === false) {
            $(this.$refs.password).focus();
            this.showPasswordErrorDiv();
            
            window.setTimeout( () => {
                this.hiddenPasswordErrorDiv()
            },3000)
            
            return
        }

        if( parseInt(this.CAPTCHA ) !== (this.CAPTCHANum1 + this.CAPTCHANum2)){
            $(this.$refs.CAPTCHA).focus();
            this.$refs.CAPTCHA.style.border = "1px solid red"
            console.log(false)
            return 
        }
        this.$refs.CAPTCHA.style.border = "1px solid #eee"
        axios.post("http://localhost:3001/register",{username:this.email,password:this.password})
        .then(result => {
            console.log(result)
            // 0 代表 邮箱 或 手机 已注册
            if( result.data.status === 0 ){
                this.$refs.errorTip.style.background = "#c9302c"
                $(this.$refs.errorTip).text(result.data.message)
                this.$refs.errorTip.style.display = "block"
                $(this.$refs.email).focus();
                this.$refs.email.style.border = "1px solid #c9302c"
                setTimeout(() => {
                    this.$refs.errorTip.style.display = "none"
                }, 2000);
            // 注册成功    
            }else {
                console.log("注册成功")
                this.$refs.errorTip.style.background = "#337ab7"
                this.$refs.email.style.border = "1px solid #eee"
                $(this.$refs.errorTip).text('注册成功 正在跳转到登录页')
                this.$refs.errorTip.style.display = "block"
                setTimeout(() => {
                    this.goLogin();
                }, 1500);
            }
            $(this.$refs.btnCAPTCHA).text("发送验证码")
            this.CAPTCHANum1 = Math.floor(Math.random()*9)+1
            this.CAPTCHANum2 = Math.floor(Math.random()*9)+1 
        })
        .catch( err => {
            console.log(err)
        })
    },
    hiddenErrorTip() {
        this.$refs.errorTip.style.display = "none"
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
        const phoneConfirm = new RegExp("(^1[3,4,5,6,7,9,8][0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$)")
        //正则 手机号码验证
        const emailConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
        //验证邮箱不匹配
        if( !emailConfirm.test(newVal) ) {
            //验证邮箱不匹配 验证是否为手机号码
            this.confirmEmailOrPhone = false
            this.isRegister = false
            if( !phoneConfirm.test(newVal) ){
                //邮箱和手机号码都不正确
                this.$refs.emailSuccessTips.style.visibility = "hidden"
                this.$refs.emailErrorTips.style.visibility = "visible"
                this.message = "邮箱或手机号码格式错误"
                this.confirmEmailOrPhone = false
                this.isRegister = false
            }else {
                //手机号码格式正确
                this.$refs.emailSuccessTips.style.visibility = "visible"
                this.$refs.emailErrorTips.style.visibility = "hidden"
                this.message = ""
                //设置是否可以注册提交
                this.isRegister = true
                this.confirmEmailOrPhone = true
            }

        }else {
        //邮箱格式正确
            this.$refs.emailErrorTips.style.visibility = "hidden"
            this.$refs.emailSuccessTips.style.visibility = "visible"
            this.message = ""
            //设置是否可以注册提交
            this.isRegister = true
            this.confirmEmailOrPhone = true
        }
        //
        if(newVal === "" || newVal.length === 0) {
            this.$refs.emailErrorTips.style.visibility = "hidden"
            this.$refs.emailSuccessTips.style.visibility = "hidden"
            this.isRegister = false
            this.confirmEmailOrPhone = false
            this.message = "表单未完整填写"
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
            this.confirmPassword = false    
        }else{
        //密码格式正确 必须包含字母和数字 不少于8位数
            this.$refs.passwordErrorTips.style.visibility = "hidden"
            this.$refs.passwordSuccessTips.style.visibility = "visible"
            this.message = ""
            //设置是否可以注册提交
            this.isRegister = true
            this.confirmPassword = true    
        }
        //
        if(newVal === "" || newVal.length === 0) {
            this.$refs.passwordErrorTips.style.visibility = "hidden"
            this.$refs.passwordSuccessTips.style.visibility = "hidden"
            this.message = "表单未完整填写"
            this.isRegister = false
            this.confirmPassword = false  
        }
    },
    isRegister(newVal, oldVal) {
        if(newVal === true) {
        }
    },
    confirmPassword(newVal, oldVal) {
        if ( newVal === true ) {
                this.hiddenPasswordErrorDiv()
        }
    },
    confirmEmailOrPhone(newVal, oldVal) {
        if (newVal === true ) {
            this.hiddenEmailErrorDiv()
        }
    }
    
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



.errorTip {
    width: 278px;
    height: 46px;
    position: absolute;
    left: 60px;
    bottom: 92px;
    background-color: #c9302c;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
    line-height: 46px;
    font-size: 18px;
    color: #fff;
    display: none;
    cursor: pointer;
}

.slogon {
    border-top: #f1f1f1 solid 2px;
    font-size: 14px;
    text-align: center;
    color: #b1b1b1;
    background: #f7f7f7;
    margin-top: 20px;
    line-height: 40px;
}

</style>

