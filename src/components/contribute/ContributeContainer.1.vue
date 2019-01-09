<template>
  <div class="container">
    <div>
     <div class="currentAvatar">

      <div class="uploadAvatar">
        <label for="examplexxxs">
          <i class="fas fa-image"></i>
          <i class="fas fa-plus"></i>
          <span>选择图片</span>
        </label>
        <input type="file" class="form-control" id="examplexxxs" name="file" @change="imgSrc" placeholder="Email" accept="image/*">
      </div>
      <div class="showAvatar">
        <img id="showImg" :src="option.img" alt="">
        <p>当前我的头像</p>
      </div>
      
    </div>
    <!-- vueCropper 剪裁图片实现-->
    <div class="vue-cropper-box"
         v-if="isShowCropper">
      <div class="vue-cropper-content">
        <vueCropper ref="cropper"
          :img="option.img"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          :info="option.info"
          :canScale="option.canScale"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixed="option.fixed"
          @realTime="realTime"
          :fixedNumber="option.fixedNumber"></vueCropper>
      </div>
    </div>

    <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden','margin': '5px'}">
      <div :style="previews.div">
        <img :src="option.img" :style="previews.img">
      </div>
    </div>
    <p>中等大小</p>
    <div :style="previewStyle1"> 
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img">
      </div>
    </div>

    <p>迷你大小</p>
    <div :style="previewStyle2"> 
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img">
      </div>
    </div>
    <button @click="finish2()" class="btn">裁剪</button>
  </div>
 </div>
</template>
<script>
const imageConversion = require("image-conversion")
export default {
  components: {
  },
  data() {
    return {
     //裁剪组件的基础配置option
      option: {
        img: '',                         //裁剪图片的地址
        info: true,                      //裁剪框的大小信息
        outputSize: 100,                   // 裁剪生成图片的质量
        outputType: 'jpeg',              //裁剪生成图片的格式
        canScale: true,                 // 图片是否允许滚轮缩放
        autoCrop: true,                  // 是否默认生成截图框
        autoCropWidth: 150,              // 默认生成截图框宽度
        autoCropHeight: 150,             // 默认生成截图框高度
        fixed: false,                    //是否开启截图框宽高固定比例
        fixedNumber: [4, 4]              //截图框的宽高比例
      },
      isShowCropper: false,            //是否显示截图框
      fileUpload: null,
      fileinfo: {},
      form: {},
      previewStyle1: {},
      previewStyle2: {},
      previews: {}
    }
  },
  methods: {
    realTime(data) {
      var previews = data;
      var h = 0.5;
      var w = 0.2;

      this.previewStyle1 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: h
      };

      this.previewStyle2 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: w
      };
      this.previews = data;
    },
    finish2() {
      this.$refs.cropper.startCrop()
    },
    imgSrc() {
        this.formData = new FormData();
        const file = $("#examplexxxs")[0].files[0]
        // 图片格式、大小验证
        // if(file.type.indexOf("image/") === -1 || Math.ceil(parseInt(file.size)/1024) > 2048) {
        //   console.log("请上传图片类型文件")
        //   this.$refs.uploadTips.style.color = "#a94442"
        //   setTimeout(() => {
        //     this.$refs.uploadTips.style.color = "#999"
        //   }, 2000);
        //   this.isUpload = false
        //   return
        // }
        
        let finalFile = {}
        imageConversion.compressAccurately(file,100).then(res => {
          console.log(res)
          // 得到Blob对象
          finalFile = res
          let imgUrl = URL.createObjectURL(finalFile)
          // $("#showImg").attr("src",imgUrl)
          

          this.isShowCropper = true
          // 将Blob对象转成base64
          blobToDataURL(finalFile, result => {
            console.log("resultresultresultresult")
            // 将base64转出file
            this.option.img = result
            finalFile = dataURLtoFile(result,"1.png")
            console.log(finalFile)
            
            // this.formData.append('file',finalFile);
            // this.formData.append('id',JSON.parse(localStorage.getItem("user")).id);
            // this.formData.append('imgUrl',imgUrl);
            // this.formData.append('avatar',this.option.img.substring(this.option.img.lastIndexOf("/")));
            // this.isUpload = true
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
    customUpload() {

    },
    //上传按钮上传成功执行事件
    handleUploadSuccess(response, file, fileList) {
      this.log('Upload response is %o', response)
      this.fileinfo = response

      this.fileUpload = file;

      //上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.option.img = file.url;
        this.isShowCropper = true
      })
    },

    // 确定裁剪图片
    onCubeImg() {
      // 获取cropper的截图的base64 数据
      this.$refs.cropper.getCropData(data => {
        this.fileinfo.url = data
        this.isShowCropper = false

       //先将显示图片地址清空，防止重复显示
        this.option.img = ''

       //将剪裁后base64的图片转化为file格式
        let file = this.convertBase64UrlToBlob(data)
        file.name = this.fileUpload.name

        //将剪裁后的图片执行上传
        this.uploadFile(file).then(res => {
          this.form.content = res.file_id    //将上传的文件id赋值给表单from的content
        })

      })
    },

    // 将base64的图片转换为file文件
    convertBase64UrlToBlob(urlData) {
      let bytes = window.atob(urlData.split(',')[1]);//去掉url的头，并转换为byte
      //处理异常,将ascii码小于0的转换为大于0
      let ab = new ArrayBuffer(bytes.length);
      let ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/jpeg' });
    }}}
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
  padding-top: 50px;
  height: 1000px;
  background-color: #eee;
}
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
      // border-radius: 50%;
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
</style>
