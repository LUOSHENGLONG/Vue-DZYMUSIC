<template>
    <div class="findPassword container">
        <div class="title">密码找回<i class="fas fa-angle-down" style="font-size: 24px;margin-left:20px;vertical-align: -2px;"></i></div>
        <div ref="logo">
            <img src="../../images/1788.png" alt="">
        </div>
        <div class="row" ref="row">
            <div class="findByProtect" ref="findByProtect" @click="findByProtect">
                <i class="fas fa-lock"></i>
                密保找回
            </div>
            <div class="findByEmail" ref="findByEmail"  @click="findEmail">
                <i class="fas fa-envelope"></i>
                邮箱找回
            </div>
            <div class="findByHelp" ref="findByHelp" @click="goHelp">
                <i class="fas fa-user-tie"></i>
                客服找回
            </div>
        </div>
        <!-- 通过密保找回 -->
        <div class="protect" ref="protect">
            <input maxlength="16" ref="accountInput" v-model="account1" type="text" placeholder="请输入需要找回密码的邮箱或手机号码">

            <select name="safe" id="1" ref="select"  v-model="couponSelected" @change="getCouponSelected">
                <option :value="item.id" v-for=" item in optionData" :key="item.id">{{ item.question }}</option>
            </select>
            <input ref="answer" maxlength="6" v-model="answer" type="text" placeholder="请输入密保问题答案">
            <input type="text" maxlength="16" ref="newPassword" v-model="newPassword" style="display: none;"  placeholder="请输入新的密码">
            <div class="tips" ref="tips">* 请按提示填写表单</div>
            <div class="mybtn">
                <button type="button" ref="verify" @click="findByEmail" class="btn btn-success" style="background-color: #4fc08d;font-size:16px">验证</button>
                <button type="button" ref="update" @click="updatePassword" class="btn btn-success" style="background-color: #4fc08d;font-size:16px;display:none;">修改密码</button>
            </div>
            <div class="back">
                <i @click="findByProtect" class="fas fa-arrow-left" style="font-size:  30px;cursor: pointer;"></i>
            </div>
        </div>
        <!-- 通过邮箱找回 -->
        <div class="email" ref="email">
            <input maxlength="32" ref="emailInput" v-model="account2" type="text" placeholder="请输入需要找回密码的邮箱">
            <div class="captcha">
                <input type="text" maxlength="6" ref="captcha" v-model="captcha" style="display: inline-block;"  placeholder="请输入验证码">
                <button class="btn btn-success" ref="captchaButton" style="display: inline-block;" @click="verifyEmail">发送验证码</button>
            </div>
            <input type="text" maxlength="16" ref="emailPassword" v-model="emailPassword" style="display: none;"  placeholder="请输入新的密码">
            <div class="tips" ref="emailTips">* 请按提示填写表单</div>
            <div class="mybtn">
                <button type="button" ref="verify2" @click="submitCaptcha" class="btn btn-success" style="background-color: #4fc08d;font-size:16px">验证</button>
                <button type="button" ref="emailUpdate" @click="updatePassword2" class="btn btn-success" style="background-color: #4fc08d;font-size:16px;display:none;">修改密码</button>
            </div>
            <div class="back">
                <i @click="findEmail" class="fas fa-arrow-left" style="font-size:  30px;cursor: pointer;"></i>
            </div>
        </div>
        <!-- 成功提示 -->
        <div class="success" ref="success">
            <i class="fas fa-check"></i>
            <div>密码已修改</div>
        </div>
        <!-- 失败提示 -->
        <div class="fail" ref="fail">
            <i class="fas fa-times"></i>
            <div>服务器错误</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import md5 from 'js-md5';
export default {
    data() {
        return {
            couponSelected: "",
            optionData: [],
            answer: "",
            account1: "",
            account2: "",
            select: "",
            newPassword: "",
            emailOrPhone: "",
            isProtect: false,
            isEmail: false,
            captcha: "",
            requestCapthcha: "",
            emailPassword: "",
            isShow: true
        }
    },
    mounted() {
        this.getQuestion()
    },
    methods: {
        updatePassword2() {
            const passwordConfirm = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$")
            // 判断是否为空
            if(this.emailPassword.trim() != "") {
                // 验证密码是否不低于8位且包含数字字母
                if( passwordConfirm.test(this.emailPassword) ) {
                    axios.post("http://localhost:3001/updatePassword",{emailOrPhone: "email",account: this.account2,password: this.emailPassword})
                    .then( result => {
                        console.log(result.data)
                        if( result.data.code != null) {
                            if( result.data.code === 1) {
                                console.log(result.data.code)
                                // 修改密码成功
                                $(this.$refs.success).css("display","block")
                                this.$refs.row.style.display = "none"
                                this.$refs.email.style.display = "none"
                                this.$refs.logo.style.display = "none"
                                window.scrollTo(0,0)
                                setTimeout(() => {
                                    this.$router.push({path: '/'})
                                }, 5000);
                            }
                            if( result.data.code === 0) {
                                // 修改密码失败
                                window.scrollTo(0,0)
                                this.$refs.row.style.display = "none"
                                this.$refs.email.style.display = "none"
                                this.$refs.logo.style.display = "none"
                                this.$refs.fail.style.dispaly = "block"
                                setTimeout(() => {
                                    this.$router.push({path: '/'})
                                }, 5000);
                            }
                        }
                    })
                }else {
                    // 通过验证则更新数据库
                    
                }
            }else {
                
            }
        },
        submitCaptcha() {
            if( this.captcha.trim() === "") {
                return
            }
            console.log(md5(md5(this.captcha)) === this.requestCapthcha)
            if(md5(md5(this.captcha)) === this.requestCapthcha) {
                // 验证通过
                this.$refs.emailTips.innerHTML = "验证通过,请输入新的密码,密码须不少于8位且须包含数字和字母"
                this.$refs.captcha.style.display = "none"
                this.$refs.captchaButton.style.display = "none"
                this.$refs.emailPassword.style.display = "block"
                this.$refs.verify2.style.display = "none"
                this.$refs.emailUpdate.style.display = "block"
            } else {
                this.$refs.emailTips.innerHTML = "验证码错误,请输入正确的验证码"
                this.$refs.emailTips.style.color = "#FF6A6A"
            }
        },
        verifyEmail() {
            if( this.account2.trim() === "") {
                return
            }
            //正则 邮箱验证
            const emailConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
            if( !emailConfirm.test(this.account2)) {
                // 验证失败
                this.$refs.emailTips.innerHTML = "邮箱格式错误"
                this.$refs.emailTips.style.color = "#FF6A6A"
                $(this.$refs.emailInput).focus()
                this.$refs.emailInput.style.borderColor = "#FF6A6A"
                setTimeout(() => {
                    this.$refs.emailTips.innerHTML = "* 请按提示填写表单"
                    this.$refs.emailTips.style.color = "#aaa"
                    this.$refs.emailInput.style.borderColor = "#aaa"
                }, 3000);
            }else {
                axios.post("http://localhost:3001/sendEmail",{email: this.account2})
                .then( result => {
                    console.log(result.data)
                    console.log(result.data.code === null)
                    if(result.data.code !=null) {
                         
                        if( result.data.code === 1) {
                            // 发送成功
                            this.$refs.emailTips.innerHTML = result.data.message
                            this.$refs.emailTips.style.color = "green"
                            $(this.$refs.emailInput).attr("disabled",true)
                            this.requestCapthcha = result.data.captcha
                            $(this.$refs.captchaButton).attr("disabled",true)
                            let a = 121
                            let interval = setInterval(() => {
                                $(this.$refs.captchaButton).text("请等待"+ --a + "秒后再点击")
                                if( a === 0 || a < 1) {
                                    window.clearInterval(interval)
                                    $(this.$refs.captchaButton).attr("disabled",false)
                                    $(this.$refs.captchaButton).text("发送验证码")
                                }
                            }, 1000);
                            
                        }
                         if( result.data.code === 0) {
                            // 发送成功
                            console.log(232)
                            this.$refs.emailTips.innerHTML = result.data.message
                            this.$refs.emailTips.style.color = "#FF6A6A"
                        } 
                    }
                })
            }
        },
        findEmail() {
            
            if( this.isEmail === false) {
                console.log(11111)
                this.$refs.findByHelp.style.display = "none"
                this.$refs.findByProtect.style.display = "none"
                this.$refs.findByEmail.style.top = "29.7%"
                this.$refs.email.style.display = "block"
                this.isEmail = true
            } else {
                console.log(11111)
                this.$refs.findByHelp.style.display = "block"
                this.$refs.findByProtect.style.display = "block"
                this.$refs.findByEmail.style.top = "51%"
                this.$refs.email.style.display = "none"
                this.isEmail = false
                
            }
        },
        findByProtect() {
            if( this.isProtect === false) {
                this.$refs.findByEmail.style.display = "none"
                this.$refs.findByHelp.style.display = "none"
                this.$refs.protect.style.display = "block"
                this.isProtect = true
            } else {
                this.$refs.findByEmail.style.display = "block"
                this.$refs.findByHelp.style.display = "block"
                this.$refs.protect.style.display = "none"
                this.isProtect = false
            }
        },
        updatePassword() {
            const passwordConfirm = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$")
            // 判断是否为空
            if(this.newPassword.trim() != "") {
                console.log(this.newPassword)
                // 验证密码是否不低于8位且包含数字 字母
                if( !passwordConfirm.test(this.newPassword) ) {
                    this.$refs.tips.innerHTML = "验证成功,请输入新的密码,密码须不少于8位且须包含数字和字母"
                    this.$refs.tips.style.color = "#FF6A6A"
                    $(this.$refs.newPassword).focus()
                    this.$refs.newPassword.style.borderColor = "#FF6A6A"
                    setTimeout(() => {
                        this.$refs.newPassword.style.borderColor = "#aaa"
                    }, 2000);
                    return
                }else {
                    // 通过验证则更新数据库
                    console.log(this.emailOrPhone)
                    axios.post("http://localhost:3001/updatePassword",
                        {emailOrPhone: this.emailOrPhone,account: this.account1,password: this.newPassword})
                    .then ( result => {
                        console.log(result)
                        if( result.data.code) {
                            if( result.data.code === 1) {
                                // 修改密码成功
                                this.$refs.row.style.display = "none"
                                this.$refs.protect.style.display = "none"
                                this.$refs.logo.style.display = "none"
                                this.$refs.success.style.display = "block"
                                window.scrollTo(0,0)
                                setTimeout(() => {
                                    this.$router.push({path: '/'})
                                }, 5000);
                            }

                            if( result.data.code === 0 ) {
                                // 修改密码成功
                                this.$refs.row.style.display = "none"
                                this.$refs.protect.style.display = "none"
                                this.$refs.logo.style.display = "none"
                                this.$refs.fail.style.display = "block"
                                window.scrollTo(0,0)
                                setTimeout(() => {
                                    this.$router.push({path: '/'})
                                }, 5000);
                            }
                        }
                    })
                }
            }else {
                this.$refs.tips.innerHTML = "验证成功,请输入新的密码，密码须不少于8位且须包含数字和字母"
                this.$refs.tips.style.color = "#FF6A6A"
                $(this.$refs.newPassword).focus()
                this.$refs.newPassword.style.borderColor = "#FF6A6A"
                setTimeout(() => {
                    this.$refs.newPassword.style.borderColor = "#aaa"
                }, 2000);
            }
        },
        goHelp() {
            const {href} = this.$router.resolve({path: '/help'})
            window.open(href, '_blank')
        },
        findByEmail() {
            this.$refs.email.style.display = "none"
            let account = this.account1
            console.log(account)
            //正则 手机验证
            const phoneConfirm = new RegExp("(^1[3,4,5,6,7,9,8][0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$)")
            //正则 邮箱验证
            const emailConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/

            // 验证账户
            if (phoneConfirm.test(account)) {
                this.emailOrPhone = "phone"
            } else if ( emailConfirm.test(account) ){
                this.emailOrPhone = "email"
            }else {
                this.emailOrPhone = false 
                this.$refs.tips.innerHTML = "验证失败"
                this.$refs.tips.style.color = "#FF6A6A"
                setTimeout(() => {
                    this.$refs.tips.innerHTML = "* 请按提示填写表单"
                    this.$refs.tips.style.color = "#555"
                }, 3000);
                return
            }

            // 验证选择框
            if( this.select === "" || this.answer === "") {
                this.$refs.tips.innerHTML = "验证失败"
                this.$refs.tips.style.color = "#FF6A6A"
                setTimeout(() => {
                    this.$refs.tips.innerHTML = "* 请按提示填写表单"
                    this.$refs.tips.style.color = "#555"
                }, 3000);
                return
            }

            axios.post("http://localhost:3001/findPasswordByEmail",{emailOrPhone: this.emailOrPhone,account: this.account1,question: this.select,answer: this.answer})    
            .then( result => {
                console.log(result.data)
                if( result.data.code === 1){
                    // 验证成功
                    $(this.$refs.accountInput).attr("disabled",true)
                    this.$refs.select.style.display = "none"
                    this.$refs.answer.style.display = "none"
                    this.$refs.newPassword.style.display = "block"
                    this.$refs.verify.style.display = "none"
                    this.$refs.update.style.display = "block"
                    this.$refs.tips.innerHTML = "验证成功,请输入新的密码，密码须不少于8位且须包含数字和字母"
                    this.$refs.tips.style.color = "#47b39d"
                    console.log(111111)
                } else {
                    // 验证失败
                    this.$refs.tips.innerHTML = "密保验证错误"
                    this.$refs.tips.style.color = "#FF6A6A"
                    setTimeout(() => {
                        this.$refs.tips.innerHTML = "* 请按提示填写表单"
                        this.$refs.tips.style.color = "#555"
                    }, 3000);
                }
            })        
        },
        getQuestion() {
            axios.post("http://localhost:3001/getQuestion")
            .then( result => {
                console.log(result.data)
                this.optionData = result.data
                this.couponSelected = this.optionData[0].id;
            })
        },
        getCouponSelected() {
            let index = 0;
            let option = Array.prototype.slice.call($("option"))
            option.forEach( item => {
                if( item.selected === true) {
                    let value = $(item).val()
                    this.select = value
                    if(parseInt(this.select) === 0) {
                        this.select = ""
                    }
                    console.log(this.select)
                }
            })
            
        },
    }
}
</script>
<style lang="scss" scoped>
.findPassword {
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    margin-top: 90px;
    padding: 0;
    text-align: center;
    position: relative;
    height: 800px;
    overflow: hidden;
    border-radius: 8px;
    border-top: 6px solid #34495e9f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .title {
        background-color: #34495e;
        font-size: 20px;
        color: #fff;
        padding: 14px 0;
    }
    .row {
        
        box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
        .findByProtect,.findByEmail,.findByHelp {
            width: 40%;
            height: 125px;
            line-height: 125px;
            color: #555;
            border-radius: 10px;
            background-color: #fbfbfb;
            border: 2px solid #eee;
            margin: 20px 0;
            position: absolute;
            left: 30%;
            font-size: 20px;
            cursor: pointer;
        }
        .findByEmail {
            top : 51%;
        }
        .findByHelp {
            top: 70%;
        }
    }
}
.protect, .email {
    display: none;
    position: absolute;
    top: 55%;
    width: 40%;
    height: 125px;
    left: 30%;
    select,input {
        display: block;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        margin-bottom: 20px;
        border-width: 1px;
        padding-left: 10%;
        padding-right: 10%;
    }
    input {
        border: 0;
        border: 1px solid #aaa;
    }
}

.email {
    display: block;
}

.fas {
    font-size: 60px;
    vertical-align: -18px;
    margin-right: 40px;
}

select:focus, select:active, input:focus, input:active {
    outline: 0;
}
//去除点击button outline轮廓
button, 
button:focus, 
button.active {
  outline: none !important;
}
.mybtn {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  button,.btn-success {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: #47b39d !important;
    border-color:  #47b39d !important;
  }
}

.fa-check,.fa-times {
    font-size: 360px;
    color: #47b39d;
    margin: 50px 0;
}
.success,.fail {
    display: none;
    div {
        font-size: 24px;
        color: #47b39d;
    }
}
.email {
    display: none;;
}
.captcha {
    display: flex;
    flex: 2;
    input {
        flex: 1;
    }
    button {
        flex: 1;
        margin-left: 20px;
        height: 40px;
    }
}
.btn-success,.btn-success:focus,.btn-success:active,.btn-success:hover {
    background-color: #47b39d;
    border-color: #47b39d;
    border-radius: 10px;
}
</style>
