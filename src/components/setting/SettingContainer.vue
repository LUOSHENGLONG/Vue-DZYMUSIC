<template>
  <div class="container"  :style="{minHeight: minHeight + 'px'}">
    <div class="title">
      <i class="fas fa-cog" style="margin-right: 10px;"></i>
      资料设置
    </div>
    <div class="setting">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-2 col-sm-2 col-xs-2 col-lg-2 hidden-xs">
          
          <ul class="settingInfo nav nav-tabs" role="tablist">
            <!-- <p class="title"><i class="fas fa-cog"></i> 设置&nbsp;</p> -->
            <li role="updateAvatar" ref="updateAvatar">
              <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                <i class="far fa-user-circle" style="font-size:26px;vertical-align: -3px;"></i> 
                &nbsp;修改头像
              </a>
            </li>
            <li role="info" ref="info">
              <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                <i class="fas fa-id-card-alt" style="font-size:24px;vertical-align: -3px;"></i> 
                &nbsp;个人资料
                </a>
            </li>
            <li role="identity" ref="identity">
              <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
                <i class="fas fa-id-card" style="font-size:24px;vertical-align: -3px;"></i> 
                &nbsp;实名认证
              </a>
            </li>
            <li role="account">
              <a href="#safe" ref="account" aria-controls="safe" role="tab" data-toggle="tab">
                <i class="fas fa-key" style="font-size:24px;vertical-align: -3px;"></i> 
                &nbsp;账户安全
              </a>
            </li>
            <li role="expand" ref="expand">
              <a href="#promotion" aria-controls="promotion" role="tab" data-toggle="tab">
                <i class="fas fa-donate" style="font-size:24px;vertical-align: -3px;"></i> 
                &nbsp;访问推广
              </a>
            </li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="Tab col-md-10 col-sm-10 col-xs-10 col-lg-10">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <form>
                <div class="form-group">
                  <!-- <p>
                    当前我的头像
                      如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像
                      设置我的新头像
                      请选择一个新照片进行上传编辑。
                      头像保存后，您可能需要刷新一下本页面(按F5键)，才能查看最新的头像效果
                  </p> -->
                  <div class="currentAvatar">
                    <div class="uploadAvatar">
                      <label  @click="toggleShow">
                        <i class="fas fa-image"></i>
                        <i class="fas fa-plus"></i>
                        <span>选择图片</span>
                      </label>
                      <input type="file" class="form-control" id="examplexxxs" name="file" @change="imgSrc" placeholder="Email" accept="image/*">
                    </div>
                    <div class="showAvatar">
                      <img id="showImg" :src="avatar" alt="">
                      <p>当前我的头像</p>
                    </div>
                  </div>
                  <!-- <a class="btn" @click="toggleShow">设置头像</a> -->
                  <my-upload field="img" @crop-success="cropSuccess" id="examplexxxs" v-model="show" :width="200" :height="200" img-format="png" :size="size"></my-upload>
                </div>
                <p ref="uploadTips" style="text-align:center;color:#999">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于10M</p>

                <div class="mybtn">
                  <button type="button" @click="uploadAvatar" class="btn btn-success">更新</button>
                </div>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="safe">
                <img src="../../images/working.png" alt="">
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="messages">
              <div class="safe">
                <img src="../../images/working.png" alt="">
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="safe">
              <AccountSecurity></AccountSecurity>
            </div>
            <div role="tabpanel" class="tab-pane" id="promotion">
              <div class="safe">
                <img src="../../images/working.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import myUpload from 'vue-image-crop-upload';

import AccountSecurity from '../accountSecurity/AccountSecurityContainer.vue';

const imageConversion = require("image-conversion")

export default {
  data() {
    return {
      minHeight: 0,
      avatar: "",
      show: false,
      size:2.1,
      formData: {},
      isUpload: false,
      id: "",
      active: this.$route.params.active,
      userData: {}
    }
  },
  mounted() {
    // 组件最小高度设置
    this.minHeight = document.documentElement.clientHeight - 754
    window.onresize = () =>　{
      this.minHeight = document.documentElement.clientHeight - 754
    }

    

    // 判断是否已登录
    this.isLogin()
    this.avatar = `` + this.userData.avatar
    // 获取进入组件后左边控制栏所在的位置
    let target = "[role='"+ this.active +"']"
    $(this.$refs[this.active]).click()
    $(target).addClass("active")

  },
  components: {
    "my-upload": myUpload,
    AccountSecurity
  },
  methods: {
      // 判断是否登录
      isLogin() {
        if( sessionStorage.getItem("user") != null) {
          this.userData = JSON.parse(sessionStorage.getItem("user"))
        } else {
          this.$router.push({path: '/'})
          return
        }
      },
      menu() {
        window.scrollTo(0,0);
      },
      imgSrc() {
        this.formData = new FormData();
        const file = $("#examplexxxs")[0].files[0]
        // 图片格式、大小验证
        if(file.type.indexOf("image/") === -1 || Math.ceil(parseInt(file.size)/1024) > 2048) {
          this.$refs.uploadTips.style.color = "#a94442"
          setTimeout(() => {
            this.$refs.uploadTips.style.color = "#999"
          }, 2000);
          this.isUpload = false
          return
        }
        
        let finalFile = {}
        imageConversion.compressAccurately(file,100).then(res => {
          // 得到Blob对象
          finalFile = res
          let imgUrl = URL.createObjectURL(finalFile)
          $("#showImg").attr("src",imgUrl)
          // 将Blob对象转成base64
          blobToDataURL(finalFile, result => {
            // 将base64转出file
            finalFile = dataURLtoFile(result,"1.png")
            
            this.formData.append('file',finalFile);
            this.formData.append('id',JSON.parse(sessionStorage.getItem("user")).id);
            this.formData.append('imgUrl',imgUrl);
            this.formData.append('avatar',this.avatar.substring(this.avatar.lastIndexOf("/")));
            this.isUpload = true
          })
        })
         

        function blobToDataURL(blob, callback) {
          let a = new FileReader();
          a.onload = function (e) { callback(e.target.result); }
          a.readAsDataURL(blob);
        }

        function dataURLtoFile(dataurl, filename) {//将base64转换为文件
          var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
        }
         
      },
      uploadAvatar() {
        this.isLogin()
        if( this.isUpload === true ) {
          let userData = JSON.parse(sessionStorage.getItem("user"))
          $.ajax({
            url : '/api/fileUpload',
            async: false,
            type : 'POST',
            data : this.formData,
            processData: false,
            contentType: false, 
            success : function(ret){
              
              userData.avatar = ret.avatar
              sessionStorage.setItem("user", JSON.stringify(userData))
            },
            error : function(ret){
            } 
          })
          this.$store.state.user = userData
          this.$router.go(0)

        } else {
          this.$refs.uploadTips.style.color = "#a94442"
          setTimeout(() => {
            this.$refs.uploadTips.style.color = "#999"
          }, 2000);
        }
      },
      toggleShow() {
        this.show = !this.show;
      },
      cropSuccess(imgDataUrl) {
        //  imgDataUrl其实就是经过base64转码过的图片
        // this.avatar = imgDataUrl;
        //console.log(imgDataUrl) //这里打印出来的是base64格式的资源，太长了
        //base64转blob格式
        let arr = imgDataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        let blob = new Blob([u8arr], { type: mime })
        // console.log(new Blob([u8arr], { type: mime })) ;//这里打印base64转成blob的资源，根据自己的项目需求去转吧
        $("#showImg").attr("src",URL.createObjectURL(blob))

        let finalFile = {}
        
        this.formData = new FormData()

        imageConversion.compressAccurately(blob,100).then(res => {
          // 得到Blob对象
          finalFile = res
          let imgUrl = URL.createObjectURL(finalFile)
          $("#showImg").attr("src",imgUrl)
          // 将Blob对象转成base64
          blobToDataURL(finalFile, result => {
            // 将base64转出file
            finalFile = dataURLtoFile(result,"1.png")
            
            this.formData.append('file',finalFile);
            this.formData.append('id',JSON.parse(sessionStorage.getItem("user")).id);
            this.formData.append('imgUrl',imgUrl);
            this.formData.append('avatar',this.avatar.substring(this.avatar.lastIndexOf("/")));
            this.isUpload = true
          })
        })
         

        function blobToDataURL(blob, callback) {
          let a = new FileReader();
          a.onload = function (e) { callback(e.target.result); }
          a.readAsDataURL(blob);
        }

        function dataURLtoFile(dataurl, filename) {//将base64转换为文件
          var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
        }
      }
  }

}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
  margin-top: 80px;
  padding-bottom: 20px;
  overflow: hidden;
  border-radius: 8px;
  border-top: 3px solid #34495e9f;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.rightBorder {
  padding: 0;
  z-index: 55;
}
.Tab {
  padding-right: 0;
}
.setting {
  width: 100%;
  height: 100%;
  margin: 0px 0;
  border-radius: 5px;
  padding: 0 20px;
  .tagPage {
    height: 100%;
    padding: 20px 0;
    
    ul.settingInfo {
      display: block;
      width: 180px;
      margin-top: 36px;
      border: 0;
      background-color: #fff;
      // border: 1px solid rgba(204, 204, 204, 0.425);
      li:hover {
        background-color: rgba(204, 204, 204, 0.425);
        color: #fff;
      }  
      li {
        display: block;
        float: none;
        transform: translateX(0);
        transform: translateY(0);
        transition: all 0.5s ease;
        width: 180px;
        margin-top: 4px;
        border-radius: 40px;
        overflow: hidden;
        a {
          border: 0;
          margin: 10pxpx;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
        }
        a:hover {
          background-color: rgba(204, 204, 204, 0);
          
        }
      }
      li.active {
        background-color: #47b39d;;
        
        a {
          color: #eee;
        }
      }
    }
  }
}

.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #fff;
    cursor: default;
    background-color:  #47b39d;
    // border: 1px solid #ddd;
    border-bottom-color: transparent;
}
form {
  background-color: #fff;
  padding: 20px 50px;
  // border: 1px solid #ddd;
  div {
    margin: 10px 0;
  }
  label {
    display: inline-block;
    width: 60px;
    height: 20px;
    margin: 0 10px
  }
  input {
    left: 150px;
    right: 20px;
    display: inline;
    max-width: 80%;
  }

  
}

.mybtn {
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0;
  button {
    width: 150px;
    height: 40px;
   border-radius: 20px;
  }
}




#home {
  
  form {
    .from-group {
      input.form-control {
        max-width: 200px;
      }
      .form-control:focus {
        border-color: #3379b736; 
      }
    }
  }
}

input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset;}


.ps, select {
    padding: 2px 8px 6px 16px;
}

.ps, select {
    border: 1px solid #dfdfdf;
    background: #fff url(https://www.7xaudio.com/template/comiis_nby/img/px.png) repeat-x 0 0;
    box-shadow: 2px 2px 2px #f0f0f0 inset;
}


// AVATAR 
.currentAvatar {
  margin-bottom: 50px;
  display: flex;
  flex: 2;
  height: 220px;
  .uploadAvatar {
    flex: 1;
    text-align: right;
    border-right: 1px solid #eee;
    margin: 20px;
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
      padding-top: 40px;
      margin-right: 30px;
      width: 180px;
      height: 180px;
      .fa-image {
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
    flex: 1;
    margin: 20px;
    margin-left: 10px;
    text-align: left;
    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
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
.btn,
.btn:hover,.btn-success:focus, .btn-success.focus,
.btn.active {
  outline: 0 !important;
  border: 0;
}



@keyframes rotate{
  0%{
    transform: rotate(-380deg);
  }
  50%{
    transform:  rotate(-180deg);
  }
  100%{
    transform: rotate(-380deg);
  }
}

@keyframes bgc{
  0%{
    background-color: #462446;
    opacity: 0.8;
    border-radius: 10px;
  }
  50%{
    background-color: #eb6b56;
    opacity: 0.5;
    border-radius: 25px;

  }
  100%{
    background-color: #47b39d;
    opacity: 0.8;
    border-radius: 40px;
  }
}

@keyframes overturn {
  0%{
    transform: rotateY(0deg);
    }
  50%{
    transform: rotateY(180deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}
.active {
  i {
    transition: 0.5s;
    animation: overturn 2s linear infinite alternate;  /*开始动画后无限循环，用来控制rotate*/
  }
  .fa-image, .fa-plus {
    animation: none;
  }
}
//  .fa-cog {
//   transform: rotate(18000deg);
//   transition: all 100s ease;
// }

.fa-cog{
  transition: 0.5s;
  animation: rotate 2s linear infinite alternate;  /*开始动画后无限循环，用来控制rotate*/
}


.btn-success {
  background-color: #4fc08d;
  font-size: 16px;
  color: #fff;
}
.btn-success:hover {
  background-color: #51ce95 !important;
}

.vicp-wrap {
  display: none !important;
}



.safe {
  margin-top: 50px;
  text-align: center;
  img{
  }
}
ul,li {
  list-style: none;
}
.profile {
  margin-top: 50px;
  height: 600px;
  text-align: center;
  ul {
    li {
      margin-top: 20px;
      div {
        input {
          
        }
      }
    }
  }
}

.profile-span {
  height: 46px;
  padding: 10px 20px 10px 0;
  font-size: 16px;
  line-height: 1.3333333;
  border-radius: 6px;
  color: #555;
}


.profile-input {
  width: 300px;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.title {
  background-color: #f4f4f4;
  font-size: 18px;
  color: #555;
  padding: 10px 0;
  text-align: center;
}
</style>
