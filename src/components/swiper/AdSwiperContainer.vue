<template>
  <div class="container hidden-xs hidden-sm">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :style="{backgroundImage: 'url('+item.img+')'}" v-for="item in swiperData" :key="item.id" :id="item.id">
              <!-- <a href="#"><img v-lazy="item.img" alt=""></a> -->
            </div>
            
        </div>
       
        <!-- 如果需要导航按钮 -->
        
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import axios from 'axios';
  export default {
  data() {
    return {
      mySwiper: {},
      swiperData: [],
      adData: []
    };
  },
  created() {

  },
  mounted() {
    

    

    this.getData()

    
    window.onload = () => {
        console.log($('.swiper-slide'))
    }
    
  },
  methods: {
    getSwiper() {
      this.mySwiper =  new Swiper('.swiper-container', {
        speed: 300,
        autoplay: true,
        loop: true,
        observer: true,
        observeParents: true,
        hideOnClick: true,
        // effect: "cube",
        // cubeEffect: {
        //     slideShadows: true,
        //     shadow: true,
        //     shadowOffset: 100,
        //     shadowScale: 1
        // },
        direction:'vertical',
        pagination: {
          el: '.swiper-pagination',
          hideOnClick :false,
          clickable :true,
        },
        mousewheel: false,
        keyboard : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        },
        
      })
    },
    getData() {
      axios.post("http://localhost:3001/imagesData")
      .then( result => {
        if( result.data.code > 0) {
            this.swiperData = []
            this.adData = []
            result.data.imagesData.forEach( item => {
                item.img = "http://localhost:3001" + item.img
                if( item.type === "swiper") {
                    this.swiperData.push(item)
                    this.$nextTick(() => {  // 下一个UI帧再初始化swiper
                        this.getSwiper();
                        console.log()
                        
                    });
                }
                if( item.type === "ad") {
                    this.adData.push(item)
                }
            })
            let slide = Array.prototype.slice.call($('.swiper-slide'))
            $(slide[0]).css("background-image","url("+ this.swiperData[0].img +")")
            $(slide[slide.length-1]).css("background-image","url("+ this.swiperData[this.swiperData.length-1].img +")")

            
            console.log(111111)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.swiper-container {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    z-index: 0;
    
} 
.swiper-slide {
  width: 100%;
  background-size: 1530px 100px;
  text-align: center;
}
.swiper-slide img {
  height: 100%;
  opacity: 0.98;
}

.swiper-pagination-bullet {
  background: #fff !important;
}

.swiper-pagination-bullet swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>

