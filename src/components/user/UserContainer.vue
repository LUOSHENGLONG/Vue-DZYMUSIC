<template>
  <div class="container">
    <div class="home"  :style="{minHeight: minHeight + 'px'}">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-2 col-sm-2 col-xs-2 col-lg-2">
          
          <ul class="homeInfo nav nav-tabs" role="tablist">
            <p class="title"><span class="glyphicon glyphicon-user"></span> 设置</p>
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">个人信息</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">收藏夹</a></li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="Tab col-md-10 col-sm-10 col-xs-10 col-lg-10">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <form class="form-userInfo">
                <div class="form-group">
                  <label for="userName">用户名</label>
                  <input type="text" class="form-control" id="userName" placeholder="Email" disabled>
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" disabled>
                </div>
                <div class="form-group">
                  <label for="phone">手机号</label>
                  <input type="text" class="form-control" id="phone" placeholder="Email" disabled>
                </div>
                <div class="form-group">
                  <label for="createTime">注册时间</label>
                  <input type="text" class="form-control" id="createTime" placeholder="Email" disabled>
                </div>
                <div class="form-group">
                  <label for="status">实名状态</label>
                  <input type="text" class="form-control" id="status" placeholder="未实名" disabled>
                </div>
                
              </form>
            </div>

            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="userLike container hidden-xs ">
                <div class="leftLike leftLike-first col-md-11 col-sm-11 col-xs-11 col-lg-11">
                  <form action="#" class="form-search">
                    <select name="sel" id="sel" class="form-control">
                      <option value="synth">全站</option>
                      <option value="synth">合成器</option>
                      <option value="synth">采样包</option>
                      <option value="synth">效果器</option>
                      <option value="synth">教程</option>
                      <option value="synth">宿主</option>
                    </select>
                    
                    <input type="text" placeholder="请输入搜索内容" name="search"  class="form-control">
                    <button class="btn btn-primary btn-search">搜索</button>
                    <div class="divEdit hidden-sm">
                     <button class="btn btn-danger btn-batch" @click="editBatch($event)">批量操作</button>
                     <button ref="btnCancel" class="btn btn-danger btn-cancal" @click="cancal($event)">取消</button>

                    </div>
                  </form>
                </div>

                <div class="rightEdit col-md-1 col-sm-1 col-xs-1 col-lg-1">
                  <button ref="btnEdit" class="btn-edit btn btn-default" disabled>&nbsp;操作&nbsp;</button>
                  <button ref="btnDel" class="btn-del btn btn-danger" @click="bacthDel()">&nbsp;删除&nbsp;</button>
                </div>
              </div>

              <div class="userLike container" v-for="item of data" :key="item.id">
                <div class="leftLike col-md-11 col-sm-11 col-xs-11 col-lg-11">
                  <div class="media">
                    <div class="media-body">
                      <div class="media-left media-middle">
                        <a href="#">
                          <h4 class="media-heading">
                            {{ item.title }}
                          </h4>
                          <div class="xhx"></div>
                          <img class="media-object hidden-xs hidden-sm" src="../../images/lunbotu1.jpg" alt="...">
                          <p class="hidden-xs hidden-sm">
                          简介我们周围都是幽灵，诡计和魔法！“EDM 万圣节”是由来自Big EDM团队的熟练哥布林和吸血鬼组成的神秘包。
                          包含超过 500 MB 的内容和糖果以及超过 280 个文件。在这个产品中你会发现 8 个令人震惊的构造套件（提供 MIDI、预置）
                          和 80 多个可怕的鼓采样以及旋律采样。Sylenth1、Spire和Serum的预置让这个包更加恐怖
                          </p>
                        </a>
                        <div class="info hidden-xs hidden-sm hidden-md">
                          <ul class="jilu">
                            <li><span class="glyphicon glyphicon-user"></span>发布人</li> 
                            <li><span class="glyphicon glyphicon-time"></span>两天前</li>
                            <li><span class="glyphicon glyphicon-eye-open"></span> 120浏览 </li>
                            <li><a href="#"><span class="glyphicon glyphicon-heart-empty"></span>59收藏</a></li>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rightEdit col-md-1 col-sm-1 col-xs-1 col-lg-1">
                  <form action="#" class="edit" ref="formEdit">
                    <!-- <input id="color-input-red" type="checkbox" name="color-input-red" value="#f0544d" /> -->
                    <!-- <label  for="color-input-red" class="glyphicon glyphicon-remove-circle"></label > -->
                    <!-- <button type="button" class="glyphicon glyphicon-remove-circle" data-toggle="tooltip" data-placement="bottom" title="删除"></button> -->
                    <input ref="btnDelbat" type="button" class="btn-delbat btn btn-danger" value="删除" @click="delOne(item.id)">
                    <input ref="btnBat"  name="check" type="checkbox" class="btn-delbat btn btn-danger" :id="item.id" value="删除" :checked="batchData.indexOf(item.id)>=0" @click="batData(item.id)">
                    <label ref="btnLab" :for="item.id" class="glyphicon glyphicon-ok-circle"></label>
                  </form>
                </div>
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

laydate.render({
  elem: '#birth' //指定元素
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

export default {
  data() {
    return {
      data: [
        {
          id: 1, 
          title: "[1万圣节风格EDM采样包+Sylenth1/Serum/Spire预置]Big EDM: EDM Halloween Festival"
        },
        {
          id: 2, 
          title: "[2万圣节风格EDM采样包+Sylenth1/Serum/Spire预置]Big EDM: EDM Halloween Festival"
        },
        {
          id: 3, 
          title: "[3万圣节风格EDM采样包+Sylenth1/Serum/Spire预置]Big EDM: EDM Halloween Festival"
        }
        ],
      batchData: [],
      minHeight: 0
    }
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 754
    window.onresize = () =>　{
      this.minHeight = document.documentElement.clientHeight - 754
    }
  },
  methods: {
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
  }
}


</script>



<style lang="scss" scoped>

@import'../../lib/laydate/theme/default/laydate.css';
.container {
  padding: 0;
  min-width: 800px;
  
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
  .media-left {
  padding: 0;
    
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.664);
      .media-heading {
        width: 100%;
        padding: 10px;
        color: rgba(0, 0, 0, 0.8);
        background-color: rgba(238, 238, 238, 0.303);
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

.mediaRight{
  background-color: #fefefe;
  border-radius: 5px;
  
}

// 焦点hover 过渡效果  start
.media:hover {
  box-shadow: 0 0 10px #eee inset, 0 0 10px #ccc;
}

.media:hover .xhx {
  background-color: #337ab7;
  transform: translateX(0%);
  transition: all 0.5s ease;
}

.media:hover img {
  transform: scale(1.03,1.03);
  transition: all 1s ease;
  
}

.media:hover{
  form.edit {
    background-color: #f8f8f8;
  }
}

.row {
  margin: 0 auto;
  height: 100px;
  .form-control {
    width: 100px;
    border-left: none
  }
}

.userLike {
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  .leftLike.leftLike-first {
    text-align: center;
    .row {
      display: inline-block;
      width: 100%;
      height: 100%;
      div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        div {
          width: auto;
          height: 100%;
          input {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .leftLike {
    padding: 0;
    .form-search {
      float: right;
      width: 100%;
      vertical-align: bottom;
      select {
        display: inline-block;
        width: auto;
        padding: 0 2%;
        margin: 3px 0;
        text-align: center;
        text-align-last: center;
        option {
          text-align: center;
          padding: 0 0 20px 0;
        }
      }
      input {
        margin: 3px 0;
        display: inline-block;
        width: auto;
      }
      button.btn-search {
        margin-top: -2px;
      }
      div.divEdit {
        float: right;
        width: auto;
        
        margin-top: 4px;
        button.btn-batch {
          margin-right: 5px;
        }
        button.btn-cancal {
          float: right;
          display: none;
        }
      }
    }
  }
  .rightEdit {
    width: 10%;
    height: 100%;
    text-align:center;
    
    form.edit {
      padding: 0;
      text-align: center;
      //display: none;
      button {
        background-color: #fff;
        border-radius: 50%;
        border: none;
        font-size: 36px;
        padding: 0;

      }
      button:focus {
        border: none;
        outline: none;
      }
      button:hover {
        color: #d43f3a;
      }
    }
    button.btn-del {
      display: none;
    }
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
</style>
