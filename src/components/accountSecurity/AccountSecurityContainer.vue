<template>
    <div class="accountSecurity" ref="accountSecurity">
        <div class="account" v-if="!isSetting">
            设置密保
        </div>
        <div class="row" v-if="!isSetting">
            <div class="title">密保问题&nbsp;&nbsp;&nbsp;</div>
            <select name="safe" id="1"  v-model="couponSelected" @change="getCouponSelected">
                <option :value="item.id" v-for=" item in optionData" :key="item.id">{{ item.question }}</option>
            </select>
            <input ref="answer" maxlength="6" v-model="answer" type="text" placeholder="请输入密保问题答案">
            <div class="mybtn" v-if="!isSetting"  v-show="!isUpdate">
                <button type="button" @click="savePerInfo" class="btn btn-success" style="background-color: #4fc08d;font-size:16px">保存</button>
            </div>
        </div>
        
        <!-- 已设置密保 -->
        <div class="protect" v-if="isSetting" ref="protect">
            <i class="fas fa-award"></i>
            <div class="alreadySetting">已设置密保</div>
            <div class="mybtn" v-if="isSetting">
                <button type="button" @click="update" class="btn btn-success" style="background-color: #4fc08d;font-size:16px">修改</button>
            </div>
        </div>
        
        
        <div class="verifyRow"  v-if="isVerify">
            <div class="title">密保问题&nbsp;&nbsp;&nbsp;</div>
            <select name="safe" id="1"  v-model="couponSelected" @change="getCouponSelected">
                <option :value="item.id" v-for=" item in optionData" :key="item.id">{{ item.question }}</option>
                
            </select>
            <input ref="answer" maxlength="6" v-model="answer" type="text" placeholder="请输入密保问题答案">
            <button type="button" @click="verify" class="verify btn btn-success" style="">验证</button>
            <div class="verifyTips" ref="verifyTips">
                * 请选择你所设置的密保问题并填写答案,通过验证后修改。
            </div>

        </div>

        <div class="account" ref="account" v-if="isUpdate">
            修改密保
        </div>
        <div class="update" v-if="isUpdate">
            <div class="title">密保问题&nbsp;&nbsp;&nbsp;</div>
            <select name="safe" id="1"  v-model="couponSelected" @change="getCouponSelected">
                <option :value="item.id" v-for=" item in optionData" :key="item.id">{{ item.question }}</option>
            </select>
            <input ref="answer" maxlength="6" v-model="answer" type="text" placeholder="请输入密保问题答案">
            <div class="mybtn">
                <button type="button" @click="saveUpdata" class="btn btn-success" style="background-color: #4fc08d;font-size:16px">保存修改</button>
            </div>
        </div>
        
        <div class="protect" v-if="success">
            <i class="fas fa-check"></i>
            <div class="alreadySetting" style="color: #47b39d">已更新密保</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            answer: "",
            optionData:[],
            couponSelected: "",
            select: "",
            userId: '',
            isSetting: false,
            isVerify: false ,
            isUpdate: false,
            success: false
        }
    },
    beforeUpdate() {
        
    },
    mounted() {
        this.getProtect()
        this.getQuestion()
       
        
    },
    methods: {
        saveUpdata() {
            // 判断是否登录
            if( sessionStorage.getItem("user")) {
                this.userId = JSON.parse(sessionStorage.getItem("user")).id
            }else {
                this.$router.push({path: '/'})
            }
            // 如果答案不为空 
            if( this.answer.trim() != "" && this.select != ""){
                axios.post("http://localhost:3001/updataProtect",{question: this.select,answer: this.answer,userId: this.userId})
                .then( result => {
                    if( result.data.count ) {
                        if(result.data.count > 0) {
                            // 修改成功
                            this.success = true
                            this.isUpdate = false
                        } else {
                            // 修改失败
                            
                        }
                    }
                })
            }
        },
        update() {
            this.isVerify = true
        },
        verify() {
            // 判断是否登录
            if( sessionStorage.getItem("user")) {
                this.userId = JSON.parse(sessionStorage.getItem("user")).id
            }else {
                this.$router.push({path: '/'})
            }
            // 如果答案不为空 
            if( this.answer.trim() != "" && this.select != ""){
                axios.post("http://localhost:3001/verifyProtect",{question: this.select,answer: this.answer,userId: this.userId})
                .then( result => {
                    if( result.data.count.count === 0) {
                        // 验证失败
                        this.$refs.verifyTips.style.color = "#FF6A6A"
                        this.$refs.verifyTips.innerText  = "验证失败"
                        setTimeout(() => {
                            this.$refs.verifyTips.style.color = "#555"
                        this.$refs.verifyTips.innerText  = "* 请选择你所设置的密保问题并填写答案,通过验证后修改。"
                        },2000)
                    } else {
                        this.$refs.verifyTips.style.color = "#47b39d"
                        this.$refs.verifyTips.innerText  = "验证成功"
                        setTimeout(() => {
                            this.couponSelected = this.optionData[0].id;
                            this.$refs.protect.style.display = "none"
                            $(this.$refs.accountSecurity).css("box-shadow","0 6px 23px rgba(0, 0, 0, 0.094)")
                            this.select = ""
                            this.answer = ""
                            this.isUpdate = true
                            this.isVerify = false
                            window.scrollTo(0,0)
                        }, 500);
                    }
                })
            }
        },
        getProtect() {
            // 判断是否登录
            if( sessionStorage.getItem("user")) {
                this.userId = JSON.parse(sessionStorage.getItem("user")).id
            }else {
                this.$router.push({path: '/'})
            }
            axios.post("http://localhost:3001/getProtect",{userId: this.userId})
            .then( result => {
                if( result.data.count.count > 0) {
                    this.isSetting = true
                } else {
                    this.isSetting = false
                }
            })
        },
        savePerInfo() {
            // 判断是否登录
            if( sessionStorage.getItem("user")) {
                this.userId = JSON.parse(sessionStorage.getItem("user")).id
            }else {
                this.$router.push({path: '/'})
            }
            // 如果答案不为空 
            if( this.answer.trim() != "" && this.select != ""){
                axios.post("http://localhost:3001/settingProtect",{question: this.select,answer: this.answer,userId: this.userId})
                .then( result => {
                    if( result.data.code) {
                        if(result.data.code === 1) {
                            this.isSetting = true
                            this.couponSelected = ""
                            this.answer = ""
                        } else {
                            this.isSetting = false
                            this.couponSelected = ""
                            this.answer = ""
                        }
                    }
                })
            }
        },
        getCouponSelected() {
            let index = 0;
            let option = Array.prototype.slice.call($("option"))
            option.forEach( item => {
                if( item.selected === true) {
                    let value = $(item).val()
                    this.select = value
                }
            })
            
        },
        getQuestion() {
            axios.post("http://localhost:3001/getQuestion")
            .then( result => {
                this.optionData = result.data
                this.couponSelected = this.optionData[0].id;
            })
        },
        getData1() {
            return this.optionData.splice(0,2)
        }
    },
    
}
</script>
<style lang="scss" scoped>
.shadow {
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
}
.accountSecurity {
    padding: 0;
    margin-top: 42px;
    margin-bottom: 50px;
    text-align: center;
    // box-shadow: 0 6px 10px rgba(0, 0, 0, 0.094);
    border-width: 4px;
    border-radius: 8px;
    overflow: hidden;
    min-height: 250px;
    .account {
        font-size: 24px;
        background-color: #fbfbfb;
        color: #555;
        padding: 10px 0 ;
        margin-bottom: 30px;
    }
    .row, .verifyRow, .update {
        text-align: center;
        height: 60px;;
        .title {
            color: #444;
            font-size: 18px;
            margin-bottom: 6px;
            display: inline-block;
        }
        select {
            width: 300px;
            height: 40px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 4px;
            color: #444;
            font-size: 16px;
        }
        input {
            width: 300px;
            height: 40px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 4px;
            color: #444;
            font-size: 16px;
            border: 1px solid #999;;
            margin: 0;
            vertical-align: 1.5px;
        }
        
    }
    .verifyRow {
        height: 100px;;
    }
    .update {
        height: 150px;
    }
}

ul, li {
    list-style: none;
    padding: 0;
}

.clearfix {
  overflow: auto;
  display: block;
}
select:focus, select:active, input:focus, input:active {
    outline: 0;
}

.mybtn {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  button {
    width: 150px;
    height: 40px;
    border-radius: 40px;
    background-color: #47b39d !important;
    border-color:  #47b39d !important;
  }
}

//去除点击button outline轮廓
button, 
button:focus, 
button.active {
  outline: none !important;
}

.protect {
    .fa-award,.fa-check {
        font-size: 360px;
        color: #47b39d;
        margin: 40px 0;
    }
    .alreadySetting {
        font-size: 20px;
        color: #555;
        margin-bottom: 40px;
    }
}

.verify,.verify:focus,.verify:active {
    height: 40px;
    width: 80px;
    vertical-align: 1.5px;
    margin-left: 10px;
    background-color: #47b39d;
    border-color: #47b39d;
    border-radius: 40px;
    font-size: 16px;
}
.verifyTips {
    margin: 15px 0;
    color: #555;
}

.fas {
    margin-top: 0 !important;
}
</style>
