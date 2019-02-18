<template>
    <div class="container">
      <!--广告 -->
      
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          <Swiper></Swiper>
        </div>
      </div>
      <!-- 内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9">
        
        <div class="mediaLeft">
          <ol class="breadcrumb" ref="breadcrumb">
            <li><router-link to="/"><span class="glyphicon glyphicon-home"></span>&nbsp;首页</router-link></li>
            <li class="active">{{navType}}</li>
          </ol>
          
          <div class="media" v-for="item of data" :key="item.id">
            <router-link target="_blank" :to="`/`+item.type+`/info/`+item.id">

            <div class="media-left">
              <router-link target="_blank" :to="`/`+item.type+`/info/`+item.id" class="hidden-xs hidden-sm">
                <img class="media-object"  v-lazy="item.img" data-holder-rendered="true">
              </router-link>
            </div>
            <div class="media-body">
              <h3 class="media-heading">
                <a href="#" :style="item.type | colorFormat" @click="label($event,item.id)" class="label">{{item.type | typeFormat}}
                  <span class="fas fa-caret-right" :style="item.type | arrowsFormat"></span>	
                </a>
                &nbsp;{{ item.title }}
              </h3>
              <p class=" hidden-xs">{{ item.content }}</p>
            </div>

            </router-link>
            <div class="info hidden-xs hidden-sm">
              <ul class="message">
                <li><span class="fas fa-user-edit"></span>{{ item.nickname }}</li> 
                <li><span class="fas fa-clock"></span>{{ item.releaseTime | dateFormat }}</li>
                <li><span class="fas fa-window-maximize"></span>{{ item.size | sizeFormat}}</li>
                
              </ul>
            </div>
          </div>


          <div ref="noResult" class="noResult" style="width: 100%; height:480px;display: none;text-align: center;margin-top: 40px;">
            <img src="../../images/empty.png" alt="">
          </div>
          <!-- 分页 -->
          <div ref="paginate" class="pageNav" id="pageNav">
            <paginate
              :page-count="Math.ceil(PageCount / 10)"
              :click-handler="page"
              :prev-text="'上一页'"
              :next-text="'下一页'"
              :container-class="'pagination'"
              >
            </paginate>
          </div>
        </div>
      </div>
      <!-- 右侧数据排行 -->
      <div class="right col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm hidden-md">
        <!-- 1.下载排行 -->
        <div class="mediaRight" ref="downloadRank">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
              <p class="hot-title">&nbsp;最新文章</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item) of rightData1" :key="item.id">
                <!-- <div class="zhx"></div> -->
                <!-- <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p> -->
                <a ref="rankA" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                  <p :ref="`rankTitleHot`+item.id" @mouseout="stopScroll(item.id,'Hot')" @mouseover="scrollTitle(item.id,'Hot')" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <!-- 2.受欢迎排行 -->
        <div class="mediaRight" ref="likeRank">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-sort-by-order hidden-sm" style="color: rgb(102, 58, 158);"></span>
              <p class="hot-title">&nbsp;下载热度</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item) of rightData2" :key="item.id">
                <!-- <div class="zhx"></div> -->
                <!-- <p class="rank-num hidden-sm">&nbsp;{{ index+1 }}. </p> -->
                <a ref="rankA" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                  <p :ref="`rankTitleLike`+item.id" @mouseout="stopScroll(item.id,'Like')" @mouseover="scrollTitle(item.id,'Like')" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <!-- <RightContainer></RightContainer> -->
      </div>
      
      
      
    </div>
</template>
<script>
import RightContainer from './RightContainer.vue'
import Swiper from '../swiper/AdSwiperContainer.vue'


import paginate from "../../asset/jPaginate/jquery.paginate.js"
  export default {
    data() {
      return {
        isLike: "glyphicon glyphicon-heart-empty",
        isRed: "black",
        scrollTitleInterval: {},
        rightData1: JSON.parse(localStorage.getItem("rightData1") || []),
        rightData2: JSON.parse(localStorage.getItem("rightData2") || []),
      }
    }
    ,
    props: ["data","PageCount","navType"],
    mounted() {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      this.menu()

      
    },
    created() {
      this.getData1()
      this.getData2()
    },
    
    methods: {
      
      getData1() {
        this.axios.post("/api/rightData1",{currentPage: this.currentPage, keyword: this.keyword})
        .then(result => {
          if(result != null) {
            this.rightData1 = result.data.data
          }
        })
      },
      getData2() {
        this.axios.post("/api/rightData2",{currentPage: this.currentPage, keyword: this.keyword})
        .then(result => {
          if(result != null) {
            this.rightData2 = result.data.data
          }
        })
      },
      intoInfo(e, id, type) {
        e.preventDefault()
        this.$router.push({path: `/${type}/info/${id}`})
      },
      hiddenNoResult() {
        this.$refs.noResult.style.display = "none"
      },
      showNoResult() {
        this.$refs.noResult.style.display = "block"
      },
      getCount() {
        
      },
      page(e) {
        this.$emit("currentPage",e)
      },
      menu() {
        window.scrollTo(0,0);
      },
      label(e,id) {
        e.preventDefault();
        this.$router.push({name: 'info', params: {id: id}})
      },
      like(e) {
        e.preventDefault();
        if(this.isLike === "glyphicon glyphicon-heart-empty") {
          this.isLike = "glyphicon glyphicon-heart red"
        }else {
          this.isLike = "glyphicon glyphicon-heart-empty"
        }
      },
      scrollTitle(id,type) {
        const rankTitle = "rankTitle" + type + id
        const title = this.$refs[rankTitle]
        const aWidth = $(this.$refs.rankA).width()
        const width = $(title).width()-aWidth+80
        $(title).animate({left: -width+"px"},2000);
      },
      stopScroll(id,type) {
        const rankTitle = "rankTitle" + type + id
        const title = this.$refs[rankTitle]
        $(title).stop()
        $(title).animate({left: "-0"},300);
      }
    },
    components: {
      RightContainer,
      Swiper,
    },
    watch: {
      data(newVal, oldVal) {
        if(newVal === 0) {
          this.$refs.noResult.style.display = "block"
          this.$refs.paginate.style.display = "none"
        }else {
          this.$refs.noResult.style.display = "none"
          this.$refs.paginate.style.display = "block"
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../../asset/jPaginate/css/style.css';
@media screen and (max-width: 400px) {

  .media {
    padding: 10px !important;
  }
  .media-body {
    padding: 0 !important;
  }
  .media-heading {
    font-size: 16px !important;
    margin-bottom: 0 !important;
  }
  .label {
    font-size: 14px !important;
    vertical-align: 0px !important;
    padding: 2px 6px !important;
    
  }
}

@media screen and (max-width: 1200px) and  (min-width: 992px){
  .container {
    width: 100%;
    margin: 0;
  }
  .left {
    width: 100%;
  }
}

@media screen and (max-width: 992px) and (min-width: 400px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .left {
    width: 100%;

  }
}

body, textarea, input, select, section, h4, li {
    color: rgb(68, 68, 68);
    font-size: 14px;
    line-height: 1.8;
    font-weight: normal;
    font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
}

.red {
  color: #d9534f !important; 
}

a {
  text-decoration: none;
}

.container {
  padding: 0;
  position: relative;
  //广告内容
  .ad-container {
    padding: 0;
    .ad {
      width: 100%;
      height: 100px;
      background-color: #fff;
      margin:15px 0;
    }
  }
  //标题
  
  .breadcrumb {
    background-color: #fdfdfd;
    margin: 0;
    border-radius: 0;
    li {
      font-size: 20px;
      line-height: 42px;
    }
  }
    
  //页面左边 显示数据
  .left {
    padding: 0;
    padding-right: 0px;
    .mediaLeft {  border: 1px solid rgba(0, 0, 0, 0.094);
      box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
      //分页
      .pageNav {
        background-color: #fff;
        text-align: center;
        font-size: 16px;
        
      }
    }
  }
  //页面右边显示排行情况
  .right {
    padding: 0;
    padding-left: 4px;
    .mediaRight{
      background-color: #fefefe;
      border-radius: 5px;
      margin-bottom: 15px;
      box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.094);

      .list-group {
        border: 1px solid #eee;
        
        padding-left: 0;
        margin-bottom: 1px;
        background-color: #fff;
        .right-title {
          background-color: #FdFdFd;
          border-bottom: 1px solid #eaeaea;
          .hot-logo, .hot-title,.last-article {
            font-size: 22px;
            margin: 14px 20px;
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
          padding: 0 10px 0px 5px;
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
                z-index: 0;
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



.pagination>.active>a {
  padding: 20px !important;
}

.media {
  position: relative;
  background-color: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.054),0 1px 10px rgba(0, 0, 0, 0.044) inset;
  padding: 20px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.044);
  border-left: 0;
  border-right: 0;
  border-radius: 4px;
  margin: 0 0 0px;

  .media-left {
    a {
      display: inline-block;
      width: 220px;
      height: 150px;
      overflow: hidden;
      text-align: center !important;
      .media-object {
        display: inline-block;
        height: 100%;
        opacity: 0.8;
        
      }
    }
  }

  .media-body {
    position: relative;
    height: 100%;
    padding-bottom: 0px;
    .media-heading {
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 22px;
      a {
        display: inline-block;
        font-size: 15px;
        line-height: 20px;
        border-radius: 0;
        padding: 2px 10px;
        border-radius: 2px;
        // overflow: hidden;
        vertical-align: 3px;
        position: relative;

        span {
          position: absolute;
          right: -5px;
          top: 5px;
          color: #444;
        }
      }
      
       
    }

    p {
      font-size: 16px;
      color: #444;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      }
  }
  
}
.media:hover {
  .media-object {
    opacity: 1 !important;
    transform: scale(1.1);
    transition: all 1s ease;
  } 
}
//发布详细信息 发布人 发布时间 收藏数 
.info {
  width: 100%;
  height: 100%;
  .message {
    text-align: right;
    vertical-align: middle;
    padding: 0 10px;
    padding-bottom: 0;
    margin-bottom: 0px;
    position: absolute;
    right: 15px;
    bottom: 16px;
    li {
      list-style: none;
      display: inline-block;
      height: 25px;
      margin-right: 5px;
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



</style>


