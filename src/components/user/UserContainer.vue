<template>
  <div class="container">
    <div class="title">
      <i class="fas fa-info" style="margin-right: 10px;"></i>
      个人中心
    </div>

    <div class="home"  :style="{minHeight: minHeight + 'px'}">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-2 col-sm-2 col-xs-2 col-lg-2 hidden-xs">
          
          <ul class="homeInfo nav nav-tabs" role="tablist">
            <!-- <p class="title"><i class="fas fa-user-circle"></i> 用户中心</p> -->
            <li role="personalInfo">
              <a href="#personalInfo" aria-controls="personalInfo" role="tab" data-toggle="tab">
                <i class="far fa-user-circle" style="font-size:24px;vertical-align: -2px;"></i> 
                &nbsp;个人信息
              </a>
            </li>
            <li @click="showFavorite()" role="myFavorite">
              <a href="#myFavorite" aria-controls="myFavorite" role="tab" data-toggle="tab">
                <i class="fas fa-star-half-alt" style="font-size:24px;vertical-align: -2px;"></i> 
                &nbsp;我的收藏
              </a>
            </li>
            <li @click="showFavorite()" role="myContribute">
              <a href="#myContribute" ref="myContribute" @click="getMyContribute" aria-controls="myContribute" role="tab" data-toggle="tab">
                <i class="fas fa-edit" style="font-size:22px;vertical-align: -2px;"></i> 
                &nbsp;我的投稿
              </a>
            </li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="Tab col-md-10 col-sm-10 col-xs-10 col-lg-10">
          <div class="tab-content">
            <!-- personalInfo -->
            <div role="tabpanel" class="tab-pane active" id="personalInfo">
              
              <div class="personal-info-row">
                <div class="info-left input-group input-group-lg">
                  <span class="input-group-addon" id="nickname">用户名</span>
                  <input v-model="nickname" type="text" class="nickname form-control"  :placeholder="userData.nickname" aria-describedby="sizing-addon1">
                  <!-- <div ref="exitName" class="exitName">用户名已存在</div> -->
                  <span ref="exitName" class="exitName input-group-addon" id="sizing-addon1">可编辑</span>
                </div>

                <div class="info-right input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">密保设置</span>
                  <input type="text" class="form-control" disabled :placeholder="protect" aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1" style="padding: 0 5px; background-color: rgb(79, 192, 141);border-color: rgb(79, 192, 141);">
                    <button @click="goSetting" 
                      class="real-name btn btn-success" 
                      style="display: inline; background-color: rgb(79, 192, 141);font-size:17px;"
                      v-text="protect === '已设置'?'立即修改':'立即设置'">
                    </button>
                  </span>
                </div>
              </div>
              <div class="personal-info-row">
                <div class="info-left input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">邮箱</span>
                  <input type="text" class="form-control" disabled :placeholder="userData.email" aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1">未验证</span>
                </div>

                <div class="info-right input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">实名状态</span>
                  <input type="text" class="form-control" placeholder="未实名" disabled aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1" style="padding: 0 5px; background-color: rgb(79, 192, 141);border-color: rgb(79, 192, 141);">
                    <button @click="binding" class="real-name btn btn-success" style="display: inline; background-color: rgb(79, 192, 141);font-size:17px;">立即实名</button>
                  </span>
                  
                </div>
              </div>

              <div class="personal-info-row">
                <div class="info-left input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">手机号码</span>
                  <input type="text" class="form-control" disabled :placeholder="userData.phone | hiddenPhone" aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1">未验证</span>
                </div>

                <div class="info-right input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">QQ绑定</span>
                  <input type="text" class="form-control" placeholder="未绑定" disabled aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1" style="padding: 0 5px; background-color: rgb(79, 192, 141);border-color: rgb(79, 192, 141);">
                    <button @click="binding" class="real-name btn btn-success" style="display: inline; background-color: rgb(79, 192, 141);font-size:17px;">立即绑定</button>
                  </span>
                  
                </div>
              </div>

              <div class="personal-info-row">
                <div class="info-left input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">注册时间</span>
                  <input type="text" class="form-control" disabled :placeholder="userData.createTime" aria-describedby="sizing-addon1">
                  <span class="input-group-addon" id="sizing-addon1">不可编辑</span>
                  
                </div>

                <div class="info-right input-group input-group-lg">
                  <span class="input-group-addon" id="sizing-addon1">微博绑定</span>
                  <input type="text" class="form-control" placeholder="未绑定" disabled aria-describedby="sizing-addon1">
                  <span  class="input-group-addon" id="sizing-addon1" style="padding: 0 5px; background-color: rgb(79, 192, 141);border-color: rgb(79, 192, 141);">
                    <button @click="binding" class="real-name btn btn-success"  style="display: inline; background-color: rgb(79, 192, 141);font-size:17px;">立即绑定</button>
                  </span>
                  
                </div>
              </div>

              <div class="mybtn">
                <button type="button" @click="savePerInfo" class="btn btn-success" style="background-color: #4fc08d;">更新</button>
              </div>
              <div class="wrap" ref="tips">{{ tips }}</div>
            </div>
            <!-- myFavorite -->
            <div role="tabpanel" class="tab-pane" id="myFavorite">

              <div class="media" v-for="item of data" :key="item.id">
                <div class="media-left media-middle hidden-xs hidden-sm">
                  <router-link target="_blank" class="media-object-a" :to="{name: 'info', params: {type: item.type, id: item.id}}" >
                    <img class="media-object" v-lazy="item.img" alt="...">
                  </router-link>
                </div>
                <div class="media-body">
                  <router-link target="_blank" :to="{name: 'info', params: {type: item.type, id: item.id}}" :style="item.type | colorFormat">
                  <h4 class="media-heading">
                    <a :style="item.type | colorFormat" @click="label($event,item.id)" class="label">{{item.type | typeFormat}}</a>
                    {{ item.title }}
                  </h4>
                  <span class="mediaContent hidden-xs hidden-sm">{{ item.content }}</span>
                  </router-link>
                  <ul class="message hidden-xs hidden-sm">
                    <li><span class="fas fa-user-edit"></span>{{ item.nickname }}</li> 
                    <li><span class="fas fa-clock"></span>{{ item.releaseTime | dateFormat }}</li>
                    <li><span class="fas fa-window-maximize"></span>{{ item.size | sizeFormat }}</li>
                    
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
              <div ref="noResult" class="noResult" style="width: 100%; height:480px;display: none;margin-top: 50px;text-align: center;">
                <img src="../../images/empty.png" alt="" style="">
              </div>
              <!-- 分页 -->
              <div ref="paginate" class="pageNav" id="pageNav" v-if="isShow">
                <paginate
                  :page-count="Math.ceil(PageCount / 6)"
                  :click-handler="page"
                  :prev-text="`上一页`"
                  :next-text="`下一页`"
                  :container-class="'pagination'"
                  >
                </paginate>
                
              </div>

              
            </div>
            <!-- myContribute -->
            <div role="tabpanel" class="tab-pane" id="myContribute">
              <div class="bs-example" data-example-id="hoverable-table"  v-if="showContribute">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style="width: 60%;text-align: left;padding-left: 20px">文章标题</th>
                      <th style="width: 15%">文章类型</th>
                      <th style="width: 10%">投稿时间</th>
                      <th style="width: 15%">状态、操作</th>
                    </tr>
                  </thead>
                  <tbody v-for="item in userContribute" :key="item.id">
                    <tr v-if="item.isRelease === 1" >
                      <td scope="row" style="text-align: left;padding-left: 20px">
                        <router-link target="_blank" style="color: #fff;" :to="{name: 'info', params: {type: item.type,id: item.id}}">{{ item.title }}

                        </router-link>
                      </td>
                      <td>{{ item.type | typeFormat }}</td>
                      <td>{{ item.contributeTime }}</td>
                      <td>
                        <div>已发布</div>&nbsp;
                        <router-link target="_blank" :to="{name: 'info', params: {type: item.type,id: item.id}}">查看</router-link>
                        <a href="#" @click="deleteMyContribute($event,item.id)" style="color: rgb(255, 106, 106);">删除</a>
                      </td>
                    </tr>
                    <tr v-if="item.isRelease === 0">
                      <td scope="row" style="text-align: left;padding-left: 20px">{{ item.title }}</td>
                      <td>{{ item.type | typeFormat }}</td>
                      <td>{{ item.contributeTime }}</td>
                      <td>
                        <div>待审核</div>&nbsp;
                        <a href="#" @click="deleteMyContribute($event,item.id)">删除</a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
                <div ref="paginate" class="pageNav" id="pageNav" v-if="showContribute">
                <paginate
                  :page-count="Math.ceil(contributePageCount / 10)"
                  :click-handler="contributePage"
                  :prev-text="'上一页'"
                  :next-text="'下一页'"
                  :container-class="'pagination'"
                  >
                </paginate>
              </div> 
              </div>

              
              <div  v-if="!showContribute" ref="noResult" class="noResult" style="width: 100%; height:480px;text-align: center;">
                <img src="../../images/empty.png" alt="">
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
      currentPage: 1,
      nickname: "",
      oldNickname: "",
      userContribute:[],
      active: this.$route.params.active,
      contributePageCount: 1,
      currentContributePage: 1,
      tips: "此功能暂未开通",
      isShow: true,
      showContribute: true,
      protect: "",
      
    }
  },
  mounted() {

    this.minHeight = document.documentElement.clientHeight - 754
    window.onresize = () =>　{
      this.minHeight = document.documentElement.clientHeight - 754
    }

    if( sessionStorage.getItem("user") != null) {
      this.userData = JSON.parse(sessionStorage.getItem("user"))
    } else {
      this.$router.push({path: '/'})
      return
    }
    this.isSetProtect()
    this.getLikeData()
    this.menu()
    let target = "[role='"+ this.active +"']"
    
    $(this.$refs[this.active]).click()
    $(target).addClass("active")
    this.getMyContribute()
  },
  methods: {
    goSetting() {
      this.$router.push({path: '/setting/account',params:{active: 'account'}})
    },
    isSetProtect() {
      axios.post('http://127.0.0.1:3001/isSetProtect',{id: this.userData.id})
      .then((result) => {
        // result.data.code = 0 服务器出租哦 =1 未设置 =2已设置
        console.log(result.data)
        let code = result.data.code
        
        this.protect = result.data.message
        
        
      })
    },
    binding() {
      this.$refs.tips.style.display = "block"
      setTimeout(() => {
        this.$refs.tips.style.display = "none"
      }, 2000);
    },
    deleteMyContribute(e, id) {
      e.preventDefault()
      axios.post('http://127.0.0.1:3001/deleteMyContribute',{id: id})
      .then((result) => {
        this.getMyContribute()
        
      })
    },
    contributePage(e) {
      this.currentContributePage = e
      this.getMyContribute()
    },
    // 获取投稿 
    getMyContribute() {
      if( sessionStorage.getItem("user")) {
        function timestampToTime (cjsj) {
            var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
            var D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate() ) + ' '
            var h = (date.getHours() < 10 ? '0'+ date.getHours() : date.getHours()) + ':'
            var m = (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()) + ':'
            var s = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds()
            return Y+M+D+h+m+s
        }
        let userId = JSON.parse(sessionStorage.getItem("user")).id
        axios.post('http://127.0.0.1:3001/getMyContribute',{userId: userId, currentPage: this.currentContributePage})
        .then((result) => {
          this.contributePageCount = result.data.count[0].count
          this.userContribute = result.data.pageData
          if( this.userContribute.length < 1) {
            this.showContribute = false
            return
          } else {
            this.showContribute = true

          }
          this.userContribute.forEach( item => {
            item.contributeTime = timestampToTime(parseInt(item.contributeTime))
          })
        })

        
      }
    },
    // 回到顶部
    menu() {
      window.scrollTo(0,0);
    },
    // 更换用户名
    savePerInfo() {
      
      if( this.nickname.trim() != "") {
        if( this.oldNickname === this.nickname ) {
          $(".exitName").text("用户名已存在")
          $(".exitName").css("background-color","#ef5b54")
          $(".exitName").css("display","block")
          $(".nickname").focus()
          $(".exitName").animate({"opacity":0},3000, ()=> {
            $(".exitName").css("display","none")
            $(".exitName").animate({"opacity":1},100)
          })
          
          return
        }
        this.oldNickname = this.nickname
        axios.post("http://localhost:3001/updateNickname",
        {
          nickname: this.nickname,
          userId: this.userData.id
        })
        .then(result => {
          if (result.data.code === 0) {
            // this.userData = result.data.user[0]
            // localStorage.setItem("user",JSON.stringify(this.userData))
            let tempDate = JSON.parse(sessionStorage.getItem("user"))
            tempDate.nickname = result.data.nickname
            sessionStorage.setItem("user",JSON.stringify(tempDate))
            this.userData = tempDate
            this.$store.state.user = this.userData
            this.$router.go(0)
            this.$refs.exitName.textContent = result.data.success
          }
          if (result.data.code === 1) {
            this.$refs.exitName.textContent = result.data.error
            this.$refs.exitName.style.color = "#a94442"
            setTimeout(() => {
              this.$refs.exitName.textContent = "可编辑"
              this.$refs.exitName.style.color = "#555"
            }, 2000);
          }
      })
      }else {
          $(".nickname").focus()
      }
    },
    // 我的收藏 分页
    page(e) {
      this.currentPage = e
      this.getLikeData()
      window.scrollTo(0,0);
    },
    // 取消收藏
    cancelLike(id) {
      axios.post("http://localhost:3001/cancelFavorite",
      {
        articleId: id,
        nickname: JSON.parse(sessionStorage.getItem("user")).nickname
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
    // 获取用户收藏数据
    getLikeData() {
      if( sessionStorage.getItem("user") != null) {
        this.userData = JSON.parse(sessionStorage.getItem("user"))
        axios.post("http://localhost:3001/likeData",{nickname: this.userData.nickname, currentPage: this.currentPage})
        .then(result => {
          this.data = result.data.likeData
          this.PageCount = result.data.count.count
          console.log(result.data)
          console.log(this.data)
          if(this.data.length < 1) {
            this.isShow = false
            return
          }else {
            this.isShow = true
          }
          String.prototype.replaceAll = function(s1,s2){ 
            return this.replace(new RegExp(s1,"gm"),s2); 
          }
          let test = /(\")|(\])|(\[)/
          let img = []
          this.data.forEach( item => {
            img = []

            if(item.img === "" | item.img === null) {
              img.push("http://localhost:3001/contribute/1788MUSIC.png")
            }
            item.img = item.img + ""
            item.img = item.img.replaceAll(test,"")
            if(item.img.indexOf(",") > -1) {
              item.img.split(",").forEach( item => {
                img.push("http://localhost:3001" + item)
              })
            }else {
              img.push("http://localhost:3001" + item.img)
            }
            item.img = img[0]
            
          })
        })
      }
      
    },
    showFavorite() {
    },
    del() {
      this.$refs.formEdit.style.display="block"
    },
    editBatch(e) {
      e.preventDefault()
      this.$refs.btnCancel.style.display="block"

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
      this.batchData.forEach(id => {
        this.data.forEach((item,i) => {
          if(item.id === id) {
            this.data.splice(i,1)
          }
        })
      })
    },
    delOne(id) {
      this.data.forEach((item,i) => {
        if(item.id === id) {
          this.data.splice(i,1)
        }
      })
    },
    batData (e) {
      let idIndex = this.batchData.indexOf(e)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.batchData.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.batchData.push(e)
      }
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
    },
    nickname(newVal, oldVal) {
      let len = newVal.replace(/[^\u0000-\u00ff]/g,"aa").length
      if( len > 12) {
        this.nickname = cutString(newVal,12)
      }

      function cutString(str,len,suffix){
        if(!str) return "";
        if(len<= 0) return "";
        if(!suffix) suffix = "";
        var templen=0;
        for(var i=0;i<str.length;i++){
          if(str.charCodeAt(i)>255){
            templen+=2;
          }else{
            templen++
          }
          if(templen == len){
            return str.substring(0,i+1)+suffix;
          }else if(templen >len){
            return str.substring(0,i)+suffix;
          }
        }
              return str;
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
  min-width: 1200px;
  box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
  margin-top: 80px;
  overflow: hidden;
  border-radius: 8px;
  border-top: 3px solid #bcc3caad;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.Tab {
  padding-right: 0;
}
.home {
  margin: 0;
  border-radius: 5px;
  max-width: 100%;
  padding: 0 20px;
  .tagPage {
    height: 100%;
    padding: 20px 0;
    
    ul.homeInfo {
      display: block;
      border: 0;
      width: 180px;
      margin-top: 36px;
      background-color: #fff;
      // border: 1px solid rgba(204, 204, 204, 0.425);
      li:hover {
        background-color: rgba(204, 204, 204, 0.425);
        color: #fff;
      }  
      li {
        width: 180px;
        display: block;
        float: none;
        transform: translateX(0);
        transform: translateY(0);
        transition: all 0.5s ease;
        border-radius: 40px;
        overflow: hidden;
        margin-top: 4px;
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
        background-color: #47b39d;
        a {
          color: #eee;
        }
      }
    }
  }
}

.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #fff;
    cursor: default;
    background-color:  #47b39d;
    // border: 1px solid #ddd;
    border-bottom-color: transparent;
}

.tab-pane {
  width: 100%;
  padding: 20px;
  padding-top: 15px;
  margin-top: 22px;
  // border: 1px solid #eee;
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
  color: #47b39d;
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
  color: #47b39d;
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
  padding: 15px;
  border: 1px solid rgba(126, 126, 126, 0.094);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.094);

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
    color: #444;
    font-size: 16px;
    display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;

  }
}
.media:hover {
  background-color: #fefefe;
  .media-object {
    opacity: 0.7;
    box-shadow: 0 2px 16px #aaa;
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
  margin-bottom: 6px;
  margin-right: 20px;
  position: absolute;
  right: 15px;
  bottom: 0px;
  li {
    list-style: none;
    display: inline-block;
    height: 25px;
    text-align: center;
    margin-right: 15px;
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
  bottom: 8px;
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

.personal-info-row {
  margin-bottom: 30px;
  display: flex;
  flex: 2;
  input[disabled="disabled"] {
    background-color: #fff;
    cursor: default;
    
  }
  .info-left {
    flex: 1;
    width: 49%;
    margin-right: 2%;
    box-shadow: 0 5px 20px #eee;
    position: relative;
    span {
      width: 110px;
      cursor: default;
    }
  }
  .info-right {
    flex: 1;
    width: 49%;
    box-shadow: 0 5px 20px #eee;
    span {
      width: 110px;
    }
  }
}
.btn,.btn:hover,.btn-success:hover,.btn.active {
  border: 0;
  border-radius: 20px;
  font-size: 18px;
}

.mybtn {
  width: 100%;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 0;
  button {
    width: 150px;
    height: 40px;
  
  }
}
@keyframes rotate{
  0%{
    transform: translateX(2px);
  }
  50%{
    transform:  translateX(6px);
  }
  100%{
    transform: translateX(12px);
  }
}

@keyframes bgc{
  0%{
    background-color: #462446;
    opacity: 0.8;
    border-radius: 10px;
    letter-spacing: 8px;
  }
  50%{
    background-color: #eb6b56;
    opacity: 0.5;
    border-radius: 25px;
    letter-spacing: 4px;

  }
  100%{
    background-color: #47b39d;
    opacity: 0.8;
    border-radius: 40px;
    letter-spacing: 8px;
    
  }
}

@keyframes overturn {
  0%{
    transform: rotateY(0deg);
    }
  50%{
    transform: rotateY(180deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}
.active {
  i {
    transition: 0.5s;
    animation: overturn 2s linear infinite alternate;  /*开始动画后无限循环，用来控制rotate*/
  }
  .fa-image, .fa-plus {
    animation: none;
  }
}
//  .fa-cog {
//   transform: rotate(18000deg);
//   transition: all 100s ease;
// }

.fas.fa-user-circle{
  transition: 0.5s;
  animation: rotate 2s linear infinite alternate;  /*开始动画后无限循环，用来控制rotate*/
}



.myContribute{
  background-color: pink;
  height: 600px;;
}

.table {
  text-align: center;
  box-shadow: 0 6px 20px #eee;
  border-radius: 8px;
  overflow: hidden;
  tbody {
    border-top: 0px solid #fff;
    tr{
    background-color: #34495e;
    color: #fff;
    }
    tr:hover {
      background-color: #34495ee0;
    }
  }
  th {
    padding: 12px 0;
    font-size: 18px;
    border: 0;
    text-align: center;
    max-width: 500px;
    background-color: #34495e;
    color: #fff;
  }
  td {
    border: 0;
    font-size: 16px;
    max-width: 500px;
    a {
      color: rgb(142, 229, 238);
    }
  }
}
a {
  text-decoration: none;
}

.wrap{
  position: fixed;
  left: 56%;
  top: 35%;
  background: rgba(0,0,0,.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
  display: none;
  z-index: 99;
}

.bs-example {
  border-top: 3px solid #c0c8cf;
  border-width: 4px;
  border-top-left-radius:2em;
  border-top-right-radius:2em;
}

.title {
    background-color: #f4f4f4;
    font-size: 18px;
    color: #555;
    padding: 10px 0;
    text-align: center;
    
}
.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    
}
</style>
