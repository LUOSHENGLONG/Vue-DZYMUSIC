<template>
    <div class="container">
      <!--广告 -->
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
      <!-- 详细内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9">
        <!-- 导航栏 -->
        <ol class="breadcrumb">
          <li><a href="#"><span class="glyphicon glyphicon-home"></span>&nbsp;首页</a></li>
          <li><a href="#">合成器</a></li>
          <li class="active">Ableton 用户福利：来自 Huston Singletary 的经典合成器音 的经典合成器音源 Singularities 免费下载</li>
        </ol>
        <section class="main-content">
          <div class="main-title">
            <h2>{{ infoData.title}}</h2>
          </div>
          <div class="main-info">
            <ul class="message">
              <li><span class="glyphicon glyphicon-user"></span>发布人</li> 
              <li><span class="glyphicon glyphicon-time"></span>2018-12-12</li>
              <li><span class="glyphicon glyphicon-eye-open"></span>120浏览</li>
              <li>
                <a href="#" @click="like($event)">
                <span ref="likeSpan" :class="isLike"></span>59收藏
                </a>
              </li>
              <li>
                <span class="qrcode glyphicon glyphicon-qrcode"></span>
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

            <p class="post-content-text">曾获得美国公告牌音乐奖最佳乡村巡演奖的美国著名乡村音乐歌手
              <span class="intexthighlight">Kenny Chesney</span>
               在其“ trip around the sun” 巡演中使用了sE V7 MC1音头。至于为什么使用以及效果如何
              我们采访了此次巡演舞台工程师Chris Rabold和与Kenny共事18年的监控工程师Phillip "SidePhill" Robinson一起来听一听他们的声音。<br><br>
            </p>
            
            <p class="post-content-text">Kenny Chesney此次巡演舞台工程师Chris Rabold：</p>
            <blockquote>
              <p class="post-content-text">  “我知道sE,我一直在用sE RF(反射器),之后sE MC1上市，我身边的Ken "POOCH" Van Druten和Alex，他们是我在Justin Bibier演唱会上的工作伙伴，他们都在玩MC1，Andy Meyer也很喜欢这款音头，并在Justin Timberlake的巡演中用到了它，这让我觉得有机会我一定要试试，刚好这次在Kenny的演唱会中用到，果然没让我失望，演出非常成功!”</p>
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
                  <a href="https://pan.baidu.com/share/init?surl=7wNYgLQ3hszRcrOV44HDQg" target="_blank">
                    https://pan.baidu.com/share/init?surl=7wNYgLQ3hszRcrOV44HDQg
                  </a>
                  <br>
                  提取码: <span ref="tqm" id="tqm">xhsh</span>&nbsp;&nbsp;
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
                   解压密码: <span ref="jymm" id="jymm">无</span>  &nbsp;&nbsp;

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
        <section class="comment">
          <!-- 标题 -->
          <section class="section-title techniques-title clearfix">
            <h2>评论区</h2>
            <div class="main-comment">
              <div class="comment-head">
                <span class="comment-count">1234评论</span>
              </div>
            </div>
          </section>
          <!-- 发表评论 -->
          <div class="comment-sendDiv">
            <div class="comment-send ">
              <div class="user-face">
                <img class="user-head" src="../../asset/icon/微信.png">
              </div>
              <div class="textarea-container">
                <i class="ipt-arrow"></i>
                <textarea cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" class="ipt-txt">
                </textarea>
                <button type="submit" class="comment-submit">发表评论</button>
              </div>
            </div>
          </div>
          <!-- 评论列表 -->
          <div class="comment-list">
            <div class="list-item reply-wrap">
              <div class="user-face">
                <a href="#" target="_blank">
                <img src="../../asset/icon/微信.png" alt="">
                </a>
                
                <div class="hot-follow">
                  <button class="follow-btn">关注</button>
                </div>
              </div>
              <div class="con">
                <div class="user">
                  <a href="#" target="_blank" class="name vip-red-name">舞法天女麦迪文</a>
                  <p class="text">风暴英雄会胜利吗？应该不会了。——黄旭东</p>
                </div>
                <div class="info">
                  <span class="floor">#123</span>
                  <span class="plad">
                    来自<a href="#" target="_blank">安卓客户端</a>
                  </span>
                  <span class="time">2018-12-21 21:04</span>
                  <span :ref="`like`+1" @click="commentLike(1)" class="like ">
                    <i class="fa fa-thumbs-o-up"></i>
                    <span :ref="`commentLikeCount`+1">1793</span>
                  </span>
                  <span ref="hate" @click="commentHate(1)" class="hate "><i class="fa fa-thumbs-o-down"></i></span>
                  <span class="reply btn-hover btn-highlight">回复</span>
                  <div class="operation">
                    <div @click="showOpera(1)" class="spot"><i class="fa fa-ellipsis-v"></i></div>
                    <div :ref="`operaList`+1" class="opera-list">
                      <ul>
                        <li class="blacklist">加入黑名单</li>
                        <li class="report">举报</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="replay-box">
                  <div class="replay-item reply-wrap">
                    <a href="#" target="_blank" class="reply-face">
                      <img class="reply-face-img" src="../../asset/icon/微信.png" alt="">
                    </a>
                    <div class="replay-con">
                      <div class="user">
                        <a href="#" target="_blank" class="name vip-red-name">Matatatatatatata</a>
                        
                        <span class="text-con">你这是奶呢还是反奶呢123。</span>
                      </div>
                      <div class="info">
                        <span class="time">2018-12-21 21:28</span>
                        <span :ref="`like`+2" @click="commentLike(2)" class="like ">
                          <i class="fa fa-thumbs-o-up"></i>
                          <span :ref="`commentLikeCount`+2">24</span>
                        </span>
                        <span class="reply btn-hover">回复</span>
                        <div class="operation btn-hover btn-hide-re">
                          <div  @click="showOpera(2)" class="spot"><i class="fa fa-ellipsis-v"></i></div>
                          <div :ref="`operaList`+2" class="opera-list" style="display: none;">
                            <ul>
                              <li class="blacklist">加入黑名单</li>
                              <li class="report">举报</li></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <!-- 第二个评论 -->
          
        </section>
      </div>
      <!-- 右侧数据排行 -->
      <!-- 最新文章 -->
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs">
        <div class="mediaRight">
          <div class="list-group">
            <div class="right-title">
              <span class="last-article glyphicon glyphicon-bookmark hidden-sm"></span>
              <p class="hot-title">&nbsp;最新文章</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item, index) of rankData" :key="item.id">
                <div class="zhx"></div>
                <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p>
                <a ref="rankA" href="#" class="list-group-item">
                  <p :ref="`rankTitle`+item.id" @mouseout="stopScroll(item.id)" @mouseover="scrollTitle(item.id)" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <!-- 下载排行 -->
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs">
        <div class="mediaRight">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
              <p class="hot-title">&nbsp;下载热度排行</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item, index) of rankData" :key="item.id">
                <div class="zhx"></div>
                <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p>
                <a ref="rankA" href="#" class="list-group-item">
                  <p :ref="`rankTitle`+item.id" @mouseout="stopScroll(item.id)" @mouseover="scrollTitle(item.id)" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
</template>
<script>
import Clipboard from 'clipboard';

  export default {
    data() {
      return {
        infoData: {
          id: 1,
          title: "Ableton 用户福利：来自 Huston Singletary 的经典合成器音源 Singularities 免费下载",
          content: ""
        },
        rankData: [
          {
            id:"11",
            title:"Big EDM: EDM Halloween FestivalFestien Festien Festival"
          },
          {
            id:"22",
            title:"Big EDM: EDM Halloween FestivalFestien Festien Festival"
          },
          {
            id:"33",
            title:"Big EDM: EDM Halloween FestivalFestien Festien Festival"
          },
          {
            id:"44",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },{
            id:"55",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },{
            id:"66",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },{
            id:"77",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },{
            id:"88",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },{
            id:"99",
            title:"Big EDM: EDM Halloween Festien Festien Festival"
          },
        ],
        isLike: "glyphicon glyphicon-heart-empty",
        isRed: "black",
        scrollTitleInterval: {},
        clipboard: {},
        isCommentLike: 0,
        isComentHate: 0,
      }
    },
    mounted() {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      const copybtn = this.$refs.btnTips1
      this.clipboard = new Clipboard(copybtn);
      
    },
    methods: {
      showAndhideTips1() {
        const value = this.$refs.tqm.textContent

        $('#btnTips1').popover('show');
        setTimeout(() => {
          $('#btnTips1').popover('hide');
        }, 2000);
      },
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
        console.log(1111111)
      },
      scrollTitle(id) {
        const rankTitle = "rankTitle" + id
        const title = this.$refs[rankTitle]
        const aWidth = $(this.$refs.rankA).width()
        const width = $(title).width()-aWidth+50
        $(title).animate({left: -width+"px"},2000);
      },
      stopScroll(id) {
        const rankTitle = "rankTitle" + id
        const title = this.$refs[rankTitle]
        $(title).stop()
        $(title).animate({left: "-0"},300);
      },
      showOpera(id) {
        const name = `operaList`+id
        const operaList = this.$refs[name];
        const status = operaList.style.display
        if (status === "block") {
          operaList.style.display = "none"
        }else {
          operaList.style.display = "block"
        }
      },
      commentLike(id) {
        const likeColor = `like`+id
        const likeTag = this.$refs[likeColor];
        const like = `commentLikeCount`+id
        const likeCount = this.$refs[like];
        if ( this.isCommentLike === 0) {
          $(likeCount).text(parseInt(likeCount.textContent)+1)
          this.isCommentLike = this.isCommentLike + 1 
          if (this.isComentHate === 1 ){
            this.isComentHate = this.isComentHate -1
            likeTag.style.color = "#00a1d6"
          }else {
            likeTag.style.color = "#99a2aa"
          }
          likeTag.style.color = "#00a1d6"
        }else {
          $(likeCount).text(likeCount.textContent-1)
          this.isCommentLike = this.isCommentLike - 1 

          likeTag.style.color = "#99a2aa"

        }
      },
      commentHate(id) {
        const like = `commentLikeCount`+id
        const likeCount = this.$refs[like];

        const likeColor = `like`+id
        const likeTag = this.$refs[likeColor];

        if (this.isComentHate === 0 ){
          this.isComentHate = this.isComentHate +1
          likeTag.style.color = "#99a2aa"
        }else {
          this.isComentHate = this.isComentHate -1
          likeTag.style.color = "#00a1d6"

        }
        console.log(this.isComentHate)
      }
    },
    watch: {
      isComentHate(newVal, oldVal) {
        
        const hate = this.$refs.hate 
        if ( newVal === 0) {
          hate.style.color = "#99a2aa"
        }else {
          hate.style.color = "#00a1d6"
        }
      }
    },  
    components: {
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
        border-left: none;
        border-bottom: none;
        padding-left: 0;
        margin-bottom: 1px;
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




//评论区
.comment {
  margin: 15px 0;
  padding: 0 15px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #eee;
  .section-title h2 {
    font-size: 24px;
    float: left;
    padding-bottom: 5px;
    margin-bottom: -2px;
    border-bottom: 2px solid;
  }
  .section-title, .techniques-title h2  {
    border-bottom-color: rgb(221, 156, 16);
  
    .main-comment {
      padding: 15px 0;
      .comment-head {
        .comment-count {
          font-size: 20px;
          margin: 0 20px;;
        }
      }
    }
  }
  .comment-sendDiv {
    margin: 15px 0;
    .comment-send {
      .user-face {
        float: left;
        margin: 7px 0 0 5px;
        position: relative;
        .user-head {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
      .textarea-container {
        .textarea {
          
        }
      }
      .textarea-container {
        position: relative;
        margin-left: 85px;
        margin-right: 80px;
        textarea {
          font-size: 16px;
          display: inline-block;
          box-sizing: border-box;
          background-color: #f4f5f7;
          border: 1px solid #e5e9ef;
          overflow: auto;
          border-radius: 4px;
          color: #555;
          width: 100%!important;
          height: 65px;
          transition: 0s;
          padding: 5px 10px;
          line-height: normal;
          resize:none;
        }
        textarea:focus {
          background-color: #fff;
          background-color: #fff !important;
        }
        .comment-submit {
          width: 70px;
          height: 64px;
          position: absolute;
          right: -80px;
          top: 0;
          padding: 4px 15px;
          font-size: 16px;
          color: #fff;
          border-radius: 4px;
          text-align: center;
          min-width: 60px;
          vertical-align: top;
          cursor: pointer;
          background-color: #00a1d6;
          border: 1px solid #00a1d6;
          transition: .1s;
          user-select: none;
          outline: none;
        }
      }
    }
  }
  // 评论列表
  .comment-list {
    .list-item {
      .user-face {
        float: left;
        margin: 24px 0 0 5px;
        position: relative;
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .hot-follow {
          text-align: center;
          position: relative;
          top: 18px;
          .follow-btn {
            width: 48px;
            height: 24px;
            padding: 0;
            color: #fff;
            font-size: 12px;
            background-color: #00a1d6;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            outline: none;
          }
        }
      }
      // ------------------ con ------------------
      .con {
        position: relative;
        margin-left: 85px;
        padding: 22px 0 14px;
        border-top: 1px solid #e5e9ef;
        //------------------ user ------------------
        .user {
          font-size: 12px;
          font-weight: 700;
          line-height: 18px;
          padding-bottom: 4px;
          display: block;
          word-wrap: break-word;
          .text {
            line-height: 20px;
            padding: 2px 0;
            font-size: 14px;
            text-shadow: none;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-word;
          }
        }
        // ------------------ info ------------------
        .info>span {
          margin-right: 20px;
        }
        // ------------------info ----------------------------
        .info {
          color: #99a2aa;
          line-height: 26px;
          font-size: 12px;
          .floor {

          }
          .plad {
            a {
              color: #99a2aa;
            }
          }
          .time {

          }
          .like:hover, .hate:hover {
            i {
              color: #00a1d6;
            }
          }
          .like {
            cursor: pointer;
            i {
              display: inline-block;
              width: 14px;
              height: 14px;
              vertical-align: text-top;
              margin-right: 5px;
              background: url(../../asset/icon/icons-comment.png) no-repeat;
              background-position: -153px -25px;
            }
          }
          .hate {
            cursor: pointer;
            margin-right: 15px;
            i {
              display: inline-block;
              width: 14px;
              height: 14px;
              vertical-align: text-top;
              margin-right: 5px;
              background: url(../../asset/icon/icons-comment.png) no-repeat;
              background-position: -153px -153px;
            }
          }
          .reply {
            padding: 0 5px;
            border-radius: 4px;
            margin-right: 15px;
            cursor: pointer;
            display: inline-block;
          }
          .operation {
            position: relative;
            width: 18px;
            float: right;
            margin-top: 5px;
            margin-right: 0;
            .spot {
              width: 18px;
              height: 18px;
              cursor: pointer;
              background: url(../../asset/icon/icons-comment.png) no-repeat;
              background-position: -151px -280px;
            }
            
            .opera-list {
              display: none;
              position: absolute;
              width: 100px;
              right: 0;
              top: 20px;
              z-index: 10;
              background: #fff;
              box-shadow: 0 0 5px rgba(0,0,0,.2);
              border-radius: 4px;
              color: #222;
              font-size: 14px;
              padding: 10px 0;
              z-index: 999;
              ul {
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                  padding: 0 15px;
                  cursor: pointer;
                  height: 36px;
                  line-height: 36px;
                  transition: all .3s;
                }
                li:hover {
                  background: #00a1d6;;
                  color: #fff;
                }
                .blacklist {

                }
                .report {

                }
              }
            }
          }
        }
        // ---------------replay-box-------------------
        .replay-box {
          .replay-item {
            vertical-align: middle;
            padding: 10px 0;
            .reply-face {
              float: left;
              margin-left: 5px;
              .reply-face-img {
                width: 24px;
                height: 24px;
                border-radius: 50%;
              }
            }
            .replay-con {
              max-width: 85%;
              display: inline-block;
              .user {
                .text-con {
                  font-size: 16px;
                  font-weight: 400;
                  margin-left: 10px;
                }
              }
              .info {
                color: #99a2aa;
                line-height: 26px;
                font-size: 12px;
                width: 100%;
                display: block;
              }
              .info>span {
                margin-right: 20px;
                .like {
                  cursor: pointer;
                  i { 
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    vertical-align: text-top;
                    margin-right: 5px;
                    background: url(../../asset/icon/icons-comment.png) no-repeat;
                    background-position: -153px -25px;
                  }
                }
                .reply {
                  padding: 0 5px;
                  border-radius: 4px;
                  margin-right: 15px;
                  cursor: pointer;
                  display: inline-block;
                }
                .operation {
                  padding: 0;
                  border-radius: 0;
                  margin-right: 0;
                  display: block;
                  position: relative;
                  width: 18px;
                  float: right;
                  margin-top: 5px;
                  margin-right: 0;
                  .spot {
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                    background: url(../../asset/icon/icons-comment.png) no-repeat;
                    background-position: -151px -280px;
                  }
                  .opera-list {
                    display: block;
                    position: absolute;
                    width: 100px;
                    right: 0;
                    top: 20px;
                    z-index: 10;
                    background: #fff;
                    box-shadow: 0 0 5px rgba(0,0,0,.2);
                    border-radius: 4px;
                    color: #222;
                    font-size: 14px;
                    padding: 10px 0;
                    z-index: 999;
                    ul {
                      li {
                        padding: 0 15px;
                        cursor: pointer;
                        height: 36px;
                        line-height: 36px;
                        transition: all .3s;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
    color: #00a1d6;
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
    color: #00a1d6;
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

.comment-sendDiv {
  .comment-send {
    font-size: 18px;
    .textarea-container {
      font-size: 18px;
      .textarea {
      

      }
    }
  }
}
.fa {
      font: normal normal normal 16px/1 FontAwesome;
}
</style>


