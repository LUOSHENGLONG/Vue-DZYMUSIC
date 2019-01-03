<template>
    <div class="container">
      <!--广告 -->
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
      <!-- 详细内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9"  v-if="hackReset">
        <!-- 导航栏 -->
        <ol class="breadcrumb">
          <li><router-link to="/"><span class="glyphicon glyphicon-home"></span>&nbsp;首页</router-link></li>
          <li><router-link :to="`/`+infoData.type">{{infoData.type | typeFormat}}</router-link></li>
          <li class="active">{{ infoData.title }}</li>
        </ol>
        <section class="main-content">
          <div class="main-title">
            <h2>{{ infoData.title}}</h2>
          </div>
          <div class="main-info">
            <ul class="message">
              <li><span class="glyphicon glyphicon-user"></span>{{ infoData.issuer }}</li> 
              <li><span class="glyphicon glyphicon-time"></span>{{ infoData.releaseTime }}</li>
              <li><span class="glyphicon glyphicon-eye-open"></span>{{ infoData.look }}浏览</li>
              <li>
                <a href="#" @click="like($event)">
                <span ref="likeSpan" :class="isLike"></span>{{ infoData.like }}收藏
                </a>
              </li>
              <li>
                <span class="qrcode glyphicon glyphicon-qrcode"></span>
              </li>
              <li>
                <i class="fa fa-star" style="width:50px;height:50px;"></i>
              </li>
            </ul>
          </div>
          <div class="post-content mdf_connect">
            
            <p class="post-content-img">
              <img class="content-img" 
                alt="" 
                data-original="//image.midifan.com/data/attach/album/2018/1218/9219_1545127635_thumb.jpg" 
                src="//image.midifan.com/data/attach/album/2018/1218/9219_1545127635_thumb.jpg" 
                style="display: inline;">
              <br>
            </p>

            <p class="post-content-text">
              <!-- <span class="intexthighlight">Kenny Chesney</span> -->
              {{ infoData.content }}
              <br><br>
            </p>
            
            <!-- <p class="post-content-text">Kenny Chesney此次巡演舞台工程师Chris Rabold：</p> -->
            <blockquote>
              <p class="post-content-text">{{ infoData.description }}</p>
            </blockquote>
            <div class="video-responsive">
              <iframe src="//v.qq.com/txp/iframe/player.html?vid=v0812nmz60u" allowfullscreen="true" frameborder="0"></iframe>
              <iframe src="//player.bilibili.com/player.html?aid=38535307&cid=67736992&page=1" frameborder="0" allowfullscreen="true"> </iframe>
              <br>
              <hr>
            </div>
            <div class="download">
              <blockquote>
                <p class="post-content-text"> 
                  下载地址：
                  <a :href="infoData.downloadLink" target="_blank">
                    {{ infoData.downloadLink }}
                  </a>
                  <br>
                  提取码: <span ref="tqm" id="tqm">{{ infoData.downloadPassword }}</span>&nbsp;&nbsp;
                  <button 
                    @click="showAndhideTips1()" 
                    id="btnTips1" type="button" 
                    class="tqm btn btn-success" 
                    data-toggle="popover" 
                    title="" data-content="已复制"
                    ref="btnTips1"
                    data-clipboard-target="#tqm"
                  >复制提取码</button>
                   &nbsp;&nbsp;&nbsp;
                   解压密码: <span ref="jymm" id="jymm">xxx</span>  &nbsp;&nbsp;

                  <button 
                    @click="showAndhideTips2()" 
                    id="btnTips2" type="button" 
                    class="jymm btn btn-success" 
                    data-toggle="popover" title="" 
                    data-content="已复制"
                    ref="btnTips2"
                    data-clipboard-target="#jymm"
                  >复制解压密码</button>

                </p>
              </blockquote>
            </div>
            <div class="description">
              <blockquote>
                <p class="post-content-text"> 
                  我知道sE,我一直在用sE RF(我知道sE,我一直在用sE R
                  我知道sE,我一直在用sE RF(我知道sE,我一直在用sE RF(
                  F(我知道sE,我一直在用sE RF(我知道sE,我一直在用sE RF(
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
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs">
        <div class="mediaRight">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
              <p class="hot-title">&nbsp;最新文章</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item, index) of rightData1" :key="item.id">
                <div class="zhx"></div>
                <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p>
                <a ref="rankA" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                  <p :ref="`rankTitleHot`+item.id" @mouseout="stopScroll(item.id,'Hot')" @mouseover="scrollTitle(item.id,'Hot')" class="rank-title">{{ item.title }}</p>
                </a>
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
              <li v-for="(item, index) of rightData2" :key="item.id">
                <div class="zhx"></div>
                <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p>
                <a ref="rankA" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                  <p :ref="`rankTitleLike`+item.id" @mouseout="stopScroll(item.id,'Like')" @mouseover="scrollTitle(item.id,'Like')" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
</template>
<script>
import CommentContainer from '../comment/CommentContainer.vue'

import Clipboard from 'clipboard';
import axios from 'axios'

  export default {
    data() {
      return {
        infoData: {},
        
        isLike: "glyphicon glyphicon-heart-empty",
        isRed: "black",
        scrollTitleInterval: {},
        clipboard: {},
        
        id: this.$route.params.id,
        hackReset: true,
        rightData1: JSON.parse(localStorage.getItem("rightData1")|| []),
        rightData2: JSON.parse(localStorage.getItem("rightData2")|| []),
      }
    },
    
    mounted() {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      const copybtn = this.$refs.btnTips1
      this.clipboard = new Clipboard(copybtn);
      this.menu()
      this.getInfoData()

    },
    methods: {
      intoInfo(e, id, type) {
        e.preventDefault()
        // this.$router.go(0)
        this.$router.push({name: `info2`,params: {id: id}})
        this.menu()
      },
      menu() {
        window.scrollTo(0,0);
      },
      getInfoData() {
        axios.post("http://localhost:3001/info",{id: this.id})
        .then(result => {
          this.infoData = result.data.data
        })
      }
      ,
      // 复制提取码按钮
      showAndhideTips1() {
        const value = this.$refs.tqm.textContent

        $('#btnTips1').popover('show');
        setTimeout(() => {
          $('#btnTips1').popover('hide');
        }, 2000);
      },
      // 复制解压密码
      showAndhideTips2() {
      const copybtn = this.$refs.btnTips2
        
        this.clipboard = new Clipboard(copybtn);
        $('#btnTips2').popover('show');

        setTimeout(() => {
          $('#btnTips2').popover('hide');
        }, 2000);
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
      CommentContainer
    }
  }
</script>
<style lang="scss" scoped>

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
button[data-v-a15ca838], 
button[data-v-a15ca838]:focus, 
button.active[data-v-a15ca838] {
    outline: none;
}

.container {
  padding: 0;
  .main-content {
    width: 100%;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 20px 40px 65px 40px;
    .main-title {
      text-align: left;
      border-bottom: 1px solid #eee;
      h2 {
            font-size: 30px;
            border-bottom: 2px solid #7645b8;
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
          .qrcode {
            color: #337AB7;
          }
        }
        
      } 
      
    }
    .post-content {
      .post-content-text {
        font-size: 18px;
        .intexthighlight {
          color: rgb(26, 117, 255);
          line-height: 32.4px;
        }
      }
      .post-content-img {
        text-align: center;
        .content-img {
          width: 100%;
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
          height: 592px;
        }
      }
      .download {
        blockquote {
          background-color: #dff0d8;
          border-color: #449d44;
          p {
            color: #3c763d;
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
          background-color: #f7f7f9;
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
      
    }
  }
  
  //页面左边 显示数据
  .left {
    padding: 0;
    padding-right: 10px;
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
    .mediaRight{
      background-color: #fefefe;
      border-radius: 5px;
      .list-group {
        border: 1px solid #eee;
        padding-left: 0;
        margin-bottom: 15px;
        background-color: #fff;
        .right-title {
          background-color: #F7F7F7;
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
          padding: 0 15px 15px 10px;
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
              left: 5px;
              top: 10px;
              width: 83%;
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
</style>


