<template>
  <div class="container hidden-xs hidden-sm">
    <div class="swiper-container">
        <div class="swiper-wrapper" id="wrapper">
            <div class="swiper-slide" :style="{backgroundImage: 'url('+item.img+')'}" v-for="item in swiperData" :key="item.id" :id="item.id">
              <!-- <a href="#"><img v-lazy="item.img" alt=""></a> -->
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        3
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white" @click="next"></div>
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  ;
  export default {
  data() {
    return {
      
      mySwiper: {},
      img:[
        {id:1,src:'/images/1788.png'},
        {id:2,src:'/images/1788.png'}],
      swiperData: [],
      adData: []
    };
  },
  created() {

  },
  mounted() {
    this.getData()
  },
  methods: {
    next() {
      
    },
    getSwiper() {
      this.mySwiper =  new Swiper('.swiper-container', {
        speed: 300,
        autoplay: true,
        loop: false,
        observer: true,
        observeParents: true,
        hideOnClick: false,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
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
      this.axios.post("/api/imagesData")
      .then( result => {
        if( result.data.code > 0) {
          this.swiperData = []
          this.adData = []
          result.data.imagesData.forEach( item => {
              item.img = "" + item.img
              if( item.type === "swiper") {
                  this.swiperData.push(item)
                  this.$nextTick(() => {  // 下一个UI帧再初始化swiper
                        this.getSwiper();
                    });
              }
              if( item.type === "ad") {
                  this.adData.push(item)
              }
          })
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
    height: 650px;
    margin-bottom: 20px;
    z-index: 0;
    margin-top: 10px;
} 
.swiper-slide {
  width: 100%;
  height: 600px;
  background-size: 1530px 600px;
  text-align: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;

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

