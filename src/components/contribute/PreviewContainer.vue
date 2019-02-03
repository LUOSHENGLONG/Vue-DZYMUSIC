<template>
    <div class="container" ref="container">
        <div class="title">
          <i class="fas fa-angle-double-left" style="font-size: 20px;"></i>
          &nbsp;投稿预览&nbsp;
          <i class="fas fa-angle-double-right" style="font-size: 20px;"></i>
        </div>
        <div class="shadeLayer" @click="hiddenOrg">
        </div>
        <div class="originImg" ref="originImg" @click="hiddenOrg">
            <img ref="showOrigin" src="http://localhost:3001/contribute/1788MUSIC.png" alt="" title="点击返回">
        </div>
        
        
        <section class="main-content" ref="mainContent">
            <div class="main-title">
            <h2>{{ infoData.title }}</h2>
            </div>
            <div class="main-info">
                <ul class="message">
                    <li><span class="fas fa-user-edit"></span>&nbsp;{{ infoData.nickname }}</li> 
                    <li><span class="fas fa-clock hidden-xs"></span>&nbsp;{{ infoData.time | dateFormat}}</li>
                    <li class="hidden-xs"><span class="fas fa-window-maximize"></span>&nbsp;{{ infoData.size | sizeFormat}}</li>
                </ul>
            </div>
            <div class="post-content mdf_connect">
            <div class="post-content-img" v-for="item of infoData.img" :key="item"> 
                <br>
                <img class="content-img" 
                ref="infoImg"
                alt="" 
                title="点击查看原图" 
                :data-original="item" 
                :src="item" 
                @click="showOrigin(item)"
                style="display: inline-block;">
                <div class="topShade"></div>
                <div class="bottomShade"></div>
                <div class="leftShade"></div>
                <div class="rightShade"></div>
                <br>
            </div>
            <p class="post-content-text post-content-text-content">
                {{ infoData.content }}
            </p>
            <blockquote v-if="infoData.description === ''?false:true">
                <pre class="post-content-text">{{ infoData.description }}</pre>
            </blockquote>
            <div class="video-responsive" v-if="infoData.videoLink === ''?false:true">
                <iframe :src="infoData.videoLink" frameborder="0" allowfullscreen="true"> </iframe>
                <br>
                <hr>
            </div>
            <div class="download">

                <blockquote v-if="infoData.downloadLink === '' ? false:true">
                <p class="post-content-text"> 
                    下载地址：
                    <a :href="infoData.downloadLink" target="_blank"  v-text="infoData.downloadLink === '' ? '无':infoData.downloadLink">
                    {{ infoData.downloadLink }}
                    </a>
                    <br>
                    提取码: <span ref="tqm" id="tqm" v-text="infoData.downloadPassword === '' ? '无':infoData.downloadPassword"></span>&nbsp;&nbsp;
                    <button 
                    @click="showAndhideTips1()" 
                    id="btnTips1" type="button" 
                    class="tqm btn btn-success" 
                    data-toggle="popover" 
                    title="" data-content="已复制"
                    ref="btnTips1"
                    data-clipboard-target="#tqm"
                    v-if="infoData.downloadPassword === '' ? false:true"
                    >复制提取码</button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    解压密码: <span ref="jymm" id="jymm" v-text="infoData.downloadUnzip === '' ? '无':infoData.downloadUnzip">{{infoData.downloadUnzip}}</span>  &nbsp;&nbsp;

                    <button 
                    @click="showAndhideTips2()" 
                    id="btnTips2" type="button" 
                    class="jymm btn btn-success" 
                    data-toggle="popover" title="" 
                    data-content="已复制"
                    ref="btnTips2"
                    data-clipboard-target="#jymm"
                    v-if="infoData.downloadUnzip === '' ? false:true"
                    >复制解压密码</button>

                </p>
                </blockquote>
            </div>
            <div class="description">
                <blockquote>
                <p class="post-content-text"> 
                    1788 MUSIC
                </p>
                </blockquote>
            </div>
            <div style="text-align: center">
              <button class="btn btn-success" @click="close">
                <i class="fas fa-undo"></i>
                关闭本页面返回投稿</button>
            </div>
            </div>
        </section>

    </div>
</template>
<script>

import Clipboard from 'clipboard';
import axios from 'axios'

  export default {
    data() {
      return {
        infoData: {},
        scrollTitleInterval: {},
        clipboard: {},
      }
    },
    created() {
      if(localStorage.getItem("contributeArticle") === null) {
        this.$router.push({path: '/'})
        return
      }
      this.infoData = JSON.parse(localStorage.getItem("contributeArticle"))
    },
    mounted() {
      const copybtn = this.$refs.btnTips1
      this.clipboard = new Clipboard(copybtn);
      this.menu()
      

      //如果图片宽度大于内容宽度 则把img 设置 成 width 100%
      window.onload = () => {

        let content = $(this.$refs.mainContent).width()
        let img = $(this.$refs.infoImg).width()
        if (img > content) {
          $(this.$refs.infoImg).css("width","100%")
        }
      }
      
    if(sessionStorage.getItem("user") === null) {
      this.$router.push({path: '/'})
      return
    }
      
    },
    updated() {
      let content = $(this.$refs.mainContent).width()
      let img = $(this.$refs.infoImg).width()
      if (img > content) {
        $(this.$refs.infoImg).css("width","100%")
      }

      
    },
    
    methods: {
      close() {
        if( localStorage.getItem("contributeArticle") != null ) {
          localStorage.removeItem("contributeArticle")
        }
        window.close()
      },
      hiddenOrg() {
        this.$refs.originImg.style.display = "none"
        $(".shadeLayer").css("display","none")
      },
      showOrigin(src) {
        // window.scrollTo(0,0)
        this.$refs.showOrigin.src = src
        this.$refs.originImg.style.display = "block"
        let clientHeight = $(window).height()
        let imgHeight = this.$refs.showOrigin.height

        let imgWidht = this.$refs.showOrigin.widht


        if (imgHeight < clientHeight) {
          this.$refs.showOrigin.style.top = clientHeight / 2  - imgHeight / 2 + "px"
        }
        this.$refs.originImg.style.height = $(document).height() + "px"
        $(".shadeLayer").css("display","block")
      },
      showFavoriteTips1() {
        $('#favorite1').popover('show');
        
      },
      hiddenFavoriteTips1() {
        $('#favorite1').popover('hide');
      },
      showFavoriteTips2() {
        $('#favorite2').popover('show');
        
      },
      hiddenFavoriteTips2() {
        $('#favorite2').popover('hide');
      },
      
      menu() {
        window.scrollTo(0,0);
      },
      
      
      // 复制提取码按钮
      showAndhideTips1() {
        const value = this.$refs.tqm.textContent

        $('#btnTips1').popover('show');
        setTimeout(() => {
          $('#btnTips1').popover('hide');
        }, 1000);
      },
      // 复制解压密码
      showAndhideTips2() {
      const copybtn = this.$refs.btnTips2
        
        this.clipboard = new Clipboard(copybtn);
        $('#btnTips2').popover('show');

        setTimeout(() => {
          $('#btnTips2').popover('hide');
        }, 1000);
      }
      ,
      
      
    },
    watch: {
    },  
    components: {
    }
  }
</script>
<style lang="scss" scoped>


@media screen and (max-width: 400px) {
  .main-title {
    h2 {
      font-size: 18px !important;
    }
    
  }
  .video-responsive {
    iframe {
      height: 100% !important;
    }
  }
  .main-content {
    padding: 5px 14px !important;
  }
}

@media screen and (max-width: 1200px) and  (min-width: 992px){
  .left {
    width: 100%;
  }
  .video-responsive {
    iframe {
      height: 650px !important;
    }
  }
  .container {
    width: 100%;
    margin: 0;
  }
}

@media screen and (max-width: 600px) and (min-width: 400px) {
  .video-responsive {
    iframe {
      height: 300px !important;
    }
  }
  .left {
    width: 100%;
  }
  .container {
    width: 100%;
    margin: 0;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .video-responsive {
    iframe {
      height: 400px !important;
    }
  }
  .left {
    width: 100%;
  }
  .container {
    width: 100%;
    margin: 0;
  }
  
}

@media screen and (max-width: 992px) and (min-width: 800px) {
  .video-responsive {
    iframe {
      height: 560px !important;
    }
  }
  .left {
    width: 100%;
  }
  .container {
    width: 100%;
    margin: 0;
  }
  
}
.container {
    margin-top: 80px;
    overflow: hidden;
    border-top: 3px solid rgba(88, 57, 57, 0.279);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.red {
  color: #d9534f !important; 
}

a {
  text-decoration: none;
}

body, textarea, input, select, section, li, p {
    color: rgb(68, 68, 68);
    font-size: 14px;
    line-height: 1.8;
    font-weight: normal;
    font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
}

.Glyphicons {
  font-family: "Glyphicons Halflings" !important;
}
//去除点击button outline轮廓
button, 
button:focus, 
button.active {
    outline: none;
}

.container {
  padding: 0;
    position: relative;
  .main-content {
    width: 100%;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    background-color: #fff;
    border: 1px solid #eee;
    padding: 20px 40px 0px 40px;
    
    .main-title {
      text-align: left;
      border-bottom: 1px solid #eee;
      position: relative;
      .title-left {
        position: absolute;
        left: -70px;
        width:0;
        height:0;
        border-width:20px 30px 20px 0;
        border-style:solid;
        border-color:transparent #7645b8 transparent transparent;/*透明 灰 透明 透明 */
        top: 0;
      }
      h2 {
            font-size: 30px;
            border-bottom: 3px solid #7645b8;
            padding-bottom: 18px;
            margin-bottom: -2px;
            font-weight: 700;
            white-space: pre-line;
      }
    }
    .main-info {
      .message {
        text-align: left;
        vertical-align: middle;
        padding: 0;
        margin: 10px 0;
        display: inline-block;
        
        
        li {
          margin-right: 10px;
          list-style: none;
          display: inline-block;
          height: 25px;
          text-align: left;
          color: rgba(0, 0, 0, 0.5);
          font-size: 16px;
          
          a {
            display: inline-block;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.7);
            
            span {
              font-size: 20px;
              padding-left: 5px;
              padding-right: 3px;
              color: rgba(0, 0, 0, 0.5);
            }
          }
          span {
            font-size: 20px;
            padding-left: 5px;
            padding-right: 3px;
          }
          .qrcode {
            color: #337AB7;
          }
        }
        
      } 
      
    }
    .post-content {
      .post-content-text-content {
        // text-indent: 2em;
        border-left: 5px solid #7645b8;
        background-color: #7745b809;
        margin: 30px 0;
        padding: 10px 20px;
      }
      .post-content-text {
        
        font-size: 18px;
        .intexthighlight {
          color: rgb(26, 117, 255);
          line-height: 32.4px;
        }
      }
      .post-content-img {
        text-align: center;
        position: relative;
        overflow: hidden;
        .content-img {
          // width: 100%;
          cursor: pointer;
        }
      }
      blockquote {
        background-color: rgba(238, 238, 238, 0.4);
        p {
          color: rgba(0, 0, 0, 0.9);
        }
      }
      .video-responsive {
        iframe {
          width: 100%;
          height: 720px;
        }
      }
      .download {
        position: relative;
        blockquote {
          background-color: #35b69c11;
          border-color: #0ebd9a;
          p {
            color: #086653;
          }
          // .tqm:hover,.jymm:hover {
          //   color: #449d44;
          //   background-color: #fff;
          //   border-color: #fff;
          // }
        }
      }
      .description {
        blockquote {
          background-color: #3379b70e;
          border-color: #337ab7;
          p {
            color: rgba(0, 0, 0, 0.801);
          }
        }
      }
    }
  }
  //广告内容
  .ad-container {
    padding: 0;
    .ad {
      width: 100%;
      height: 100px;
      background-color: #aaa;
      margin:15px 0;
      box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
      
    }
  }
  
  //页面左边 显示数据
  .left {
    padding: 0;
    // padding-right: 10px;
    .breadcrumb {
      width: 100%;
        height: 100%;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;
      border: 1px solid #eee;
      border-bottom: 0;
      border-radius: 0;
      position: relative;
      
      li {
        font-size: 20px;
        line-height: 42px;
      }
    }
    .mediaLeft {
      .media {
        background-color: #eee;
        padding-bottom: 0;
        border-radius: 5px;
        border: 1px solid #eee;
        margin-bottom: 10px;
        .media-body {
          position: relative;
          .media-left {
            padding: 0;
            .Content:hover {
              .media-heading {
                color: rgb(43, 101, 151);
              }
            }
            //发布内容详细信息 发布标题 内容 图片
            .Content {
              width: 100%;
              height: 100%;
              text-decoration: none;
              color: rgba(0, 0, 0, 0.664);
              .media-heading {
                width: 100%;
                padding: 8px;
                padding-bottom: 4px;
                color: #337AB7;
                background-color: rgba(238, 238, 238, 0.303);
                margin-bottom: 0;
                font-size: 16px;
                font-weight: 700;
                line-height: 20px;
                .label {
                  background-color: #C71D24;
                  display: inline-block;
                  color: #fff;
                  position: absolute;
                  width: 50px;
                  height: 20px;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 16px;
                  text-align: center;
                  padding: 2px;
                  border: 0;
                }
                .label:hover {
                  background-color: rgb(221, 40, 46);

                }
                a {
                  text-decoration: none;
                }
              }
              .xhx {
                width: 100%;
                height: 3px;
              }
              
            }
            //发布详细信息 发布人 发布时间 收藏数 
            .info {
              .message {
                text-align: right;
                vertical-align: middle;
                padding: 0 10px;
                padding-bottom: 0;
                margin-bottom: 0;
                position: absolute;
                right: 15px;
                bottom: 0px;
                li {
                  list-style: none;
                  display: inline-block;
                  width: 80px;
                  height: 25px;
                  text-align: center;
                  color: rgba(0, 0, 0, 0.5);
                  font-size: 14px;
                  a {
                    display: inline-block;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.5);
                    span {
                      font-size: 14px;
                      padding-left: 5px;
                      padding-right: 3px;
                      color: rgba(0, 0, 0, 0.5);
                    }
                  }
                  
                  span {
                    font-size: 14px;
                    padding-left: 5px;
                    padding-right: 3px;
                  }
                  .QR-Code {
                    font-size: 20px;
                    color: #337AB7;
                  }
                  
                }
              }             
            }
            p {
              margin: 10px;
              padding-left: 200px;
              color: rgba(0, 0, 0, 0.664);
            }
            img {
              float: left;
              width: 180px;
              height: 110px;
              margin: 10px;
              vertical-align: middle;
            }
          }  
        }
        
      }
      // 焦点hover 过渡效果 
      .media:hover {
        box-shadow: 0 0 10px #eee inset, 0 0 10px #ccc;
        background-color: #fff;
        .xhx {
          background-color: #337ab7;
          transform: translate(0);
          transition: all .8s linear;
        }
        h4{
          background-color: #fff;
        }
        img {
          transform: scale(1.03,1.03);
          transition: all 1s ease;
        }
      }
      

    }
  }
  //页面左边显示排行情况
  .right {
    padding: 0;
    padding-left: 4px;
    .mediaRight{
      box-shadow: 5px 6px 23px rgba(0, 0, 0, 0.094);
      background-color: #fefefe;
      border-radius: 5px;
      .list-group {
        border: 1px solid #eee;
        padding-left: 0;
        margin-bottom: 15px;
        background-color: #fff;
        .right-title {
          background-color: #fdfdfd;
          border-bottom: 1px solid #eaeaea;
          .hot-logo, .hot-title,.last-article {
            font-size: 22px;
            margin: 10px 20px;
          }
          .hot-logo {
            color: #d9534f;
            margin-right: 0;
          }
          .last-article {
            color: #337ab7;
            margin-right: 0;
          }
          .hot-title {
            margin-left: 10px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.7);
          }
        }
        
        p {
          margin-bottom: 0;
        }
        .hot-title {
          display: inline-block;
          font-size: 24px;
          font-weight: 700;
        }
        
      }
    }
  }
}


div.mdf_connect {
    font-size: 18px;
    height: 100%;
}
.post-content {
    margin: 7px 0 35px 0;
    font-size: 18px;
}








img {
    border: none;
    vertical-align: middle;
}


.text {
    line-height: 20px;
    padding: 2px 0;
    font-size: 16px !important;
    text-shadow: none;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;
}

 p {
    margin: 0;
    padding: 0;
}

 a {
    outline: none;
    color: #337ab7;
    text-decoration: none;
    cursor: pointer;
}

.reply-face {
  text-align: center;
  margin: 0 10px 0 0;
  float: left;
}


 a {
    outline: none;
    color: #337ab7;
    text-decoration: none;
    cursor: pointer;
}
.con {
  .user {
    .name {
      font-size: 14px;
    }
  }
}

.active {
  font-size: 18px !important;
}


.fa {
  font: normal normal normal 16px/1 FontAwesome;
}

.wrap{
  position: fixed;
  left: 50%;
  top:50%;
  background: rgba(0,0,0,.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
  display: none;
}

.emptyStar {
  float: right;
  margin: 10px;
  margin-left: 0;
  font-size: 30px;
  background: none;
  border: none;
}

.fullStar {
  float: right;
  margin: 10px;
  margin-left: 0;
  font-size: 30px;
  color: #337ab7;
  background: none;
  border: none;
}

.topShade {
        position: absolute;
        width: 100%;
        height: 15%;
        left: 0;
        top: 0;
        background-image: -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0) 0%, white 500%);
        background-repeat: repeat-x;
    }
    .bottomShade {
        position: absolute;
        width: 100%;
        height: 15%;
        left: 0;
        bottom: 0%;
        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, white 500%);
        background-repeat: repeat-x;
    }
    .leftShade {
        position: absolute;
        width: 8%;
        height: 100%;
        left: 0;
        top: 0;
        background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, white 500%);
        background-repeat: repeat-y;
    }
    .rightShade {
        position: absolute;
        width: 8%;
        height: 100%;
        right: 0;
        top: 0;
        background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 500%);
        background-repeat: repeat-y;
    }

p{ 
  word-wrap:break-word;
  word-break:break-all;
}

.jymm, .tqm {
  border-radius: 40px;
  background-color: #47b39d;
  border-color: #47b39d;
  outline: 0;
}

.jymm:hover, .tqm:hover, .jymm:focus, .tqm:focus {
  background-color: #47b39de3;
  border-color: #47b39d;
  outline: 0;
}

.originImg {
  position: fixed;
  background-color: rgba(146, 143, 143, 0.2);
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0 auto;
  text-align: center;
  display: none;
  img {
    position: absolute;
    left: 50%;
    
    transform: translate(-50%),
  }
}



.shadeLayer {
  position: fixed;
  background-color: rgba(146, 143, 143, 0.771);
  width: 100%;
  height: 110%;
  display: none;
  left: 0;
  top: -50px;
  z-index: 99;
  text-align: right;
}

pre {
  background-color: rgba(238, 238, 238, 0.01);
  overflow-x: hidden;
  border: 0;
}

.btn-success,.btn-success:hover,.btn-success:focus,btn-success:active {
  background-color: #47b39d;
  border-color: #47b39d;
  width: 220px;
  height: 60px;;
  border-radius: 60px;
  font-size: 18px;
  margin-top: 40px;
  outline: 0;
}

.title {
    background-color: #f4f4f4;
    font-size: 18px;
    color: #555;
    padding: 10px 0;
    text-align: center;
}
</style>


