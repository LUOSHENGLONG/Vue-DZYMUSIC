<template>
   <div ref="bottom" class="bottom">
    <div class="container bottom-content">
      <!-- Copyright © 2018 萌未来 | 关于网站 | 版权声明 | 标签汇总 | 文章归档 | 网站地图 | 由 有家主机 & WordPress 强力驱动 Theme by 云落 -->
      <div class="left col-xs-6 col-sm-6 col-md-6  col-lg-6">
        <ul class="leftUl">
          <li><a href="#"><img src="../../asset/icon/微信.png" alt=""></a></li>
          <li><a href="#"><img src="../../asset/icon/微博.png" alt=""></a></li>
          <li><a href="#"><img src="../../asset/icon/BILIBILI.png" alt=""></a></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="left col-xs-6 col-sm-6 col-md-6  col-lg-6">
        <ul class="leftUl">
          <li><a href="#"><img src="../../asset/icon/微信.png" alt=""></a></li>
          <li><a href="#"><img src="../../asset/icon/微博.png" alt=""></a></li>
          <li><a href="#"><img src="../../asset/icon/BILIBILI.png" alt=""></a></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minHeight: 0,
      }
    },
  }
</script>
<style lang="scss" scoped>
ul,li {
  list-style: none;
}
.bottom {
  //727f80
  background-color: #fff;
  width: 100%;
  bottom: 0;
  height: 300px;
  text-align: center;
  margin-top: 10px;

  .bottom-content {
    background-color: #eee;
    padding: 5px;
    height: 100%;
    .left {
      .leftUl {
        padding: 0;
        li {
          display: inline-block;
          margin: 10px;
          width: 25%;
          a {
            display: inline-block;
            width: 100%;
            
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

