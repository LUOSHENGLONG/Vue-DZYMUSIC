<template>
  <div class="container">
    <div class="home"  :style="{minHeight: minHeight + 'px'}">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-2 col-sm-2 col-xs-2 col-lg-2 hidden-xs">
          
          <ul class="homeInfo nav nav-tabs" role="tablist">
            <p class="title"><span class="glyphicon glyphicon-user"></span> 设置</p>
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">个人信息</a></li>
            <li @click="showFavorite()" role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">收藏夹</a></li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="Tab col-md-10 col-sm-10 col-xs-10 col-lg-10">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <form class="form-userInfo">
                <div class="form-group">
                  <label for="userName">用户名</label>
                  <input type="text" class="form-control" id="userName" :placeholder="userData.nickname" disabled>
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="text" class="form-control" id="email" :placeholder="userData.email" disabled>
                </div>
                <div class="form-group">
                  <label for="phone">手机号</label>
                  <input type="text" class="form-control" id="phone" :placeholder="userData.phone === '' ? '未填写': 'xx'" disabled>
                </div>
                <div class="form-group">
                  <label for="createTime">注册时间</label>
                  <input type="text" class="form-control" id="createTime" :placeholder="userData.createTime" disabled>
                </div>
                <div class="form-group">
                  <label for="status">实名状态</label>
                  <input type="text" class="form-control" id="status" placeholder="未实名" disabled>
                </div>
                
              </form>
            </div>

            <div role="tabpanel" class="tab-pane" id="profile">

              <div class="media" v-for="item of data" :key="item.id">
                <div class="media-left media-middle hidden-xs hidden-sm">
                  <a href="#">
                    <img class="media-object" :src="item.img" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                    <a href="#" :style="item.type | colorFormat" @click="label($event,item.id)" class="label">{{item.type | typeFormat}}</a>
                    {{ item.title }}
                  </h4>
                  <span class="mediaContent hidden-xs hidden-sm">{{ item.content }}</span>
                  <ul class="message hidden-xs hidden-sm">
                    <li><span class="fas fa-user-edit"></span>发布人</li> 
                    <li><span class="fas fa-clock"></span>{{ item.releaseTime | dateFormat }}</li>
                    <li><span class="fas fa-eye"></span>120浏览</li>
                    
                  </ul>
                </div>
                <button 
                  id="favorite2"
                  @click="cancelLike(item.id)"
                  class="fullStar fas fa-star"
                  title="取消收藏"
                  >
                </button>
              </div>
              <div ref="noResult" class="noResult" style="width: 100%; height:400px;display: none">
                <img src="../../asset/icon/noresult.png" alt="" style="width: 100%; height:400px;">
              </div>
              <!-- 分页 -->
              <div ref="paginate" class="pageNav" id="pageNav">
                <paginate
                  :page-count="Math.ceil(PageCount / 6)"
                  :click-handler="page"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  >
                </paginate>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import laydate from '../../lib/laydate/laydate.js'
import axios from 'axios'
import paginate from "../../asset/jPaginate/jquery.paginate.js"
laydate.render({
  elem: '#birth' //指定元素
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

export default {
  data() {
    return {
      data: [],
      batchData: [],
      minHeight: 0,
      userData: {},
      PageCount: 1,
      currentPage: 1
    }
  },
  mounted() {

    this.minHeight = document.documentElement.clientHeight - 754
    window.onresize = () =>　{
      this.minHeight = document.documentElement.clientHeight - 754
    }

    if( localStorage.getItem("user") != null) {
      this.userData = JSON.parse(localStorage.getItem("user"))
    } else {
      this.$router.push({path: '/'})
    }
    this.getLikeData()
  },
  methods: {
    page(e) {
      this.currentPage = e
      this.getLikeData()
      window.scrollTo(0,0);
    },
    cancelLike(id) {
      axios.post("http://localhost:3001/cancelFavorite",
      {
        articleId: id,
        userId: JSON.parse(localStorage.getItem("user")).id
      })
      .then(result => {
        if( this.currentPage > 1) {
          if( this.PageCount % 6 === 1) {
            if( this.currentPage > 1) {
              this.page(--this.currentPage)
            }
          } else {
            this.getLikeData()
          }
        } else {
          this.getLikeData()
        }
      })
    },
    getLikeData() {
      if( localStorage.getItem("user") != null) {
        this.userData = JSON.parse(localStorage.getItem("user"))
        axios.post("http://localhost:3001/likeData",{userId: this.userData.id, currentPage: this.currentPage})
        .then(result => {
          this.data = result.data.likeData
          this.PageCount = result.data.count.count
          // if( this.PageCount % 6 == 0) {
          //   console.log("this.PageCount % 6")
          //   console.log(this.PageCount % 6)
          //   if( this.currentPage > 1) {
          //     this.currentPage = --this.currentPage
          //     this.page(this.currentPage)
          //   }
          // }
          console.log(result.data.count.count)
        })
      } else {
        this.$router.push({path: '/'})
      }
      
    },
    showFavorite() {
      console.log(111111111111)
    },
    del() {
      this.$refs.formEdit.style.display="block"
    },
    editBatch(e) {
      e.preventDefault()
      this.$refs.btnCancel.style.display="block"
      console.log(this.$refs.btnDelbat)

      this.$refs.btnDelbat.forEach(item => {
        item.style.display="none"
      })
      this.$refs.btnBat.forEach(item => {
        item.style.display="block"
      })

      this.$refs.btnEdit.style.display =　"none"
      this.$refs.btnDel.style.display =　"block"

      this.$refs.btnLab.forEach(item => {
        item.style.display="block"
      })
      
    },
    cancal(e) {
      e.preventDefault()
      this.$refs.btnCancel.style.display="none"
      this.$refs.btnDelbat.forEach(item => {
        item.style.display="block"
      })
      this.$refs.btnBat.forEach(item => {
        item.style.display="none"
      })

      this.$refs.btnEdit.style.display =　"block"
      this.$refs.btnDel.style.display =　"none"

      this.$refs.btnLab.forEach(item => {
        item.style.display="none"
      })

    },
    bacthDel() {
      console.log(this.batchData)
      this.batchData.forEach(id => {
        this.data.forEach((item,i) => {
          if(item.id === id) {
            this.data.splice(i,1)
          }
        })
      })
    },
    delOne(id) {
      console.log(id)
      this.data.forEach((item,i) => {
        if(item.id === id) {
          this.data.splice(i,1)
        }
      })
    },
    batData (e) {
      console.log(e)
      let idIndex = this.batchData.indexOf(e)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.batchData.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.batchData.push(e)
      }
      console.log(this.batchData)
    }
  },
  components: {
  },
  watch: {
    PageCount(newVal, oldVal) {
      if(newVal === 0) {
        this.$refs.paginate.style.display = "none"
        this.$refs.noResult.style.display = "block"
      } else {
        this.$refs.paginate.style.display = "block"
        this.$refs.noResult.style.display = "none"
      }
    }
  }
}


</script>



<style lang="scss" scoped>
@import '../../asset/jPaginate/css/style.css';

@import'../../lib/laydate/theme/default/laydate.css';
.container {
  padding: 0;
  // min-width: 1200px;
  
}
.Tab {
  padding-right: 0;
}
.home {
  margin: 0;
  border-radius: 5px;
  max-width: 100%;
  .tagPage {
    height: 100%;
    padding: 20px 0;
    
    ul.homeInfo {
      display: block;
      border: 0;
      background-color: #fff;
      border: 1px solid rgba(204, 204, 204, 0.425);
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
        background-color: #337ab7;
        a {
          color: #eee;
        }
      }
    }
  }
}
.title {
  span {
  }
  font-size: 18px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #fff;
    cursor: default;
    background-color:  #337ab7;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}

.tab-pane {
  width: 100%;
  padding: 20px;
  border: 1px solid #eee;
  background-color: #fff;
  
}
form.form-userInfo {
  background-color: #fff;
  padding: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 10px 0;
    max-width: 33%;
    min-width: 33%;
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
    max-width: 60%;
    min-width: 100px;;
  }
  input[disabled] {
    background-color: #fff;
    border: none;
    box-shadow: none;
    cursor: default;
  }

  
}
.rightBorder {
  padding: 0;
  
}

input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset;}

ul.jilu {
  text-align: right;
  padding: 0 20px;
  margin: 0;
  li {
    list-style: none;
    display: inline;
    padding: 0 5px;
    span {
      padding-right: 3px;
    }
  }
}

.media {
  background-color: #fefefe;
  padding-bottom: 0;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  .media-body {

    .media-left {
    padding: 0;
    width: 100%;
      
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.664);
      .media-heading {
        width: 100%;
        padding: 10px;
        color: rgba(0, 0, 0, 0.8);
        font-size: 16px;
        margin-bottom: 0px;
      }

      .xhx {
        width: 100%;
        height: 3px;
      }
    }
    p {
      margin: 10px;
      margin-bottom: 0;
      padding-left: 170px;
      color: rgba(0, 0, 0, 0.664);
    }
    img {
      float: left;
      width: 150px;
      height: 100px;
      margin: 10px;
      vertical-align: middle;
    }
  }
  }
}

.mediaRight{
  background-color: #fefefe;
  border-radius: 5px;
  
}


.row {
  margin: 0 auto;
  height: 100px;
  .form-control {
    width: 100px;
    border-left: none
  }
}



#color-input-red +label{
  display: none;
  
  cursor: pointer;
  font-size: 36px;
  margin: 0 10px;
  
}
 
/*当input框为选中状态时，lable标签的样式，其中在css选择时，“：”表示当前input框的值，即checked；
      该部分主要对显示的“对号”的大限居中方式，显示颜色进行了设置*/
.btn-delbat:checked +label::before{
  color: #337ab7;
  font-size: 36px;
  margin: 0;

}

.btn-delbat +label{
  display: none;
  cursor: pointer;
  font-size: 36px;
  margin: 0;
  
}
 
/*当input框为选中状态时，lable标签的样式，其中在css选择时，“：”表示当前input框的值，即checked；
      该部分主要对显示的“对号”的大限居中方式，显示颜色进行了设置*/
.btn-delbat:checked +label::before{
  color: #337ab7;
  font-size: 36px;
  margin: 0;

}

input[type=checkbox]{
  visibility: hidden;
  width: 0;
  height: 0;
  // display: none;
}

form.form-search {
  display: inline;
  
}


// 去除button点击边框样式
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;          
}

.media {
  position: relative;
  border: 0;
  padding: 15px 10px 5px 8px;
  border-bottom: 1px solid #eee;

}
.media-object {
  width: 220px;
  height: 140px;
}
.edit {
  width: 220px;
  height: 140px;
}
.media-body {
  .media-heading {
    padding-top: 0;
    padding-bottom: 4px;
    color: #428BD1;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
  }
  span.mediaContent {
    font-size: 16px;
    display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;

  }
}
.media:hover {
  background-color: #fefefe;
  .media-object {
    opacity: 0.7;
  }
  .media-heading {
    color: rgb(43, 101, 151);
    cursor: pointer;
  }
  span.mediaContent {
    cursor: pointer;
    
  }
}
.label {
  font-size: 100%;
  float: left;
  width: 58px;
  height: 22px;
  margin-top: 0px;
  margin-right: 5px;
  line-height: 16px;
  font-size: 14px;
}
.message {
  text-align: right;
  vertical-align: middle;
  padding: 0 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-right: 20px;
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
.fullStar {
  position: absolute;
  right: 0;
  bottom: 5px;
  font-size: 30px;
  color: #337ab7;
  background: none;
  border: none;
}
//去除点击button outline轮廓
button, 
button:focus, 
button.active {
  outline: none !important;
}

//分页
.pageNav {
  background-color: #fff;
  text-align: center;
  .pagination {
    padding: 0;
    text-align: right;
    vertical-align: middle;
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
        outline: none;
        span {
          font-size: 18px;
          padding: 0;
          margin-top: 3px;
        }
      }
    }
  }
}
</style>
