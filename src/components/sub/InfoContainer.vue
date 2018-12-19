<template>
    <div class="container">
      <!--广告 -->
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="ad">
          合成器
        </div>
      </div>
      <!-- 合成器内容 -->
      <div class="left col-sm-8 col-md-8 col-lg-8">
        <div class="info">
          <h3>{{ id }}</h3>
        </div>
      </div>
      <!-- 右侧数据排行 -->
      <div class="right col-sm-4 col-md-4 col-lg-4 hidden-xs">
        <div class="mediaRight">
          <div class="list-group">
            <ul class="rightUl">
              <li>
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Big EDM: EDM Halloween Festival</h4>
                  <p class="list-group-item-text hidden-xs hidden-sm">简介我们周围都是幽灵，诡计和魔法！“EDM 万圣节”是由来自Big</p>
                </a>
              </li>
              <li>
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Big EDM: EDM Halloween Festival</h4>
                  <p class="list-group-item-text hidden-xs hidden-sm">简介我们周围都是幽灵，诡计和魔法！“EDM 万圣节”是由来自Big</p>
                </a>
              </li>
              <li>
                <a href="#" class="list-group-item">
                  <h4 class="list-group-item-heading">Big EDM: EDM Halloween Festival</h4>
                  <p class="list-group-item-text hidden-xs hidden-sm">简介我们周围都是幽灵，诡计和魔法！“EDM 万圣节”是由来自Big</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        newsInfo: {},
        id: this.$route.params.id,
      }
    },
    created (){
      this.getNewsInfo();
    },
    mounted (){
      
    },
    methods: {
      getNewsInfo() {
        this.newsInfo = {id:1,title:"ssssssssss",content:"contextssssssss"}
      }
    },
    components: {
    }
  }
</script>
<style lang="scss" scoped>



.synthesizerContainer {
  margin: 20px 0;
}
.container {
  padding: 0;
}


.ad {
  width: 100%;
  height: 100px;
  background-color: #aaa;
  border-radius: 5px;
  margin:15px 0;
}

.media {
  background-color: #fff;
  padding-bottom: 0;
  border-radius: 5px;
  border: 1px solid #eee;
  margin-bottom: 10px;
  .media-left {
  padding: 0;
    
    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.664);
      .media-heading {
        width: 100%;
        padding: 10px;
        color: rgba(0, 0, 0, 0.8);
        background-color: rgba(238, 238, 238, 0.303);
        margin-bottom: 0;
        font-size: 16px;
      }

      .xhx {
        width: 100%;
        height: 3px;
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

.mediaRight{
  background-color: #fefefe;
  border-radius: 5px;
  
}

// 焦点hover 过渡效果  start
.media:hover {
  box-shadow: 0 0 10px #eee inset, 0 0 10px #ccc;
  background-color: #fff;
}
.media:hover h4{
  background-color: #fff;

}


.media:hover .xhx {
  background-color: #337ab7;
  transform: translateX(0%);
  transition: all 1s ease;
}

.media:hover img {
  transform: scale(1.03,1.03);
  transition: all 1s ease;
  
}



// 焦点hover 过渡效果  end

.list-group[data-v-2be6cba0] {
  padding-left: 0;
  margin-bottom: 1px;
  background-color: #fff;
}

.list-group[data-v-2be6cba0][data-v-2be6cba0] {
  padding-left: 0;
  margin-bottom: 1px;
  background-color: #fff;

}

.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
    z-index: 2;
    color: rgba(0, 0, 0, 0.664);
    background-color: #fff; 
    border: none;
}
ul {
  text-align: right;
  vertical-align: middle;
  padding: 0 10px;
  padding-bottom: 0;
  margin-bottom: 0;
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
.mediaRight {
  border-radius: 5px;
  margin-bottom: 20px;
}
.rightUl {
  padding-bottom: 10px;
  border: 1px solid #eee;
  li:last-child a{
    border-bottom: 1px solid #fff;
  }
  li {
    display: inline-block;
    border: none;
    padding-top: 10px;
    width: 100%;
    height: 100%;
    a {
      display: block;
      border: none;
      padding: 5px;
      border-bottom: 1px solid rgba(238, 238, 238, 0.603);
      border-radius: 3px;
      border-left: 5px solid #fff;
    }
    
    a:hover {
      background-color: #fff;
      border-bottom: 1px solid #fff;
      border-left: 5px solid #337ab7;

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


.bottom {
  background-color: #eee;
}

// 分页
.pageNav:hover {
  background-color: rgba(241, 241, 241, 0.1);

}

.pageNav {
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 0.397);
  .pagination {
    padding: 0;
    margin: 15px 0;
    li {
      height: 40px;
      width: 50px;
      padding: 0 3px;
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

</style>


