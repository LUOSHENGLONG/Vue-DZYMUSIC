<template>
    <div class="container">
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
    margin-top: 20px;
    padding: 30px;

}
.tips {
  text-align: center;
}

.mybtn {
  width: 100%;
  text-align: center !important;
  margin-top: 50px;
  margin-bottom: 0;
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
</style>
