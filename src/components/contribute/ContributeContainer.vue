<template>
    <div class="contribute container">
        <ul v-if="this.$store.state.isLogin" class="first-ul">
          <li class="dropdown open">
            <!-- <ul class="dropdown-menu ">
              <li class="dropdown-info">
                <div>
                  <div class="dropdown-info-left">
                    <img :src="navAvatar" alt =".." class="img-info-circle">
                  </div>
                  <div class="dropdown-info-right">
                    <p>{{ nickname }} </p>
                    <p>{{ emailOrPhone }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <i class="fas fa-user-circle" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>个人中心</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </div>
              </li>
              
              <li>
                <div>
                  <i class="fas fa-cog" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>资料设置</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </div>
              </li>
              
              
              <li>
                <div>
                  <i class="fab fa-weixin" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>微信公众号</span>
                  <i class="fa fa-qrcode" style="font-size: 24px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fab fa-weibo" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>官方微博</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fab fa-facebook-square" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>&nbsp;Facebook</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fab fa-instagram" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>&nbsp;Instagram</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fab fa-youtube" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>Youtube</span>
                  <i class="fas fa-link" style="font-size: 20px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fas fa-comment-alt" style="margin-right: 22px;font-size: 22px;vertical-align: -3px;"></i>
                  <span>发送反馈</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li>
                <div>
                  <i class="fas fa-question-circle" style="margin-right: 20px;font-size: 24px;vertical-align: -3px;"></i>
                  <span>帮助</span>
                  <i class="fas fa-angle-right" style="font-size: 24px;float: right;margin-top:8px"></i>
                </div>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <div class="mybtn">
                    <button type="button" class="btn btn-success">提交投稿</button>
                </div>
              </li>
            </ul> -->
            <ul class="dropdown-menu ">
              <li class="dropdown-info">
                <div>
                  <div class="dropdown-info-left">
                    <img :src="navAvatar" alt =".." class="img-info-circle">
                  </div>
                  <div class="dropdown-info-right">
                    <span>
                        <i class="fas fa-edit" style="font-size: 24px"></i>
                        投稿  创作中心 分享你的正能量
                    </span>
                  </div>
                </div>
              </li>
              <li>
                  <!-- 文章类型 -->
                <div class="contribute-type">
                  <span class="contribute-type-text" style="color: #777;">文章类型<span style="color:red;font-size:22px">*</span></span>
                  <label for="radio0">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">资讯</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">资讯</span>
                        </i>
                  </label>
                  
                  <label for="radio1">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">合成器</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">合成器</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio1" class="contribute-title-input-radio">
                  <label for="radio2">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">效果器</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">效果器</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio2" class="contribute-title-input-radio">
                  <label for="radio3">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">采样包</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">采样包</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio3" class="contribute-title-input-radio">
                  <label for="radio4">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">教程</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">教程</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio4" class="contribute-title-input-radio">
                  <label for="radio5">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">宿主</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">宿主</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio5" class="contribute-title-input-radio">
                  <label for="radio5">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">Kontakt</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">Kontakt</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio5" class="contribute-title-input-radio">
                  <label for="radio5">
                        <i ref="toggleOn" v-if="!toggle" @click="toggleSwitch" class="fa fa-toggle-off type-i-off">
                            <span class="type-name">MIDI</span>
                        </i>
                        <i ref="toggleOff" v-if="toggle" @click="toggleSwitch" class="fa fa-toggle-on type-i-on">
                            <span class="type-name">MIDI</span>
                        </i>
                  </label>
                  <input type="radio" name="title" id="radio5" class="contribute-title-input-radio">
                </div>
              </li>
              <li class="title-li">
                  <!-- 文章标题 -->
                <div class="contribute-title">
                  <span class="contribute-title-text">文章标题<span style="color:red;font-size:22px">*</span></span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-title-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>
              <li class="content-li">
                  <!-- 文章内容 -->
                <div class="contribute-content">
                  <span class="contribute-content-text">文章内容<span style="color:red;font-size:22px">*</span></span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-content-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>

              <li class="info-li">
                  <!-- 文章描述 -->
                <div class="contribute-info">
                  <span class="contribute-info-text">文章描述<span style="color:red;font-size:22px">&nbsp;</span></span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-info-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>

              <li class="videoLink-li">
                  <!-- 文章视频链接 -->
                <div class="contribute-videoLink">
                  <span class="contribute-videoLink-text">文章视频链接&nbsp;</span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-videoLink-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>

              <li class="imgLink-li">
                  <!-- 文章图片链接 -->
                <div class="contribute-imgLink">
                  <span class="contribute-imgLink-text">文章图片链接&nbsp;</span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-imgLink-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>
              
              <li class="downloadLink-li">
                  <!-- 文章下载链接 -->
                <div class="contribute-downloadLink">
                  <span class="contribute-downloadLink-text">下载链接&nbsp;</span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-downloadLink-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>

              <li class="downloadCode-li">
                  <!-- 文章下载提取码 -->
                <div class="contribute-downloadCode">
                  <span class="contribute-downloadCode-text">下载提取码&nbsp;</span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-downloadCode-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>
              <li class="zipPassword-li">
                  <!-- 文章解压密码 -->
                <div class="contribute-zipPassword">
                  <span class="contribute-zipPassword-text">解压密码&nbsp;</span>
                  <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
                  <textarea 
                    name="articleTextarea" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    maxlength="1000" 
                    class="coolscrollbar contribute-zipPassword-textarea"
                    onpropertychange="this.style.height=this.scrollHeight + 'px'" 
                    oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
                </div>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <div class="mybtn">
                    <button type="button" class="btn btn-success">
                        <i class="fas fa-check"></i>
                        提交投稿
                    </button>
                </div>
              </li>
            </ul>
          </li>
          
          
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            keyword: "",
            switch: 0,
            oldKeyword: "",
            navAvatar: "",
            nickname: this.$store.state.user.nickname,
            emailOrPhone: "",
            toggle: false,
        }
    },
    mounted() {
        if( localStorage.getItem("user") != null) {
            const user = JSON.parse(localStorage.getItem("user"))
            this.navAvatar = `http://localhost:3001` + user.avatar
            this.nickname = user.nickname
            if(user.email.trim() != "" || user.email !=null) {
            this.emailOrPhone = user.email
            } else {
            this.emailOrPhone = user.phone
            }
        } 
    },
    methods: {
        toggleSwitch() {
            this.toggle = !this.toggle
        },
    },

}
</script>

<style lang="scss" scoped>
.contribute {
    z-index: 0;
    margin-top: 80px
}
.container {
    height: 1200px;
    // background-color: pink;
    position: relative;
    text-align: center;
    padding: 0;
}

.first-ul {
    padding: 0;
    margin: 0;
    text-align: center;
    height: 600px;
    .dropdown {
        text-align: center;
    }
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
  width: 100%;
  
  .divider {
    margin: 2px 0;
  }
  li {
      margin: 6px 0;
    div {
      height: 100%;
      border: 0;
      margin: 0 auto;
      padding: 4px 0;
      color: #333 !important;
      line-height: 60px;
      padding: 0 20%;
      text-align: left;
      font-size: 16px;
      text-align: center;
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
      float: left;
      padding: 0;
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
    }
    .dropdown-info-right {
        width: 90%;
      float: left;
      padding: 0;
      margin-left: 20px;
      text-align: center;
      span {
        margin: 0 !important;  
        font-size: 20px;  
        background-color: #7745b8de;
        color: #fff;
        padding: 16px;
        border-radius: 6px;
      }
      
    }
  }
  
}
// 文章类型
.contribute-type {
    .contribute-type-text {
        font-size: 18px;
        margin-right: 60px;
        float: left;
    }
    .contribute-title-input-radio {
        display: none;
    }
    label {
        width: 100px;
        height: 30px;
        margin: 0 5px;
        vertical-align: -8px;
    }
}



// 文章标题

.coolscrollbar{scrollbar-arrow-color:yellow;scrollbar-base-color:lightsalmon;}
// 文章内容
.content-li,
.info-li,
.videoLink-li,
.title-li,
.imgLink-li,
.downloadLink-li,
.downloadCode-li,
.zipPassword-li,{
    height: 100%;
}
.contribute-content,
.contribute-info,
.contribute-videoLink,
.contribute-title,
.contribute-imgLink,
.contribute-downloadLink,
.contribute-downloadCode,
.contribute-zipPassword, {
    height: 100% !important;
    margin-top: 10px !important;
    .contribute-content-text,
    .contribute-info-text,
    .contribute-videoLink-text,
    .contribute-title-text,
    .contribute-imgLink-text, 
    .contribute-downloadLink-text, 
    .contribute-downloadCode-text,
    .contribute-zipPassword-text {
        margin-top: -18px;
        margin-right: 20px;
        font-size: 18px;
        float: left;
        color: #777;
    }
    .contribute-content-textarea,
    .contribute-info-textarea,
    .contribute-videoLink-textarea,
    .contribute-title-textarea,
    .contribute-imgLink-textarea,
    .contribute-downloadLink-textarea,
    .contribute-downloadCode-textarea,
    .contribute-zipPassword-textarea {
        display: inline-block;
        width: 70%;
        min-height: 120px;
        height: 120px;
        font-size: 18px;
        border-radius: 8px;
        border: 1px solid #ccc;
        color: #555;
        padding: 4px 10px;
        resize: none;
        line-height: 25px;
        overflow-y:hidden;
    }
    .contribute-content-textarea:focus,
    .contribute-info-textarea:focus,
    .contribute-videoLink-textarea:focus,
    .contribute-title-textarea:focus,
    .contribute-imgLink-textarea:focus,
    .contribute-downloadLink-textarea:focus,
    .contribute-downloadCode-textarea:focus,
    .contribute-imgLink-textarea:focus,
    .contribute-zipPassword-textarea:focus {
        outline: none;
    }
    .contribute-title-textarea {
        min-height: 60px;
        height: 60px;
    }
    .contribute-videoLink-textarea,
    .contribute-imgLink-textarea, {
        min-height: 60px;
        height: 60px;
        margin-left: -36px;
    }
    .contribute-downloadLink-textarea,{
        min-height: 60px;
        height: 60px;
    }
    .contribute-zipPassword-textarea, {
        min-height: 40px;
        height: 40px;
    }
    .contribute-downloadCode-textarea {
        min-height: 40px;
        height: 40px;
        margin-left: -20px;
    }
    
}

.type-name {
    font-size: 18px;
    margin-left: 6px;
    vertical-align: 3px;
}
.type-i-on {
    margin-right: 4px;
    font-size: 28px;
    float:left;
    cursor:pointer;
    color: rgb(79, 192, 141);
}

.type-i-off {
    color:#bbb;
    font-size: 28px;
    float:left;
    cursor:pointer;
}





ul, li {
    list-style: none;
}

.mybtn {
  width: 100%;
  text-align: center !important;
  margin-top: 50px;
  margin-bottom: 0;
  button {
    width: 160px;
    height: 54px;
   border-radius: 60px;
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
.btn:hover,.btn-success:focus, .btn-success.focus,
.btn.active {
  outline: 0 !important;
  border: 0;
}

input {
    outline: none;
}

</style>
