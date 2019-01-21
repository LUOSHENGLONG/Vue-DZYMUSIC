<template>
  <div class="all">
    
 
  <!-- 轮播图 -->
  <Swiper></Swiper>


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
  
  </div>

</template>

<script>
import Swiper from '../swiper/SwiperContainer.vue'
import Navbar from '../navbar/NavbarContainer.vue'
import Progress from '../progress/ProgressContainer.vue'
import Bottom from '../bottom/BottomContainer.vue'

import SynthesizerIndexContainer from '../synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from '../effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from '../samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from '../host/HostIndexContainer.vue'
import TutorialIndexContainer from '../tutorial/TutorialIndexContainer.vue'

import axios from 'axios'

export default {
  
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      mySwiper: {}
    };
  },
  mounted() {
    this.getHomeData()
    this.menu()
  },
 
  methods: {
    getHomeData() {
      axios.post("http://localhost:3001/homeData")
        .then(result => {
          if(result != null) {
            let test = /(\")|(\])|(\[)/
            String.prototype.replaceAll = function(s1,s2){ 
              return this.replace(new RegExp(s1,"gm"),s2); 
            }
            result.data.data.forEach( origin => {
              origin.forEach (item => {
                item.img = item.img + ""
                item.img = item.img.replaceAll(test,"")
                let img = []
                if(item.img.indexOf(",") > -1) {
                  item.img.split(",").forEach( item2 => {
                    img.push("http://localhost:3001" + item2)
                  })
                }else {
                  img.push("http://localhost:3001" + item.img)
                }
                item.img = img[0]
              })
            })
            localStorage.setItem("homeData",JSON.stringify(result.data))
            this.$store.state.homeData = result.data
          }
        })
    },
    menu() {
      window.scrollTo(0,0);
    },

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
