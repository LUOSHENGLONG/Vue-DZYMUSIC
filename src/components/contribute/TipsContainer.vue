<template>
    <div class="container">
        <div class="title">投稿提示<i class="fas fa-angle-down" style="font-size: 30px;margin-left:20px;vertical-align: -6px;"></i></div>
        <div class="tips">
            <img src="../../images/tips.png" alt="">
            <div class="mybtn">
              <button type="button" class="btn btn-success" @click="success">
                <i class="fas fa-plus"></i>
                返回投稿
              </button>
              
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        window.scrollTo(0,0)
    },
    methods: {
        success() {
            this.$router.push({path: "/contribute"})
        }
    },
}
</script>
<style lang="scss" scoped>
.container {
    text-align: center;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    margin-top: 80px;
    padding: 0;
    border-top: 6px solid #b9bfc59f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-radius: 8px;
    overflow: hidden;
}
.tips {
  text-align: center;
}

.mybtn {
  width: 100%;
  text-align: center !important;
  margin-top: 50px;
  margin-bottom: 50px;
  button {
    width: 160px;
    height: 54px;
    border-radius: 60px;
  }
}

.btn-success {
  background-color: #4fc08d;
  font-size: 20px;
  color: #fff;
}
.btn-success:hover {
  background-color: #51ce95 !important;
}
.btn,
.btn:hover,
.btn-success:focus,
.btn-success.focus,
.btn.active {
  outline: 0 !important;
  border: 0;
}

.title {
    background-color: #f4f4f4;
    font-size: 20px;
    color: #555;
    padding: 10px 0;
}
</style>
