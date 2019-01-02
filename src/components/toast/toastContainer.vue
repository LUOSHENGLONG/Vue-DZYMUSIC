<template>
  <div class="wrap" :style="{showOrHidden}">{{ tips }}</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    tips: {
      type: String,
      require: true
    },
    showOrHidden: {
      type: String,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  position: fixed;
  left: 50%;
  top:50%;
  background: rgba(0,0,0,.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
}
</style>
