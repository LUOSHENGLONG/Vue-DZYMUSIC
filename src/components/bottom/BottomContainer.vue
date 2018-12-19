<template>
   <div ref="bottom" class="bottom">
    <div class="container bottom-content">
      Copyright © 2018 萌未来 | 关于网站 | 版权声明 | 标签汇总 | 文章归档 | 网站地图 | 由 有家主机 & WordPress 强力驱动 Theme by 云落
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
.bottom {
  background-color: #fff;
  width: 100%;
  bottom: 0;
  height: 100px;
  text-align: center;
  margin-top: 10px;

  .bottom-content {
    background-color: #eee;
    padding: 5px
  }
}
</style>

