<template>
    <div class="container" ref="container" v-if="switchArticle">
      <div class="shadeLayer" @click="hiddenOrg">
        <!-- <i class="glyphicon glyphicon-remove" style="font-size: 50px;margin-top: 50px;cursor:pointer" @click="hiddenOrg"></i> -->
      </div>
      <div class="originImg" ref="originImg" @click="hiddenOrg">
        <img ref="showOrigin" src="/contribute/1788MUSIC.png" alt="" title="点击返回">
      </div>
      <!--广告 -->
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
      <!-- 详细内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9"  v-if="hackReset">
        <!-- 导航栏 -->
        <ol class="breadcrumb hidden-xs" style="background-color: #fdfdfd;">
          <li><router-link to="/"><span class="glyphicon glyphicon-home"></span>&nbsp;首页</router-link></li>
          <li><router-link :to="`/`+infoData.type">{{infoData.type | typeFormat}}</router-link></li>
          <li class="active">{{ infoData.title }}</li>
        </ol>
        <section class="main-content" ref="mainContent">
          <div class="main-title">
            <h2>{{ infoData.title}}</h2>
          </div>
          
          <div class="main-info">
            <ul class="message">
              <li><span class="fas fa-user-edit"></span>&nbsp;{{ infoData.nickname }}</li> 
              <li><span class="fas fa-clock hidden-xs"></span>&nbsp;{{ infoData.releaseTime | dateFormat }}</li>
              <li class="hidden-xs"><span class="fas fa-window-maximize"></span>&nbsp;{{ infoData.size | sizeFormat}}</li>
              
            </ul>
            <button 
              id="favorite1"
              @click="like()" 
              @mouseover="showFavoriteTips1" 
              @mouseout="hiddenFavoriteTips1" 
              v-if="!isFavorite" 
              class="emptyStar far fa-star" 
              title=""
              data-toggle="like"
              data-placement="bottom"
              data-content="点击收藏"
              >
            </button>
            <button 
              id="favorite2"
              @click="cancelLike()" 
              @mouseover="showFavoriteTips2" 
              @mouseout="hiddenFavoriteTips2" 
              v-if="isFavorite" 
              class="fullStar fas fa-star"
              title=""
              data-toggle="like"
              data-placement="bottom"
              data-content="取消收藏"
              >
            </button>
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
              <!-- <span class="intexthighlight">Kenny Chesney</span> -->
              {{ infoData.content }}
            </p>
            
            <!-- <p class="post-content-text">Kenny Chesney此次巡演舞台工程师Chris Rabold：</p> -->
            <blockquote v-if="infoData.description === '' ? false : true">
              <pre class="post-content-text">{{ infoData.description }}</pre>
            </blockquote>
            <div class="video-responsive" v-if="haveVideoLink">
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
                  1788MUSIC绝对尊重互联网版权，如本文章侵犯你的权益请来信到邮箱1788music@gmail.com。
                  <br>
                  如本站内容资源能为你创造价值，望能赞助我们减轻网站运营负担。
                  <router-link target="_blank" to="/sponsor">
                    <i class="fas fa-angle-double-left" style="font-size: 20px;"></i>
                    赞助我们
                    <i class="fas fa-angle-double-right" style="font-size: 20px;"></i>
                  </router-link>
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <!-- 评论区模块 -->
        <CommentContainer></CommentContainer>
        
      </div>
      <!-- 右侧数据排行 -->
      <!-- 最新文章 -->
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm hidden-md">
        <div class="mediaRight">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
              <p class="hot-title">&nbsp;最新文章</p>
            </div>
            <ul class="rightUl">
              <!-- <li v-for="(item, index) of rightData1" :key="item.id"> -->
              <li v-for="(item) of rightData1" :key="item.id">
                <!-- <div class="zhx"></div> -->
                <!-- <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p> -->
                <router-link target="_blank" :to="`/`+item.type+`/info/`+item.id" class="list-group-item">
                <!-- <a ref="rankA" href="#" target="_blank" @click="intoInfo($event,item.id,item.type)" class="list-group-item"> -->
                  <p :ref="`rankTitleHot`+item.id" @mouseout="stopScroll(item.id,'Hot')" @mouseover="scrollTitle(item.id,'Hot')" class="rank-title">{{ item.title }}</p>
                </router-link>
              </li>
              
            </ul>
          </div>
        </div>

        <div class="mediaRight">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-sort-by-order hidden-sm" style="color: rgb(102, 58, 158);"></span>
              <p class="hot-title">&nbsp;下载热度</p>
            </div>
            <ul class="rightUl">
              <!-- <li v-for="(item, index) of rightData2" :key="item.id"> -->
              <li v-for="(item) of rightData2" :key="item.id">
                <!-- <div class="zhx"></div> -->
                <!-- <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p> -->
                <router-link target="_blank" :to="`/`+item.type+`/info/`+item.id" class="list-group-item">
                <!-- <a ref="rankA" target="_blank" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item"> -->
                  <p :ref="`rankTitleLike`+item.id" @mouseout="stopScroll(item.id,'Like')" @mouseover="scrollTitle(item.id,'Like')" class="rank-title">{{ item.title }}</p>
                </router-link>
              </li>
              
            </ul>
          </div>
        </div>
        <!-- <RightContainer @switch="intoInfo(id)"></RightContainer> -->

      </div>
      <div class="wrap" ref="tips">{{ tips }}</div>
      
    </div>
</template>
<script>
import CommentContainer from '../comment/CommentContainer.vue'
import RightContainer from './RightContainer.vue'

import Clipboard from 'clipboard';

import { setTimeout } from 'timers';

  export default {
    data() {
      return {
        infoData: {},
        scrollTitleInterval: {},
        clipboard: {},
        tips: "",
        id: this.$route.params.id,
        hackReset: true,
        rightData1: JSON.parse(localStorage.getItem("rightData1")|| []),
        rightData2: JSON.parse(localStorage.getItem("rightData2")|| []),
        isFavorite: false,
        haveVideoLink: false,
        isShow: false,
        switchArticle: true

      }
    },
    
    mounted() {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      $(function () {
        $('[data-toggle="like"]').tooltip()
      })
      const copybtn = this.$refs.btnTips1
      this.clipboard = new Clipboard(copybtn);
      this.menu()
      this.getInfoData()
      this.getFavorite()
      

      // 如果图片宽度大于内容宽度 则把img 设置 成 width 100%
      window.onload = () => {

        let content = $(this.$refs.mainContent).width()
        let img = $(this.$refs.infoImg).width()
        if (img > content) {
          $(this.$refs.infoImg).css("width","100%")
        }
      }
      
      
    },
    updated() {
      this.getFavorite()
      let content = $(this.$refs.mainContent).width()
      let img = $(this.$refs.infoImg).width()
      if (img > content) {
        $(this.$refs.infoImg).css("width","100%")
      }

      
    },
    
    methods: {
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
      like() {
        //未登录操作
        if(sessionStorage.getItem("user") === null || this.$store.state.isLogin === false) {
          this.tips = "请登录后操作"
          this.$refs.tips.style.display = "block"
          setTimeout(() => {
            this.$refs.tips.style.display = "none"
          }, 2000);
          return
        }
        
        const mydate = new Date()
        this.axios.post("/api/favorite",
        {
          articleId: this.id,
          nickname: JSON.parse(sessionStorage.getItem("user")).nickname,
        })
        .then(result => {
          $('#favorite1').popover('hide');
          this.getFavorite()
        })

      },
      cancelLike() {
        //未登录操作
        if(sessionStorage.getItem("user") === null || this.$store.state.isLogin === false) {
          this.tips = "请登录后操作"
          this.$refs.tips.style.display = "block"
          setTimeout(() => {
            this.$refs.tips.style.display = "none"
          }, 2000);
          return
        }
        
        const mydate = new Date()
        //UUID
        
        this.axios.post("/api/cancelFavorite",
        {
          articleId: this.id,
          nickname: JSON.parse(sessionStorage.getItem("user")).nickname
        })
        .then(result => {
          $('#favorite2').popover('hide');
          this.getFavorite()
        })


      }
      ,
      intoInfo(e, id, type) {
        e.preventDefault()
        // this.$router.go(0)
        // this.$router.push({name: `info2`,params: {id: id}})
        this.id = id 
        this.switchArticle = false
        this.getInfoData()
        this.menu()
        setTimeout(() => {
          this.switchArticle = true
        }, 1);
        
      },
      menu() {
        window.scrollTo(0,0);
      },
      getInfoData() {
        this.axios.post("/api/info",{id: this.id})
        .then(result => {
          this.infoData = result.data.data
          String.prototype.replaceAll = function(s1,s2){ 
            return this.replace(new RegExp(s1,"gm"),s2); 
          }
          let test = /(\")|(\])|(\[)/
          let img = []
          // test = /\[\]\"/ img路径
          if(this.infoData.img === "" | this.infoData.img === null) {
            return
          }
          // 大小
          if(this.infoData.size !=null ) {
            this.infoData.size = this.infoData.size.toUpperCase().replaceAll(/^\s+|\s+$/g, '')
          }
          this.infoData.img = this.infoData.img.replaceAll(test,"")
          if(this.infoData.img.indexOf(",") > -1) {
            this.infoData.img.split(",").forEach( item => {
              img.push("" + item)
            })
          }else {
            img.push("" + this.infoData.img)
          }
          this.infoData.img = img
          if( this.infoData.videoLink === "" || this.infoData.videoLink === null ) {
            this.haveVideoLink = false
            return
          }

          let videoStart = this.infoData.videoLink.toString().indexOf("/av") + 3
          this.infoData.videoLink = "//player.bilibili.com/player.html?aid=" + this.infoData.videoLink.substring(videoStart,videoStart+8)
          this.haveVideoLink = true
          
        })
      },
      getFavorite() {
        if( sessionStorage.getItem("user") !== null) {
          this.axios.post("/api/getFavorite",{articleId: this.id,nickname: JSON.parse(sessionStorage.getItem("user")).nickname})
          .then(result => {
            if(parseInt(result.data.isFavorite) === 1) {
              this.isFavorite = true
            } else {
              this.isFavorite = false
            }
          })
        }
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
      label(e) {
        e.preventDefault();
      },
      // 滚动右侧排行
      scrollTitle(id,type) {
        const rankTitle = "rankTitle" + type + id
        const title = this.$refs[rankTitle]
        const aWidth = $(this.$refs.rankA).width()
        const width = $(title).width()-aWidth+50
        $(title).animate({left: -width+"px"},2000);
      },
      stopScroll(id,type) {
        const rankTitle = "rankTitle" + type + id
        const title = this.$refs[rankTitle]
        $(title).stop()
        $(title).animate({left: "-0"},300);
      },
      
    },
    watch: {
    },  
    components: {
      CommentContainer,
      RightContainer
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
        .rightUl {
          padding: 0 15px 0px 10px;
          margin-bottom: 15px;
          li:last-child a{
            border-bottom: 1px solid #fff;
          }
          li:hover {
            .zhx {
              background-color: #337ab7;
            }
            
          }
          li {
            display: inline-block;
            border: none;
            padding-top: 0px;
            width: 100%;
            height: 100%;
            position: relative;
            .zhx {
              position: absolute;
              left: -2px;
              top: 20px;
              height: 22px;
              width: 5px;
              border-radius: 5px;
              background-color: #fff;
            }
            a:hover {
              box-shadow: 0 5px 10px rgba(238, 238, 238, 0.295),0 5px 10px rgba(238, 238, 238, 0.295) inset;
              .rank-logo {
                font-size: 28px;
                color: #337AB7;
                transition: all .3s ease;
                
              }
              .rank-title {
                font-size: 20px;
                color: rgba(0, 0, 0, 0.7);
                box-shadow: 0px 10px 40px #f8f8f8;
                transition: all .3s ease-out;
                
              }
             
            }
            .rank-num {
                font-size: 26px;
                color: #337ab7;
                font-weight: 700;
                display: inline-block;
                background-color: #fff;
                left: 10px;
              }
            
            a {
              display: inline-block;
              border: none;
              padding: 5px;
              border-radius: 3px;
              position: relative;
              line-height: 20px;
              left: 4px;
              top: 10px;
              width: 99%;
              height: 40px;;
              overflow:hidden;
              background-color: #fff;
              .rank-title {
                color: rgba(0, 0, 0, 0.8);
                font-size: 18px;
                word-wrap: none;
                white-space:pre;
                position: absolute;
                left: 0px;
                top:0px;
                overflow: hidden;
                height: 40px;
                line-height: 40px;
              }
              .rank-logo {
                position: absolute;
                right: 0;
                font-size: 24px;
                border: none;
                background-color: rgba(0,0,0,0);
              }
            }
            .a.active, .a.active:focus, .a.active:hover {
                z-index: 2;
                color: rgba(0, 0, 0, 0.664);
                background-color: #fff; 
                border: none;
            }
            a:hover {
              background-color: #fff;
            }
            h4 {
              text-align: left;
              font-size: 18px;
            }
            p {
              text-align: left;
            }
          }
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
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>


