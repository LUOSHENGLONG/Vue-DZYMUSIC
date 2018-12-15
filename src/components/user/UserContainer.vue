<template>
  <div class="container">
    <div class="user">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-2 col-sm-2 col-xs-2 col-lg-2 hidden-xs">
          
          <ul class="userInfo nav nav-tabs" role="tablist">
            <p class="title"><span class="glyphicon glyphicon-asterisk"></span> 设置</p>
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">修改头像</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">个人资料</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">实名认证</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">密码安全</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">访问推广</a></li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="col-md-10 col-sm-10 col-xs-10 col-lg-10">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <form>
                <div class="form-group">
                  <p>
                    当前我的头像
                      如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像
                      设置我的新头像
                      请选择一个新照片进行上传编辑。
                      头像保存后，您可能需要刷新一下本页面(按F5键)，才能查看最新的头像效果
                  </p>
                  <label for="exampleInputEmail1">修改头像</label>
                  <input type="file" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                
                <button type="submit" class="btn btn-default">保存</button>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">用户名 </label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email" readonly unselectable="on">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">性别</label>
                  <select name="gender" id="gender" class="ps" tabindex="1">
                    <option value="1">男</option>
                    <option value="2">女</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">生日</label>
                  <input type="text" class="form-control" id="birth" placeholder="date">

                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">地区</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">手机号</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email" maxlength="11" minlength="11">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">邮箱地址</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group mybtn">
                  <button type="submit" class="btn btn-primary">保存</button>
                </div>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane" id="messages">..messages.</div>
            <div role="tabpanel" class="tab-pane" id="settings">.settings..</div>
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
</script>

<style lang="scss" scoped>

@import'../../lib/laydate/theme/default/laydate.css';

.user {
  width: 100%;
  height: 100%;
  margin: 15px 0;
  border-radius: 5px;
  .tagPage {
    height: 100%;
    padding: 20px 0;
    
    ul.userInfo {
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
form {
  background-color: #fff;
  padding: 20px 50px;
  border: 1px solid #ddd;
  div {
    margin: 10px 0;
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
    max-width: 80%;
  }

  
}

.mybtn {
  width: 80%;
  text-align: center;
  margin: 20px;
  margin-bottom: 0;
  button {
    width: 150px;
    height: 40px;
  }
}
#home {
  
  form {
    .from-group {
      input.form-control {
        max-width: 200px;
      }
      .form-control:focus {
        border-color: #3379b736; 
      }
    }
  }
}


.ps, select {
    padding: 2px 8px 6px 16px;
}

.ps, select {
    border: 1px solid #dfdfdf;
    background: #fff url(https://www.7xaudio.com/template/comiis_nby/img/px.png) repeat-x 0 0;
    box-shadow: 2px 2px 2px #f0f0f0 inset;
}
</style>
