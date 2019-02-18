<template>
  <div class="all container" v-if="isReady">
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 最新 合成器模块 -->
    <LastIndexContainer></LastIndexContainer>
    <!-- 首页 合成器模块 -->
    <SynthesizerIndexContainer></SynthesizerIndexContainer>
    <!-- 首页 效果器模块 -->
    <EffectsIndexContainer></EffectsIndexContainer>
    <!-- 首页 采样包模块 -->
    <SamplePackIndexContainer></SamplePackIndexContainer>
    <!-- 首页 宿主模块 -->
    <HostIndexContainer></HostIndexContainer>
    <!-- 首页 教程模块 -->
    <TutorialIndexContainer></TutorialIndexContainer>
    <!-- 首页 kontakt模块 -->
    <KontaktIndexContainer></KontaktIndexContainer>
    <!-- 首页 工程模块 -->
    <ProjectIndexContainer></ProjectIndexContainer>
    <!-- 首页 预置模块 -->
    <PresetIndexContainer></PresetIndexContainer>
    
  </div>

</template>

<script>
import Swiper from '../swiper/SwiperContainer.vue'
import Navbar from '../navbar/NavbarContainer.vue'
// import Progress from '../progress/ProgressContainer.vue'
import Bottom from '../bottom/BottomContainer.vue'

import LastIndexContainer from '../last/LastIndexContainer.vue'
import SynthesizerIndexContainer from '../synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from '../effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from '../samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from '../host/HostIndexContainer.vue'
import TutorialIndexContainer from '../tutorial/TutorialIndexContainer.vue'
import KontaktIndexContainer from '../kontakt/KontaktIndexContainer.vue'
import ProjectIndexContainer from '../project/ProjectIndexContainer.vue'
import PresetIndexContainer from '../preset/PresetIndexContainer.vue'



export default {
  components: {
    Swiper,
    Navbar,
    // Progress,
    Bottom,
    SynthesizerIndexContainer,
    EffectsIndexContainer,
    SamplePackIndexContainer,
    HostIndexContainer,
    TutorialIndexContainer,
    KontaktIndexContainer,
    ProjectIndexContainer,
    PresetIndexContainer,
    LastIndexContainer,
  },
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      mySwiper: {},
      isReady: false

    };
  },
  updated() {
    
  },
  created() {
    this.getHomeData()

  },
  mounted() {
    this.menu()
    if(localStorage.getItem("homeData") != null) {
      this.isReady = true
    }
  },
 
  methods: {
    getHomeData() {
      var that = this
      $.ajax({
        url : '/api/homeData',
        async: true,
        type : 'POST',
        processData: false,
        contentType: false, 
        success : function(result){
          if(result != null) {
            let test = /(\")|(\])|(\[)/
            String.prototype.replaceAll = function(s1,s2){ 
              return this.replace(new RegExp(s1,"gm"),s2); 
            }
            result.data.forEach( origin => {
              origin.forEach (item => {
                item.img = item.img + ""
                item.img = item.img.replaceAll(test,"")
                let img = []
                if(item.img.indexOf(",") > -1) {
                  item.img.split(",").forEach( item2 => {
                    img.push("" + item2)
                  })
                }else {
                  img.push("" + item.img)
                }
                item.img = img[0]
              })
            })
            
          localStorage.setItem("homeData",JSON.stringify(result))
          that.isReady = true
          }
          
        },
        error : function(result){
        } 
      })
      
    },
    menu() {
      window.scrollTo(0,0);
    },

  },
  
};


</script>


<style lang="scss" scoped>


.all {
  position: relative;
  padding: 0;
}

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
