<template>
  <div class="container hidden-xs hidden-sm">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in img" :key="item.id">
              <a href="#"><img :src="item.src" alt=""></a>
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        3
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" @click="prev()"></div>
        <div class="swiper-button-next" @click="next()"></div>
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
  data() {
    return {
      
      mySwiper: {},
      img:[
        {id:1,src:'src/images/lunbotu1.jpg'},
        {id:2,src:'src/images/lunbotu2.jpg'},
        {id:3,src:'src/images/lunbotu3.jpg'}]
    };
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      speed:300,
      autoplay:true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        hideOnClick :false
      },
      mousewheel: true,
      keyboard : true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    this.mySwiper = mySwiper
  },
  methods: {
    prev() {
      this.mySwiper.slidePrev();
    },
    next() {
      this.mySwiper.slideNext();

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
    height: 400px;
    margin-bottom: 20px;
    z-index: 0;
    
} 
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}


</style>

