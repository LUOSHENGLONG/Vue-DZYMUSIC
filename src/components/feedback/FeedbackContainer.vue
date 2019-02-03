<template>
    <div class="container feedback">
        <div class="title">
            <i class="fas fa-angle-double-left" style="font-size: 20px;"></i>
            &nbsp;发送反馈&nbsp;
            <i class="fas fa-angle-double-right" style="font-size: 20px;"></i>
        </div>
        <div v-if="isShow" class="showDiv">
            
            <div class="main-title">
                <span>标题</span>
                <input type="text" ref="titleInput" v-model="title" maxlength="100">
            </div>
            <div class="main-content">
                <span>内容</span>
                <textarea 
                    type="text" 
                    ref="contentInput" 
                    maxlength="1500" 
                    v-model="content"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'"
                    oninput="this.style.height=this.scrollHeight + 'px'">
                </textarea>
            </div>
            <div class="divider"></div>
            <div class="mybtn">
                <button type="button" class="btn btn-success" @click="submitFeedback">
                <i class="fas fa-check"></i>
                发送反馈
                </button>
            </div>
        </div>

        <div ref="success" style="display:none;margin: 40px 0;">
            <i class="fas fa-check" style="display:block;font-size: 360px;color: #4fc08d"></i>
            <span style="font-size: 30px;color: #4fc08d">发送成功，谢谢你的反馈!</span>
        </div>
        <div ref="fail" style="display:none;margin: 40px 0;">
            <i class="fas fa-times" style="display:block;font-size: 360px;color: #FF6A6A"></i>
            <span style="font-size: 30px;color: #FF6A6A">服务器出错，发送失败!</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            content: '',
            isShow: true,
            isSuccess: false,

        }
    },
    mounted() {
        window.scrollTo(0,0)
        if(sessionStorage.getItem("user") === null) {
            this.$router.push({path: '/'})
            return
        }
    },
    methods: {
        submitFeedback() {
            if(sessionStorage.getItem("user") === null) {
                this.$router.push({path: '/'})
                return
            }
            if( this.title.trim() === "") {
                this.$refs.titleInput.style.borderColor = "#EEA9B8"
                $(this.$refs.titleInput).focus()
                setTimeout(() => {
                    this.$refs.titleInput.style.borderColor = "#aaa"
                }, 3000);
                return
            }

            if( this.content.trim() === "") {
                this.$refs.contentInput.style.borderColor = "#EEA9B8"
                $(this.$refs.contentInput).focus()
                setTimeout(() => {
                    this.$refs.contentInput.style.borderColor = "#aaa"
                }, 3000);
                return
            }
            if( sessionStorage.getItem("user") === null) {
                this.$route.push({path: '/'})
                return 
            }
            let userId = JSON.parse(sessionStorage.getItem('user')).id
            axios.post("http://localhost:3001/submitFeedback",{userId: userId,title: this.title, content: this.content})
            .then( result => {
                console.log(result.data)
                if( result.data.code === 1) {
                    this.title = ""
                    this.content = ""
                    this.isShow = false
                    this.$refs.success.style.display = "block"
                    setTimeout(() => {
                        this.$router.push({path: '/'})
                    }, 5000);
                }

                if( result.data.code === 0) {
                    this.title = ""
                    this.content = ""
                    this.isShow = false
                    this.$refs.fail.style.display = "block"
                    setTimeout(() => {
                        this.$router.push({path: '/'})
                    }, 5000);
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 0;
    padding-bottom: 50px;
    margin-top: 80px;
    text-align: center;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    overflow: hidden;
    border-radius: 8px;
    border-top: 3px solid rgba(88, 57, 57, 0.279);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
        text-align: center;
    }
}
p {
    margin: 20px 0;
    font-size: 20px;
    background-color: #fff;
    border: 0;
    padding: 0 300px;
    text-align: left;
}
.title {
    background-color: #f4f4f4;
    font-size: 18px;
    color: #555;
    padding: 10px 0;
    text-align: center;
}
input {
    width: 600px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    border: 1px solid #aaa;
    padding-left: 10px; 
    padding-right: 10px; 
    font-size: 16px;
    color: #444;
}
input:focus {
    outline: 0;
}
.main-title {
    margin-top: 40px;
    margin-bottom: 20px;
    span {
        margin-right: 10px;
        font-size: 18px;
        color: #444;
    }
}
.main-content {
    textarea {
        width: 600px;
        min-height: 200px;
        border-radius: 8px;
        border: 0;
        border: 1px solid #aaa;
        padding-left: 10px; 
        padding-right: 10px; 
        font-size: 16px;
        color: #444;
        resize: none;
        overflow: hidden;
    }
    textarea:focus {
        outline: 0;
    }
    span {
        margin-right: 10px;
        font-size: 18px;
        color: #444;
        vertical-align: top;
    }
}
.mybtn {
  width: 100%;
  text-align: center !important;
  margin-top: 50px;
  margin-bottom: 0;
  position: relative;
  button {
    width: 160px;
    height: 54px;
    border-radius: 60px;
  }
  .preview {
    position: absolute;
    right: 10px;
    top: 4px;
    background-color: #FF6A6A;
    border-radius: 6px;
  }
  .preview:hover,.preview:focus,.preview:active {
    background-color: #FF6A6A !important;
  }
}

.btn-success {
  background-color: #4fc08d;
  font-size: 20px;
  color: #fff;
}
.btn-success:hover {
  background-color: #51ce95 !important;
}
.btn,
.btn:hover,
.btn-success:focus,
.btn-success.focus,
.btn.active {
  outline: 0 !important;
  border: 0;
}


</style>
