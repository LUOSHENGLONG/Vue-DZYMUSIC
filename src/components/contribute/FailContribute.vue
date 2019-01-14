<template>
    <div class="container">
        <div class="submitContribute">
            <img src="../../images/fail.png" alt="">
            <div class="mybtn">
              <button type="button" class="btn btn-success" @click="fail">
                <i class="fas fa-plus"></i>
                继续投稿
              </button>
              <button type="button" class="btn btn-success" @click="myContribute">
                <i class="fas fa-certificate"></i>
                我的投稿
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

    },
    methods: {
        fail() {
            this.$router.push({path: "/contribute"})
        },
        myContribute() {
            this.$router.push({path: "/user"})
        },
    }
}
</script>
<style lang="scss" scoped>
.container {
    height: 600px;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    position: relative;
}
.submitContribute {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding-top: 100px;
  margin-top: 20px;
  transform: translate(100%);
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
