<template>
    <div class="container">
      <!--广告 -->
      
      <!-- 详细内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9">
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
            </ul>
          </div>
        </section>
      </div>
      <!-- 右侧数据排行 -->
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs ">
        <div class="mediaRight">
          <div class="list-group">
            <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
            <span ref="hotTitle" class="hot-title hidden-sm">&nbsp;下载热度排行</span>
            <ul class="rightUl">
              <li v-for="(item, index) of rankData" :key="item.id">
                <div class="zhx"></div>
                <span class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </span>
                <a ref="rankA" href="#" class="list-group-item">
                  <span :ref="`rankTitle`+item.id" @mouseout="stopScroll(item.id)" @mouseover="scrollTitle(item.id)" class="rank-title">{{ item.title }}</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
    </div>
</template>
<script>
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
          },
        ],
        isLike: "glyphicon glyphicon-heart-empty",
        isRed: "black",
        scrollTitleInterval: {},
      }
    },
    mounted() {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      
    },
    methods: {
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

body, textarea, input, select, section, span {
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

.container {
  padding: 0;
  margin-top: 20px;
  
  //广告内容
  .main-content {
    width: 100%;
    height: 600px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 20px 79px 65px 70px;
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
        padding-bottom: 0;
        margin: 10px 0;
        
        li {
          list-style: none;
          display: inline-block;
          height: 25px;
          text-align: center;
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
        }
        
      } 
    }
  }
  .ad-container {
    .ad {
      width: 100%;
      height: 100px;
      background-color: #aaa;
      border-radius: 5px;
      margin:15px 0;
    }
  }
  //页面左边 显示数据
  .left {
    padding: 0;
    .mediaLeft {
      .media {
        background-color: #fff;
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
        .hot-logo, .hot-title {
          margin: 20px 5px 0 20px;//上 右 下 左
          font-size: 22px;
        }
        .hot-logo {
          color: #d9534f;
        }
        .hot-title {
          margin-left: 0;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
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




</style>


