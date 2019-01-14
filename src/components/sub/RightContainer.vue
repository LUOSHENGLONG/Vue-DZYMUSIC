<template>
  <div class="rightContainer">
    <div class="mediaRight" ref="downloadRank">
          <div class="list-group">
            <div class="right-title">
              <span class="hot-logo glyphicon glyphicon-stats hidden-sm"></span>
              <p class="hot-title">&nbsp;最新文章</p>
            </div>
            <ul class="rightUl">
              <li v-for="(item) of rightData1" :key="item.id">
                <!-- <div class="zhx"></div> -->
                <!-- <p class="rank-num hidden-sm hidden-md">&nbsp;{{ index+1 }}. </p> -->
                <a ref="rankA" target="_blank" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                <!-- <router-link :to="`/`+item.type+`/info/`+item.id" id="rankA" ref="rankA" href="#"  class="list-group-item"> -->
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
                <!-- <p class="rank-num hidden-sm hidden-md">&nbsp;{{ index+1 }}. </p> -->
                <a ref="rankA" target="_blank" href="#" @click="intoInfo($event,item.id,item.type)" class="list-group-item">
                <!-- <router-link :to="`/`+item.type+`/info/`+item.id" ref="rankA" href="#" class="list-group-item"> -->
                  <p :ref="`rankTitleLike`+item.id" @mouseout="stopScroll(item.id,'Like')" @mouseover="scrollTitle(item.id,'Like')" class="rank-title">{{ item.title }}</p>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      scrollTitleInterval: {},
      rightData1: JSON.parse(localStorage.getItem("rightData1") || []),
      rightData2: JSON.parse(localStorage.getItem("rightData2") || []),
      

    }
  },
  mounted() {
    this.getData1()
    this.getData2()
  },
  methods: {
    getData1() {
      axios.post("http://localhost:3001/rightData1",{currentPage: this.currentPage, keyword: this.keyword})
      .then(result => {
        if(result != null) {
          this.rightData1 = result.data.data
        }
      })
    },
    getData2() {
      axios.post("http://localhost:3001/rightData2",{currentPage: this.currentPage, keyword: this.keyword})
      .then(result => {
        if(result != null) {
          this.rightData2 = result.data.data
        }
      })
    },
    intoInfo(e, id, type) {
      e.preventDefault()
      this.$router.push({path: `/${type}/info/${id}`})
      this.$emit("switch",id)
    },
    stopScroll(id,type) {
      const rankTitle = "rankTitle" + type + id
      const title = this.$refs[rankTitle]
      $(title).stop()
      $(title).animate({left: "-0"},300);
    },
    scrollTitle(id,type) {
      const rankTitle = "rankTitle" + type + id
      const title = this.$refs[rankTitle]
      const aWidth = $("#rankA").width()
      const width = $(title).width()-aWidth+60
      $(title).animate({left: -width+"px"},2000);
    },
  }
}
</script>
<style lang="scss" scoped>

 //页面右边显示排行情况
  .right {
    padding: 0;
    .mediaRight{
      background-color: #fefefe;
      border-radius: 5px;
      margin-bottom: 15px;
      box-shadow: 5px 6px 13px rgba(0, 0, 0, 0.094);
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
          padding: 0 15px 15px 5px;
          margin-bottom: 0px;
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
              width: 100%;
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
</style>

