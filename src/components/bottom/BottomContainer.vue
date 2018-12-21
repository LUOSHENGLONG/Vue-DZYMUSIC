<template>
    <footer class="footer ">
  <div class="container">
    <div id="news" class="col-md-12 col-lg-12 col-xs-12  col-sm-12">
      <div class="inner">
        <h3><label for="member_email">订阅我们的周刊 (英文)</label></h3>
        <form class="newsletter-form">
          <input class="newsletter-input" type="email" name="member[email]" id="member_email"  placeholder="邮件地址">
          <input class="button newsletter-button" type="submit" value="订阅" name="member[subscribe]" id="member_submit">
        </form>
        <p>
          你可以在 <a href="https://news.vuejs.org" target="_blank">news.vuejs.org</a> 翻阅往期的 issue，也可以收听 podcast。
        </p>
      </div>
      <div class="showcase-examples l-center l-longshadows">
        <button @click="showWechat()" class="button button-action button-box button-giant button-longshadow-left">
          <i class="fa fa-wechat"></i>
        </button>

        <button class="button button-caution button-box button-raised button-giant button-longshadow">
          <i class="fa fa-weibo"></i>
        </button>

        <button class="button button-primary button-box button-giant button-longshadow-left">
          <i class="fa fa-qq"></i>
        </button>

        <button class="button button-caution button-box button-giant button-longshadow-right button-longshadow-expand">
          <i class="fa fa-youtube-square"></i>
        </button>
        <button class="button button-primary button-box button-giant button-longshadow-left button-longshadow-expand">
          <i class="fa fa-twitter"></i>
        </button>
        <button class="button button-primary button-box button-giant button-longshadow-right button-longshadow-expand">
          <i class="fa fa-facebook-official"></i>
        </button>
        <button class="ins button button-caution button-box button-giant button-longshadow-left">
          <i class="fa"></i>
        </button>
      </div>
      <div ref="btnPopup" class="btn-popup">
        <div class="title">
          
          <h3>扫描二维码<span @click="hiddenWechat()" class="closeSpan glyphicon glyphicon-remove"></span></h3>
          
        </div>
        <div class="qrcode">
          <img src="../../asset/icon/qr.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row footer-top">
      <div class="col-md-4 col-lg-4">
        <h4>
          <img src="../../asset/icon/logo.png">
        </h4>
        <p>我们一直致力于为广大音乐制作人提供更多的优质资源！</p>
      </div>
      <div class="col-md-8  col-lg-7 col-lg-offset-1">
        <div class="row about">
          
          <div class="col-sm-2">
            <h4>关于</h4>
            <ul class="list-unstyled">
              <li><a href="/about/">关于我们</a></li>
              <li><a href="/ad/">广告合作</a></li>
              <li><a href="/links/">友情链接</a></li>
              <li><a href="/hr/">招聘</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <h4>订阅我们</h4>
            <ul class="list-unstyled">
              <li><a href="/about/">微博</a></li>
              <li><a href="/ad/">公众号</a></li>
              <li><a href="/links/">哔哩哔哩</a></li>
              <li><a href="/hr/">Youtube</a></li>
              <li><a href="/hr/">Instagram</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <h4>联系方式</h4>
            <ul class="list-unstyled">
              <li><a href="http://weibo.com/bootcss" title="Bootstrap中文网官方微博" target="_blank">微信</a></li>
              <li><a href="http://weibo.com/bootcss" title="Bootstrap中文网官方微博" target="_blank">电话号码</a></li>
              <li><a href="http://weibo.com/bootcss" title="Bootstrap中文网官方微博" target="_blank">新浪微博</a></li>
              <li><a href="mailto:admin@bootcss.com">电子邮件</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <h4>快捷导航</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.golaravel.com/" target="_blank">合成器</a></li>
              <li><a href="http://www.ghostchina.com/" target="_blank">效果器</a></li>
              <li><a href="http://www.bootcdn.cn/" target="_blank">采样包</a></li>
              <li><a href="https://pkg.phpcomposer.com/" target="_blank">宿主</a></li>
              <li><a href="https://www.return.net/" target="_blank">教程</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <h4>赞助商</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.maoyun.tv/" target="_blank">猫云</a></li>
              <li><a href="https://www.jdcloud.com/" target="_blank">京东云</a></li>
              <li><a href="https://www.upyun.com" target="_blank">又拍云</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <hr>
    <div class="row footer-bottom">
      <ul class="list-inline text-center">
        <li><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11008151号</a></li><li>Copyright © 2018-2019 DZYMUSIC</li>
      </ul>
    </div>
  </div>
</footer>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      showWechat() {
        const div = this.$refs.btnPopup
        div.style.display = "block"
      },
      hiddenWechat() {
        const div = this.$refs.btnPopup
        div.style.display = "none"
      }
    }
  }
</script>
<style lang="scss" scoped>
.ins {
  // background-color: #f8374a;
  background-image: url(../../asset/icon/ins2.png);
  background-size: cover;
}
.ins:hover {
  opacity: 0.6;
}
button {
  margin-bottom: 10px;
}
.btn-popup {
  width: 100%;
  height: 100%;
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
    height: 100%;
    img {
      max-width: 30%;
      max-height: 30%;
      min-width: 120px;
      min-height: 120px;
    }
  }
}
.footer {
    color: #777;
    padding: 30px 0;
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
  padding: 40px 20px 70px;
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
</style>
