<template>
  <footer class="footer ">
    <div class="container">
      <div id="news" class="col-md-12 col-lg-12 col-xs-12  col-sm-12">
        <div class="favicon"></div>
        <div class="inner">
          <h3><label for="member_email">订阅我们的月刊 (中文)</label></h3>
          <form class="newsletter-form">
            <input class="newsletter-input" v-model="email" type="email"  id="member_email"  placeholder="邮件地址">
            <input class="button newsletter-button" @click="confirmEmail" type="button" value="订阅"  id="member_submit">
          </form>
          <p ref="emailTips" class="emailTips">
            你可以在 <a href="https://news.vuejs.org" target="_blank">网易云</a> 翻阅往期的 issue，也可以收听 podcast。
          </p>
        </div>
        <div class="showcase-examples l-center l-longshadows ">
          <button @click="showWechat()" class="button button-action button-box button-giant button-longshadow-left">
            <i class="fa fa-wechat"></i>
          </button>

          <button @click="goWeibo" class="button button-caution button-box button-raised button-giant button-longshadow">
            <i class="fa fa-weibo"></i>
          </button>

          <button @click="goQq" class="button button-primary button-box button-giant button-longshadow-left">
            <i class="fa fa-qq"></i>
          </button>

          <button @click="goYoutube" class="button button-caution button-box button-giant button-longshadow-right button-longshadow-expand">
            <i class="fa fa-youtube-square"></i>
          </button>
          <!-- <button @click="goTwitter" class="button button-primary button-box button-giant button-longshadow-left button-longshadow-expand">
            <i class="fa fa-twitter"></i>
          </button>
          <button @click="goFacebook" class="button button-primary button-box button-giant button-longshadow-right button-longshadow-expand">
            <i class="fa fa-facebook-official"></i>
          </button> -->
          <button @click="goIns" class="ins button button-caution button-box button-giant button-longshadow-left">
            <i class="fa"></i>
          </button>
          <button @click="goBilibili" class="bilibili button button-primary button-box button-giant button-longshadow-left">
            <i class="fa"></i>
          </button>
        </div>

        <div ref="btnPopup" class="btn-popup">
          <div class="title">
            <h3>扫描二维码<span @click="hiddenWechat()" class="closeSpan glyphicon glyphicon-remove"></span></h3>
          </div>
          <div ref="qrcode" class="qrcode">
            <img ref="qrcodeImg" src="../../images/qrcodesmall.png" alt="">
          </div>
        </div>
      </div>

      <div class="row footer-top col-md-12 col-lg-12 col-xs-12  col-sm-12">
        <div class="col-md-4 col-lg-4">
            <img class="logo" src="../../asset/icon/logo.png">
          <p>我们一直致力于为广大音乐制作人提供更多的优质资源！</p>
        </div>
        <div class="col-md-8  col-lg-7 col-lg-offset-1"  style="text-align: center;">
          <div class="row about" style="text-align: center">
            <div class="col-sm-2">
              <h4>关于</h4>
              <ul class="list-unstyled">
                <li><router-link target="_blank" to="/aboutMe">关于我们</router-link></li>
                <li><router-link target="_blank" to="/copyright">版权中心</router-link></li>
                <!-- <li><a href="/links/">友情链接</a></li> -->
                <!-- <li><a href="/hr/">招聘</a></li> -->
              </ul>
            </div>
            <div class="col-sm-2">
              <h4>订阅我们</h4>
              <ul class="list-unstyled">
                <li><a target="_blank" href="https://weibo.com/u/6725785449/home">微博</a></li>
                <li><router-link to="/help">公众号</router-link></li>
                <li><a target="_blank" href="http://space.bilibili.com/380735644?">哔哩哔哩</a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UC-zwZZMXX34hGRanbZ6rMDg">Youtube</a></li>
                <li><a target="_blank" href="https://www.instagram.com/1788music">Instagram</a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <h4>联系方式</h4>
              <ul class="list-unstyled">
                <li><a href="JavaScript: void(0)" @click="showWechat()" target="_blank">微信公众号</a></li>
                <!-- <li><a href="#" target="_blank">电话号码</a></li> -->
                <li><a href="https://weibo.com/u/6725785449" target="_blank">新浪微博</a></li>
                <li><router-link to="/help">电子邮件</router-link></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <h4>快捷导航</h4>
              <ul class="list-unstyled">
                <li><router-link to="/" target="_blank">首页</router-link></li>
                <li><router-link to="/synthesizer" target="_blank">合成器</router-link></li>
                <li><router-link to="/effects" target="_blank">效果器</router-link></li>
                <li><router-link to="/samplePack" target="_blank">采样包</router-link></li>
                <li><router-link to="/contribute" target="_blank">投稿</router-link></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <h4>赞助</h4>
              <ul class="list-unstyled">
                <li><router-link to="/sponsor" target="_blank">微信</router-link></li>
                <li><router-link to="/sponsor" target="_blank">支付宝</router-link></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <h4>帮助</h4>
              <ul class="list-unstyled">
                <li><router-link to="/help" target="_blank">寻求帮助</router-link></li>
                <li><router-link to="/sponsor" target="_blank">发送反馈</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row footer-bottom col-md-12 col-lg-12 col-xs-12  col-sm-12">
        <ul class="list-inline text-center">
          <li><a href="#" target="_blank"></a></li><li>Copyright © 2018-2019 1788MUSIC</li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
;
  export default {
    data() {
      return {
        email: "",
      }
    },
    methods: {
      goWeibo() {
        window.open("https://weibo.com/u/6725785449")
      },
      goQq() {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=2085203270&site=qq&menu=yes")
      },
      goYoutube() {
        window.open("https://www.youtube.com/channel/UC-zwZZMXX34hGRanbZ6rMDg")
      },
      goTwitter() {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=2085203270&site=qq&menu=yes")
      },
      goFacebook() {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=2085203270&site=qq&menu=yes")
      },
      goIns() {
        window.open("https://www.instagram.com/1788music/")
      },
      goBilibili() {
        window.open("http://space.bilibili.com/380735644")
      },
      showWechat() {
        const nowTime = new Date().getTime();   
        const div = this.$refs.btnPopup
        const clickTime = $(div).attr("ctime");  
        //禁止连续点击按钮
        if( clickTime != 'undefined' && (nowTime - clickTime < 1000)){
          return false;
        }else {
          $(div).attr("ctime",nowTime);
          const qrcodeImg = this.$refs.qrcodeImg
          const status = div.style.display
          if (status === "block"){
            this.hiddenWechat()
          }else {
            $(div).animate({height: "250px"},1200)
            $(qrcodeImg).animate({height: "200px",width: "200px"},1200)
            div.style.display = "block"
          }
        } 
      },
      hiddenWechat() {
        const div = this.$refs.btnPopup
        const qrcodeImg = this.$refs.qrcodeImg
        $(qrcodeImg).animate({height: "0px",width: "0px"},1000)
        $(div).animate({height: "0px"},1000)

        setTimeout(() => {
          div.style.display = "none"
        }, 1000);
      },
      confirmEmail() {
          //正则 邮箱验证
          const emailConfirm = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
          //验证邮箱不匹配
          const emailTips = this.$refs.emailTips

          if( !emailConfirm.test(this.email) ) {
            $(emailTips).text("请输入正确的邮箱地址")
            emailTips.style.color = "#FF6A6A"
            setTimeout(() => {
              emailTips.style.color = "#555"
              $(emailTips).text("你可以在 网易云 翻阅往期的 issue，也可以收听 podcast。")
            }, 5000);
            return
          }
          this.axios.post("/api/submitsubscription",{email: this.email})
          .then( result => {
            if( result.data.code != null) {
              if( result.data.code === 1 ) {
                $(emailTips).text(result.data.message)
                emailTips.style.color = "#47b39d"
                setTimeout(() => {
                  $(emailTips).text("你可以在 网易云 翻阅往期的 issue，也可以收听 podcast。")
                  emailTips.style.color = "#555"
                }, 5000);
              } 
              if( result.data.code === 0 ) {
                $(emailTips).text(result.data.message)
                emailTips.style.color = "#FF6A6A"
                setTimeout(() => {
                  $(emailTips).text("你可以在 网易云 翻阅往期的 issue，也可以收听 podcast。")
                  emailTips.style.color = "#555"
                }, 5000);
              }
            }
          })
      }
    },
    watch: {
      
    },
    
  }
</script>
<style lang="scss" scoped>

// 解决 input自动提示补全 背景黄色
input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset !important;}

.ins {
  // background-color: #f8374a;
  background-image: url(../../asset/icon/ins.png);
  background-size: cover;
}
.bilibili {
  background-image: url(../../asset/icon/bili.png);
  background-size: 70%;
  background-position: 11px 6px;
  background-repeat: no-repeat;
}
.ins:hover {
  opacity: 0.6;
}
button {
  margin-bottom: 10px;
}
.btn-popup {
  width: 100%;
  height: 0px;
  display: none;
.title {
    .closeSpan {
      margin-left: 20px;
    }
    .closeSpan:hover {
      cursor: pointer;
      color: #337ab7;
    }
  }
  .qrcode {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
    }
  }
}

.emailTips {
  padding: 10px;
  margin: 0;
}

.footer {
    color: #777;
    padding: 30px 0 0 0;
    border-top: 1px solid #e5e5e5;
    margin-top: 70px;
    background-color: #fff;
    li {
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.692);
      }
      a:hover {
        color: #7645b8;

      }
    }
}
a {
  text-decoration: none;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}

input {
  outline: 0;
}

#news {
  position: relative;
  padding: 2px 20px 70px;
  text-align: center;
}

#hero .inner, #news .inner {
    max-width: 1260px;
    margin: 0 auto;
}
h1, h2, h3, h4, strong {
    font-weight: 600;
    color: #2c3e50;
}

#news .newsletter-form {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    box-sizing: border-box;
}
#news .newsletter-input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 80px 10px 20px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 16px;
}
#news .newsletter-button.button {
    position: absolute;
    padding: 0 20px;
    margin: 0;
    height: calc(100% - 8px);
    right: 4px;
    top: 4px;
}

a.button, input.button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #34495e;
}
p {
    word-spacing: 0.05em;
}

.logo {
  margin-left: -10px;
  height: 68px;
  width: 280px;
}
.footer-bottom {
  padding: 10px;
  padding-bottom: 0;
  border-top: 1px solid #eee;
}
.footer-top {
  margin-bottom: 20px;
}
.favicon {
  height: 160px;
  background-image: url(/images/favicon.ico);
  background-repeat: no-repeat;
  background-size: 10%;
  background-position-x: 50%;
}
</style>
