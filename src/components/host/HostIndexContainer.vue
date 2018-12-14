<template>
   <div class="synthesizerContainer">
    <div class="container">
      <div class="content">
        <div class="title">
          <a href="#"><p>合成器</p></a>
          <a href="#"><p>更多</p></a>
        </div>
        <div class="row">
          <div class="col-sm-3 col-md-3 col-xs-3">
            <div class="thumbnail">
              <a href="#">
                <img src="https://i1.sndcdn.com/artworks-000444018099-etbdck-t500x500.jpg" alt="...">
              </a>
              <div class="caption">
                <a href="#">
                <h5>红魔合成器MOK WaveRazor 2.0.9 </h5>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-3 col-md-3 col-xs-3">
            <div class="thumbnail">
              <a href="#">
                <img src="https://i1.sndcdn.com/artworks-000444018099-etbdck-t500x500.jpg" alt="...">
              </a>
              <div class="caption">
                <a href="#">
                <h5>红魔合成器MOK WaveRazor 2.0.9 </h5>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-3 col-md-3 col-xs-3">
            <div class="thumbnail">
              <a href="#">
                <img src="https://i1.sndcdn.com/artworks-000444018099-etbdck-t500x500.jpg" alt="...">
              </a>
              <div class="caption">
                <a href="#">
                <h5>红魔合成器MOK WaveRazor 2.0.9 </h5>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-3 col-md-3 col-xs-3">
            <div class="thumbnail">
              <a href="#">
                <img src="https://i1.sndcdn.com/artworks-000444018099-etbdck-t500x500.jpg" alt="...">
              </a>
              <div class="caption">
                <a href="#">
                <h5>红魔合成器MOK WaveRazor 2.0.9 </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
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
    methods: {
      
    },
    components: {
    }
  }
</script>
<style lang="scss" scoped>
.bottom {
  background-color: #eee;
}


a {
  text-decoration: none;
  color: #333;
}

.synthesizerContainer {
  margin-bottom: 20px;
}



.thumbnail {
  padding: 0;
  background-color: white;
  border: 1px solid #eee;
}
.thumbnail:hover {
  box-shadow: 0px 0px 20px #ccc; 
  background-color: #FCFCFC;
}
.thumbnail img {
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 10px #ccc; 
  vertical-align: middle;
}
.caption {
  padding: 5px px;
}

.title {
  padding-right: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  overflow: hidden;
  border-bottom: 1px solid #f2f2f2;
  text-align: center;

}
.title a {
  color: #333;
  display: inline-block;
  
  text-align: center;
}
.title a:nth-child(1) {
  font-size: 18px;
  float: left;
  
}

.title a:nth-child(2) {
  float: right;
}

.title a:hover {
  text-decoration: none;
  color: #337ab7;
  
}
p {
  text-align: center;
  margin: 5px 0;
  padding-bottom: 3px;
}
.navbar {
    margin-bottom: 20px;
    
}

.top {
  position: flex;
  top: 0;
  left: 0;
}

.content {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>

