<template>
  <div ref="login-container" class="-container container">
    <div class="login-form">
        <div class="form-box">
            <span class="cancel glyphicon glyphicon-remove" @click="cancel()"></span>
            <div class="form-title-top">登录</div>
            <span class="span-title">使用邮箱/手机登录</span>
            <div class="form-bd">
                <form id="fm" action="/auth/login" method="post" class="form-horizontal" enctype="application/x-www-form-urlencoded">
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="username">邮箱 / 手机</label> -->
                        <div class="control-col rel">
                            <input type="text" class="form-control" maxlength="32" name="username" id="username" placeholder="请输入邮箱 / 手机" value="">
                            <b class="abs-icon"><img src="../../images/people-icon.png" alt=""></b>
                        </div>
                    </div>
                    <div class="form-group">
                        <!-- <label class="col-xs-12 control-label" for="password">密码</label> -->
                        <div class="control-col rel">
                            <input type="password" class="form-control" id="password" name="passwd" placeholder="请输入账号密码" maxlength="16">
                            <b class="abs-icon"><img src="../../images/password-icon.png" alt=""></b>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="control-col">
                            <button class="btn btn-primary btn-lg btn-login" type="submit" name="bnt">登&nbsp;&nbsp;&nbsp;录</button>
                            
                            <div class="rows-forget"><span class="pull-left">没有秒嘀帐号？<a href="/register.html" class="zhuce-href" shape="rect">立即注册</a></span><a href="/reg/forget-pwd" target="_blank" class="forger-pas" shape="rect">忘记密码</a></div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div class="slogon">开发者零门槛加入&nbsp;&nbsp;快速集到现有产品</div>
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
    cancel() {
      this.$emit("cancel")
    }
  }
   
}
</script>
<style lang="scss" scoped>

.login-form {
    z-index: 33;
    overflow: hidden;
    width: 350px;
    padding: 40px 0 0;
    background: #fff;
    box-shadow: 0 0 20px rgba(59,59,68,.25);
    border: 1px solid #e9e9ea;
    position: absolute;
    left: 25px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    border-bottom: none;
    font-size: 14px;
    .form-box {
        padding: 0 30px;
        .cancel {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 36px;
            cursor: pointer;
        }
        .form-title-top {
            font-size: 20px;
            color: #3668b4;
            text-align: center;
            margin-bottom: 5px;
        }
        .span-title {
            text-align: center;
            display: block;
            position: relative;
            margin-bottom: 30px;
        }
        .span-title:before {
            content: '';
            background: #e1e1e1;
            width: 35px;
            height: 2px;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            left: 36px;
        }
        .span-title:after {
            content: '';
            background: #e1e1e1;
            width: 35px;
            height: 2px;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            right: 36px;
        }
        .form-bd {
            .form-horizontal {
                .form-group {
                    margin: 0 0 15px;
                    .rel {
                        position: relative;
                        .form-control {
                            border: 1px solid #e1e1e1;
                            box-shadow: none;
                            padding: 0 8px;
                            -webkit-border-radius: 6px;
                            -moz-border-radius: 6px;
                            border-radius: 6px;
                            height: 40px;
                            transform: none;
                        }
                        .abs-icon {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            margin-top: -10.5px;
                            img {
                                display: block;
                            }
                        }
                        
                    }
                    .btn-login {
                        width: 100%;
                        margin-top: 10px;
                        font-size: 14px;
                    }
                    .btn-primary {
                        background-color: #ef5b54;
                        border-color: #ef5b54;
                    }
                    .btn-lg, .btn-group-lg > .btn {
                        padding: 10px 16px;
                        font-size: 18px;
                        line-height: 1.33;
                        border-radius: 6px;
                    }
                    .rows-forget {
                        text-align: right;
                        padding-top: 10px;
                        font-size: 14px;
                        .pull-left {
                            float: left !important;
                            a {
                                color: #428bca;
                                text-decoration: none;
                            }
                        }
                        a {
                                color: #1c2d3b;
                                text-decoration: none;
                        }
                    }
                    
                    .forger-pas {
                        color: #676a6c;
                    }
                }
            }
        }
    }
}







.slogon {
    border-top: #f1f1f1 solid 2px;
    font-size: 12px;
    text-align: center;
    color: #b8b8b8;
    background: #f7f7f7;
    margin-top: 20px;
    line-height: 40px;
}

</style>

