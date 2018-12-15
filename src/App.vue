<template>
  <div class="all">
    
  <!-- 顶部栏 --> 
  <Navbar></Navbar>
  <!--进度条-->
  <Progress></Progress>

  <router-view></router-view>
  
  <!--底部 copyright-->
  <Bottom></Bottom>
  </div>

</template>

<script>

import './lib/pace/js/pace.min.js'

import Swiper from './components/swiper/SwiperContainer.vue'
import Navbar from './components/navbar/NavbarContainer.vue'
import Progress from './components/progress/ProgressContainer.vue'
import Bottom from './components/bottom/BottomContainer.vue'


import SynthesizerIndexContainer from './components/synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from './components/effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from './components/samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from './components/host/HostIndexContainer.vue'
import TutorialIndexContainer from './components/tutorial/TutorialIndexContainer.vue'



export default {
  
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      mySwiper: {}
    };
  },
 
  methods: {
    register() {
      this.$http
        .post(
          "http://127.0.0.1:5000/api/register",
          {
            username: this.username,
            password: this.password,
            nickname: this.nickname
          },
          { emulateJSON: true }
        )
        .then(result => {
          console.log(result);
        });
    }
  },
  components: {
    Swiper,
    Navbar,
    Progress,
    Bottom,
    SynthesizerIndexContainer,
    EffectsIndexContainer,
    SamplePackIndexContainer,
    HostIndexContainer,
    TutorialIndexContainer
  }
};


</script>


<style lang="scss" scoped>
@import './lib/pace/css/pace-theme-minimal.css';

a {
  text-decoration: none;
  color: #333;
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
  align-items: center;
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
}


</style>
