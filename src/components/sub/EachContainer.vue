<template>
    <div class="container">
      <!--广告 -->
      
      <div class="ad-container col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
      <!-- 合成器内容 -->
      <div class="left col-sm-9 col-md-9 col-lg-9">
        
        <div class="mediaLeft">
          <ol class="breadcrumb">
            <li><router-link to="/"><span class="glyphicon glyphicon-home"></span>&nbsp;首页</router-link></li>
            <li class="active">{{navType}}</li>
          </ol>
          <div class="media" v-for="item of data" :key="item.id">
            <div class="media-body">
              <div class="media-left media-middle">
                <div class="Content">
                  <router-link  :to="`/`+item.type+`/info/`+item.id">
                    <!-- <h4 class="media-heading">
                      <a href="#" :style="item.type | colorFormat" @click="label($event,item.id)" class="label">{{item.type | typeFormat}}</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                        {{item.id}}---{{ item.title }}
                    </h4>
                    <div class="xhx"></div>
                    <img class="media-object hidden-xs hidden-sm" :src="item.img" alt="...">
                    <p class="pDiv hidden-xs hidden-sm">
                        {{ item.content }}
                    </p> -->
                    <div class="imgDiv">
                      <img class="media-object hidden-xs hidden-sm" :src="item.img" alt="...">
                    </div>
                    <div class="titleDiv">
                      <a href="#" :style="item.type | colorFormat" @click="label($event,item.id)" class="label">{{item.type | typeFormat}}</a>
                      <h4 class="media-heading">{{item.id}}---{{ item.title }}</h4>
                    </div>
                    <div class="contentDiv">
                      <p class="pDiv hidden-xs hidden-sm">
                        {{ item.content }}
                      </p>
                    </div>
                  </router-link>

                </div>
                <div class="info hidden-xs hidden-sm">
                  <ul class="message">
                    <li><span class="glyphicon glyphicon-user"></span>发布人</li> 
                    <li><span class="glyphicon glyphicon-time"></span>两天前</li>
                    <li><span class="glyphicon glyphicon-eye-open"></span>120浏览</li>
                    <li>
                      <a href="#" @click="like($event)">
                      <span ref="likeSpan" :class="isLike"></span>{{item.like}}收藏
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            </div>
          </div>
          
          <div ref="noResult" class="noResult" style="width: 100%; height:400px;display: none">
            <img src="../../asset/icon/noresult.png" alt="" style="width: 100%; height:400px;">
          </div>
          <!-- 分页 -->
          <div ref="paginate" class="pageNav" id="pageNav">
            <!-- <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </li>
              </ul>
            </nav> -->

            <paginate
              :page-count="Math.ceil(PageCount / 10)"
              :click-handler="page"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination'"
              >
            </paginate>
            
          </div>
        </div>
      </div>
      <!-- 右侧数据排行 -->
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
    methods: {
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
        const width = $(title).width()-aWidth+50
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
  //标题
  
  .breadcrumb {
    border: 1px solid #eee;
    border-bottom: 0;
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
    padding-right: 10px;
    .mediaLeft {
      .media {
        background-color: #fff;
        padding-bottom: 0;
        border: 1px solid #eee;
        border-bottom: none;
        margin: 0;
        .media-body {
          position: relative;
          height: 100%;
          padding-bottom: 10px;
          .media-left {
            
            padding: 0;
            .Content:hover {
              .media-heading {
                color: rgb(43, 101, 151);
              }
            }
            
            //发布内容详细信息 发布标题 内容 图片
            .Content:hover {
              .imgDiv {
                img {
                  border-left: 5px solid #337ab7;
                  opacity: 0.8;
                }
              }
              .titleDiv {
                .media-heading {
                  color: rgb(47, 103, 151);
                }
              }
            }
            .Content {
              width: 100%;
              height: 100%;
              text-decoration: none;
              color: rgba(0, 0, 0, 0.664);
              
              .imgDiv {
                img {
                  padding: 0 0 0 4px;
                  border-left: 5px solid #fff;
                  float: left;
                  width: 220px;
                  height: 140px;
                  margin: 0px 10px 0px 6px;
                  vertical-align: middle;
                }
              
              }
              .titleDiv {
                margin: 10px 10px 4px 10px;
                .label {
                  font-size: 100%;
                  float: left;
                }
                .media-heading {
                  display: inline;
                  padding-top: 0;
                  padding: 15px 10px 0px 10px;
                  padding-bottom: 4px;
                  color: #428BD1;
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 22px;
                }
              }
              .contentDiv {
                .pDiv {
                  padding: 0;
                  font-size: 16px;
                  display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;
                  margin-right: 15px;
                }
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
                margin-bottom: 3px;
                position: absolute;
                right: 15px;
                bottom: 0px;
                li {
                  list-style: none;
                  display: inline-block;
                  width: 90px;
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
            
          }  
        }
        
      }
      
      //分页
      .pageNav {
        background-color: #fff;
        text-align: center;
        border: 1px solid rgba(204, 204, 204, 0.397);
        .pagination {
          padding: 0;
          margin: 15px 0;
          text-align: right;
          vertical-align: middle;
          padding: 0 10px;
          padding-bottom: 0;
          li {
            height: 40px;
            width: 50px;
            padding: 0 3px;
            list-style: none;
            display: inline-block;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
              border-radius: 5px;
              font-size: 18px;
              text-align: center;

              span {
                font-size: 18px;
                padding: 0;
                margin-top: 3px;
              }
            }
          }
        }
      }

    }
  }
  //页面右边显示排行情况
  .right {
    padding: 0;
    .mediaRight{
      background-color: #fefefe;
      border-radius: 5px;
      margin-bottom: 15px;
      .list-group {
        border: 1px solid #eee;
        
        padding-left: 0;
        margin-bottom: 1px;
        background-color: #fff;
        .right-title {
          background-color: #F7F7F7;
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



</style>


