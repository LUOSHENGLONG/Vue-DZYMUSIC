<template>
  <div class="contribute container">
    <ul v-if="this.$store.state.isLogin" class="first-ul">
      <li class="dropdown open">
        <ul class="dropdown-menu">
          <li class="dropdown-info">
            <div>
              <div class="dropdown-info-left">
                <img :src="navAvatar" alt=".." class="img-info-circle">
              </div>
              <div class="dropdown-info-right">
                <span>
                  <i class="fas fa-edit" style="font-size: 24px"></i>
                  投稿 创作中心 分享你的正能量
                </span>
              </div>
            </div>
          </li>

          <div class="contributeTips" @click="goTips"><span>投稿小贴士</span></div>
          
          <li class="type-li" style="height: 160px">
            <!-- 文章类型 -->
            <div class="contribute-type">
              <span class="contribute-type-text" style="color: #777;">
                文章类型
                <span style="color:red;font-size:22px">*</span>
              </span>
              <div class="typeCheck">
                <form action>
                  <!-- <div class="checkRow" v-for="(item, index) of articleType" :key="item.id"> -->
                  <div class="checkRow" v-for="(item) of articleType" :key="item.id">
                    <input
                      type="radio"
                      style="display: none"
                      name="type"
                      :id="item.id"
                      class="contribute-title-input-radio"
                    >
                    <label :for="item.id">
                      {{ item.name }}
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li class="title-li">
            <!-- 文章标题 -->
            <div class="contribute-title">
              <span class="contribute-title-text">
                文章标题
                <span style="color:red;font-size:22px">*</span>
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>
              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                ref="title"
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                maxlength="80"
                v-model="title"
                class="coolscrollbar contribute-title-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="填写文章标题 如 Echo Sound Works Xhere for XFER RECORDS SERUM 音色包"
              ></textarea>
            </div>
          </li>
          <li class="content-li">
            <!-- 文章内容 -->
            <div class="contribute-content">
              <span class="contribute-content-text">
                文章内容
                <span style="color:red;font-size:22px">*</span>
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>
              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                ref="content"
                id
                cols="30"
                rows="10"
                v-model="content"
                maxlength="8000"
                class="coolscrollbar contribute-content-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="填写文章内容"
              ></textarea>
            </div>
          </li>

          <li class="info-li">
            <!-- 文章描述 -->
            <div class="contribute-info">
              <span class="contribute-info-text">
                文章描述
                <span style="color:red;font-size:22px">&nbsp;</span>
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>
              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                v-model="description"
                maxlength="1000"
                class="coolscrollbar contribute-info-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="选填 音色包如下
023 x (Leads) 音色
022 x (Basses) 音色
022 x (Plucks) 音色
"
              ></textarea>
            </div>
          </li>

          <li class="videoLink-li">
            <!-- 文章视频链接 -->
            <div class="contribute-videoLink">
              <span class="contribute-videoLink-text">文章视频链接&nbsp;
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>

              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                v-model="videoLink"
                maxlength="200"
                class="coolscrollbar contribute-videoLink-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="如文章需要插入视频请上传到B站后复制视频链接"
              ></textarea>
            </div>
          </li>

          <li class="imgLink-li">
            <!-- 文章图片链接 -->
            <div class="contribute-imgLink">
              <span class="contribute-imgLink-text">文章图片链接&nbsp;
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>

              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <div class="currentAvatar">
                <div class="uploadAvatar">
                  <label for="examplexxxs">
                    <i class="fas fa-images"></i>
                    <i class="fas fa-plus"></i>
                    <span>选择图片</span>
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="examplexxxs"
                    name="file"
                    @change="imgSrc"
                    multiple="multiple"
                    placeholder="Email"
                    accept="image/*"
                  >
                </div>
                <div class="showAvatar">
                  <img id="showImg" :src="item" alt v-for="item of avatar" :key="item">
                  <img id="showImg" :src="avatar" alt>
                  <img id="showImg" :src="avatar" alt>
                </div>
              </div>
              <p
                ref="uploadTips"
                style="text-align:center;color:#999"
              >请选择图片上传：支持JPG、PNG等格式，图片需小于3M，图片需小于3张</p>
            </div>
          </li>

          <li class="downloadLink-li">
            <!-- 文章下载链接 -->
            <div class="contribute-downloadLink">
              <span class="contribute-downloadLink-text">下载链接&nbsp;
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>

              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                v-model="downloadLink"
                maxlength="1000"
                class="coolscrollbar contribute-downloadLink-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="如有提供资源下载请填写百度云链接"
              ></textarea>
            </div>
          </li>

          <li class="downloadCode-li">
            <!-- 文章下载提取码 -->
            <div class="contribute-downloadCode">
              <span class="contribute-downloadCode-text">下载提取码&nbsp;
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>

              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                v-model="downloadPassword"
                maxlength="1000"
                class="coolscrollbar contribute-downloadCode-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="如提供资源需提取码请填写"
              ></textarea>
            </div>
          </li>
          <li class="zipPassword-li">
            <!-- 文章解压密码 -->
            <div class="contribute-zipPassword">
              <span class="contribute-zipPassword-text">解压密码&nbsp;
                <i class="far fa-question-circle" style="cursor: pointer" @click="goTips"></i>

              </span>
              <!-- 设置textarea高度自动化 隐藏右侧滚动条 -->
              <textarea
                name="articleTextarea"
                id
                cols="30"
                rows="10"
                maxlength="1000"
                v-model="downloadUnzip"
                class="coolscrollbar contribute-zipPassword-textarea"
                onpropertychange="this.style.height=this.scrollHeight + 'px'"
                oninput="this.style.height=this.scrollHeight + 'px'"
                placeholder="如资源需解压密码请填写"
              ></textarea>
            </div>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <div class="mybtn">
              <button type="button" class="btn btn-success" @click="submitContribute">
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
const imageConversion = require("image-conversion");
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      switch: 0,
      oldKeyword: "",
      navAvatar: "",
      nickname: this.$store.state.user.nickname,
      emailOrPhone: "",
      articleType: [
        {id: "information",name: "资讯"},
        {id: "synthesizer",name: "合成器"},
        {id: "effects",name: "效果器"},
        {id: "samplePakc",name: "采样包"},
        {id: "tutorial",name: "教程"},
        {id: "host",name: "宿主"},
        {id: "kontakt",name: "Kontakt"},
        {id: "midi",name: "MIDI"},
        ],
      typeId: "",
      isChecked: false,
      formData: new FormData(),
      isUpload: false,
      avatar: [],
      fileCount: 0,
      
      title:"",
      type: "",
      content: "",
      description: "",
      videoLink: "",
      downloadLink: "",
      downloadPassword: "",
      downloadUnzip: "",
      img: [],
      contributeData: []

    };
  },
  mounted() {
    if (sessionStorage.getItem("user") != null) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      
      this.navAvatar = `http://localhost:3001` + user.avatar;
      this.nickname = user.nickname;
      if (user.email.trim() != "" || user.email != null) {
        this.emailOrPhone = user.email;
      } else {
        this.emailOrPhone = user.phone;
      }
    }
    this.autoChecked();
    this.menu()
  },
  methods: {
    
    goTips() {
      const {href} = this.$router.resolve({
        path: "/tips",
        
      })
      window.open(href, '_blank')
    },
    submitContribute() {
      // 获取文章标题 判断是否为空
      if( this.title.trim() === "" ) {
        $(this.$refs.title).focus()
        this.$refs.title.style.borderColor = "#EEA9B8"
        setTimeout(() => {
          this.$refs.title.style.borderColor = "#ccc"
        }, 2000);
        return
      }

      // 获取文章内容  判断是否为空
      if( this.content.trim() === "" ) {
        $(this.$refs.content).focus()
        this.$refs.content.style.borderColor = "#EEA9B8"
        setTimeout(() => {
          this.$refs.content.style.borderColor = "#ccc"
        }, 2000);
        return
      }

      // 获取文章类型 id为 如 samplePack 
      this.type = $('input[name="type"]:checked')[0].id

      // 2019-01-02 09:29:59 格式化日期
      function formatDateTime(date) {  
        var y = date.getFullYear();  
        var m = date.getMonth() + 1;  
        m = m < 10 ? ('0' + m) : m;  
        var d = date.getDate();  
        d = d < 10 ? ('0' + d) : d;  
        var h = date.getHours();  
        h=h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        minute = minute < 10 ? ('0' + minute) : minute;  
        var second=date.getSeconds();  
        second=second < 10 ? ('0' + second) : second;  
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
      };

      this.formData.append("title",this.title)
      this.formData.append("type",this.type)
      this.formData.append("content",this.content)
      this.formData.append("description",this.description)
      this.formData.append("videoLink",this.videoLink)
      this.formData.append("downloadLink",this.downloadLink)
      this.formData.append("downloadPassword",this.downloadPassword)
      this.formData.append("downloadUnzip",this.downloadUnzip)
      this.formData.append("contributeTime",formatDateTime(new Date()))
      this.formData.append("userId", JSON.parse(sessionStorage.getItem("user")).id)

      let that = this
      $.ajax({
        url: "http://localhost:3001/submitContribute",
        // async: false,
        type: "POST",
        data: this.formData,
        processData: false,
        contentType: false,
        success: function(ret) {
          // 投稿成功
          that.$router.push({path: '/success'})
        },
        error: function(ret) {
          // 投稿失败
          that.$router.push({path: '/fail'})
        }
      });
    },

    menu() {
      window.scrollTo(0,0);
    },
    // 默认选择第一个radio
    autoChecked() {
      let radios = Array.prototype.slice.call($("input[type='radio']"));
      $(radios[0]).attr("checked", "checked");
    },
    imgSrc() {

      // 获取file元素数组 把伪数组转换成数组
      let fileList = Array.prototype.slice.call($("#examplexxxs")[0].files);
      console.log(fileList);

      // 判断files数组上传图片是否超过三张 超过三张则截取三张
      // 图片超过三张
      if (fileList.length > 3) {
        fileList = fileList.splice(0, 3);
        this.$refs.uploadTips.style.color = "#a94442";
        setTimeout(() => {
          this.$refs.uploadTips.style.color = "#999";
        }, 2000);
        console.log("fileList.length > 3");
      }
      // 上传图片数已经超过三张则不能继续上传
      if (this.avatar.length > 2) {
        console.log("上传图片超过三个");
        return;
      }

      let file = {};
      let fromFiles = [];

      // 遍历上传图片 验证每张图片大小 及 压缩文件
      fileList.forEach((item, index) => {
        file = item;
        // 图片格式、大小验证
        if (
          file.type.indexOf("image/") === -1 ||
          Math.ceil(parseInt(file.size) / 1024) > 20480
        ) {
          console.log("请上传图片类型文件");
          this.$refs.uploadTips.style.color = "#a94442";
          setTimeout(() => {
            this.$refs.uploadTips.style.color = "#999";
          }, 2000);
          this.isUpload = false;
          return;
        }

        let finalFile = {};

        // 通过图片大小验证 则对图片进行压缩
        imageConversion.compressAccurately(file, 100).then(res => {
          console.log(res);
          // 得到Blob对象
          finalFile = res;
          let imgUrl = URL.createObjectURL(finalFile);
          // $("#showImg").attr("src",imgUrl)
          this.avatar.push(imgUrl);
          // 将Blob对象转成base64
          blobToDataURL(finalFile, result => {
            console.log("resultresultresultresult");
            // 将base64转出file
            finalFile = dataURLtoFile(result, index+".png");
            console.log(finalFile);
            fromFiles.pop()
            fromFiles.push(finalFile);
            this.formData.append('file',finalFile);
            // this.formData.append('id',JSON.parse(sessionStorage.getItem("user")).id);
            // this.formData.append('imgUrl',imgUrl);
            
            this.isUpload = true
          });
        });
      });

      // this.formData.append('avatar',this.avatar);

      function blobToDataURL(blob, callback) {
        let a = new FileReader();
        a.onload = function(e) {
          callback(e.target.result);
        };
        a.readAsDataURL(blob);
      }

      function dataURLtoFile(dataurl, filename) {
        //将base64转换为文件
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      }
    },
    uploadAvatar() {
      if (this.isUpload === true) {
        let userData = JSON.parse(sessionStorage.getItem("user"));
        $.ajax({
          url: "http://localhost:3001/fileUpload",
          async: false,
          type: "POST",
          data: this.formData,
          processData: false,
          contentType: false,
          success: function(ret) {
            userData.avatar = ret.avatar;
            sessionStorage.setItem("user", JSON.stringify(userData));
            console.log(ret.avatar);
          },
          error: function(ret) {
            console.log(ret);
          }
      });
      this.$store.state.user = userData;
      this.$router.go(0);
    } else {
        this.$refs.uploadTips.style.color = "#a94442";
        setTimeout(() => {
          this.$refs.uploadTips.style.color = "#999";
        }, 2000);
      }
    }
  },
  watch: {
    typeId(newVal, oldVal) {
      let on = `toggleOn` + oldVal;
      let off = `toggleOff` + oldVal;
      if (newVal != oldVal) {
        $(this.$refs[off]).css("display", "block");
        $(this.$refs[on]).css("display", "none");
        console.log(22222222);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contribute {
  z-index: 0;
  margin-top: 80px;
}
.container {
  height: 1300px;
  // background-color: pink;
  position: relative;
  text-align: center;
  padding: 0;
  .contributeTips {
    position: absolute;
    background-color: #7745b8de;
    color: #fff;
    font-size: 18px;
    width: 120px;
    height: 50px;
    right: 40px;
    top: 100px;
    border-radius: 8px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .contributeTips:hover {
    background-color: #7745b8c2;

  }
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

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.dropdown-menu > li > a:first-child:hover,
.dropdown-menu > li > a:first-child:focus {
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
  text-align: left !important;
  .contribute-type-text {
    font-size: 18px;
    margin-right: 0px;
    float: left;
  }
  .contribute-title-input-radio {
    display: block;
  }
  label {
    width: 100px;
    height: 40px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    background-color: #f6f6f6;
    border-radius: 40px;
    line-height: 42px;
    color: #555;
  }
}
.typeCheck {
  float: right;
  width: 80%;
  height: 200px;
  padding: 16px 0 !important;
  padding-left: 20px !important;
  .checkRow {
    float: left;
    height: 60px;
    padding: 0;
    margin: 2px;
    label {
      float: left;
      cursor: pointer;
    }
  }
}
.type-name {
  font-size: 16px;
}

// 文章标题

.coolscrollbar {
  scrollbar-arrow-color: yellow;
  scrollbar-base-color: lightsalmon;
}
// 文章内容
.content-li,
.info-li,
.videoLink-li,
.title-li,
.imgLink-li,
.downloadLink-li,
.downloadCode-li,
.zipPassword-li {
  height: 100%;
}
.contribute-content,
.contribute-info,
.contribute-videoLink,
.contribute-title,
.contribute-imgLink,
.contribute-downloadLink,
.contribute-downloadCode,
.contribute-zipPassword {
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
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    color: #222;
    padding: 4px 10px;
    resize: none;
    line-height: 25px;
    overflow-y: hidden;
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
  .contribute-imgLink-textarea {
    min-height: 60px;
    height: 60px;
    margin-left: -32px;
  }
  .contribute-downloadLink-textarea {
    min-height: 60px;
    height: 60px;
  }
  .contribute-zipPassword-textarea {
    min-height: 40px;
    height: 40px;
    margin-left: -4px;
  }
  .contribute-downloadCode-textarea {
    min-height: 40px;
    height: 40px;
    margin-left: -22px;
  }
}

.type-i-on {
  margin-right: 4px;
  font-size: 28px;
  float: left;
  cursor: pointer;
  color: rgb(79, 192, 141);
  display: none;
}

.type-i-off {
  color: #bbb;
  font-size: 28px;
  float: left;
  cursor: pointer;
}

ul,
li {
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
.btn:hover,
.btn-success:focus,
.btn-success.focus,
.btn.active {
  outline: 0 !important;
  border: 0;
}

input {
  outline: none;
}

.type-li {
  height: 100px;
}

/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
input:checked + label {
  background-color: #47b39d;
  border: 1px solid #47b39d;
  border-radius: 40px;
  cursor: pointer;
  color: #fff;
}

input:checked + label::after {
  position: absolute;
  content: "";
  background-color: #fff;
  width: 5px;
  height: 10px;
  top: -10px;
  left: 6px;
  border: 2px solid #fff;
  cursor: pointer;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.contribute-title-input-radio {
  background-color: #fff;
  display: none;
}

.currentAvatar {
  margin: 0 !important;
  padding: 0 !important;
  margin-bottom: 50px;
  display: flex;
  flex: 4;
  height: 220px;
  .uploadAvatar {
    flex: 1;
    text-align: left;
    // border-right: 1px solid #eee;
    // margin: 20px;
    padding-left: 46px;
    padding-right: 0;
    margin: 0;
    input {
      display: none;
    }
    label:hover {
      cursor: pointer;
    }
    label {
      text-align: center;
      background-color: #f1f2f5;
      border: 1px solid #e5e9ef;
      padding-top: 26px;
      margin-right: 10px;
      width: 150px;
      height: 150px;
      .fa-images {
        font-size: 60px;
        display: block;
      }
      .fa-plus {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }
  }
  .showAvatar {
    position: relative;
    flex: 3;
    text-align: left;
    padding: 0;
    margin: 0 auto;
    height: 150px;
    img {
      width: 150px;
      height: 150px;
      margin-right: 4px;
      border-radius: 4px;
      border: none !important;
    }
    p {
      position: absolute;
      font-size: 14xp;
      color: rgba(0, 0, 0, 0.719);
      padding-top: 5px;
      left: 50px;
      bottom: -38px;
    }
  }
}

.submitContribute {
  position: fixed;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding-top: 100px;
  transform: translate(110%);
  text-align: center;
  z-index: 9999999;
}


</style>
