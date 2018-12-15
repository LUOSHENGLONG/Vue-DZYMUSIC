<template>
  <div class="container">
    <div class="user">
      <div class="tagPage">
        <!-- Nav tabs -->
        <div class="rightBorder col-md-3 col-sm-3 col-xs-3 col-lg-3 hidden-xs">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
          </ul>
        </div>
        <!-- Tab panes -->
        <div class="col-md-9 col-sm-9 col-xs-9 col-lg-9">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">home</div>
            <div role="tabpanel" class="tab-pane" id="profile">profile</div>
            <div role="tabpanel" class="tab-pane" id="messages">..messages.</div>
            <div role="tabpanel" class="tab-pane" id="settings">.settings..</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 600px;
  background-color: #fff;
  margin: 10px 0;
  border-radius: 5px;
  .tagPage {
    height: 100%;
    padding: 10px 0;
    .rightBorder{
        border-right: 1px solid #eee;
    }
    ul {
        display: block;
        border: 0;
        
      li {
        display: block;
        float: none;
        a {
          border: 0;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          border-radius: 5px;
        }
        a:hover {
          background-color: #fff;
          border: 0;
          box-shadow: 0 0 20px #eee inset,0 0 20px #eee;
          color: rgba(0, 0, 0, 0.8);

        }
        
      }
      li:hover {
        background-color: #fff;
      }
    }
  }
}
</style>
