<template>
   <div class="synthesizerContainer container">
    <section class="section-title techniques-title clearfix">
      <h2>{{type}}</h2>
      <a href="#" @click="more($event)" class="more" target="_blank">
        更多文章 &gt;
      </a>
    </section>
    <section class="news_row">
      <!-- <a href="#" @click="intoInfo($event,item.id)" target="_blank" class="feature-news index-base-item" v-for="item of data" :key="item.id"> -->
      <router-link :to="`/`+item.type+`/info/`+item.id" target="_blank" class="feature-news index-base-item" v-for="item of data" :key="item.id">
        <div class="title-image-wrap">
          <div class="title-image">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="gradient"></div>
          <span class="time left">{{item.releaseTime | dateFormat}}</span>
          <span class="comment right"></span>
        </div>
        <div class="content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="summary">{{ item.content }}</p>
        </div>
        <div class="text-gradient"></div>
      </router-link>
      
    </section>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props:["data","type"],
    mounted() {
    },
    updated() {

    },
    methods: {
      more(e) {
        e.preventDefault();
        if(this.type === "合成器"){
          this.$router.push({path: "/synthesizer"})
        }else if(this.type === "采样包") {
          this.$router.push({path: "/samplePack"})
        }else if(this.type === "效果器") {
          this.$router.push({path: "/effects"})
        }else if(this.type === "宿主") {
          this.$router.push({path: "/host"})
        }else if(this.type === "教程") {
          this.$router.push({path: "/tutorial"})
        }
      },
      intoInfo(e, id) {
        e.preventDefault()
        let typeName = ""
        if(this.type === "合成器"){
          typeName = "synthesizer"
        }else if(this.type === "采样包") {
          typeName = "samplePack"
        }else if(this.type === "效果器") {
          typeName = "effects"
        }else if(this.type === "宿主") {
          typeName = "host"
        }else if(this.type === "教程") {
          typeName = "tutorial"
        }
        this.$router.push({name: "info",params: {type: typeName,id: id}})
        
      },
      
    },
    mounted() {
      
    }
    ,
    components: {
    }
  }
</script>
<style lang="scss" scoped>

@media screen and (max-width: 1200px) and  (min-width: 992px){
  .feature-news{
    margin-left: 4px !important;
    margin-right: 4px !important;
  }
  .feature-news {
    width: 32% !important;
  }
  
}

@media screen and (max-width: 992px) and (min-width: 400px) {
  .feature-news{
    margin-left: 4px !important;
    margin-right: 4px !important;
  }
  .feature-news {
    width: 48% !important;
  }
  
}

@media screen and (max-width: 420px) {
  .feature-news{
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
  .feature-news {
    width: 96% !important;
  }
  
}

.container {
  padding: 0;
}

a {
  text-decoration: none;
  color: #333;
}
.news_row {
  margin-top: 20px;
  .feature-news:nth-child(5),.feature-news:nth-child(10) {
    margin-right: 0;
  }
  .feature-news:hover {
    background-color: rgba(192, 188, 250, 0.005);
    border-color: rgba(121, 121, 121, 0.094);
    .gradient {
      background-color: rgba(20, 8, 189, 0.089);
    }
    .title {
      color: #663a9e;
    }
  }
  .feature-news:hover {
    padding-top: 0px;
    box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.094);
    img {
      transform: scale(1.2);
      transition: all 1s ease;
    }
  }
  .feature-news {
    border: 1px solid rgba(121, 121, 121, 0.094);
    border-top: 0;
    padding-top: 2px;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    margin: 10px 0;
    display: inline-block;
    width: 19.20%;
    height: 376px;
    background-color: #fbfbfb10;
    position: relative;
    margin-right: 1%;
    .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.15);
      background-image: none;
      background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0) 35%), to(rgba(0, 0, 0, 0.8) 100%));
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.8) 100%);
      background-image: linear-gradient(top, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.8) 100%);
      background-repeat: repeat-x;
      background-color: rgba(0, 0, 0, 0);
    }
    .gradient {
      -webkit-transition: all 0.15s ease;
      transition: all 0.15s ease;
    }
    .title-image-wrap {
      position: relative;
      height: 32px;
      padding-top: 180px;
      .title-image {
        width: 100%;
        height: 180px;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        text-align: center;
        img {
          height: 100%;
          background-position: center;
          background-size: cover;
        }
      }
      .title-logo {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 20px;
        top: 15px;
        border-radius: 40px;
        overflow: hidden;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .time {
        margin-right: 22px;
        margin-bottom: 5px;
        position: absolute;
        right: 0;
        bottom: 0;
        color: white;
      }
    }
    .content:hover {

    }
    .content {
      color: #444444;
      padding: 15px 8px 0;
      overflow: hidden;
      height: 205px;
      background-color: #fff;
      box-shadow: 0 6px 50px rgba(0, 0, 0, 0.054) inset;
      .title {
        font-size: 20px;
        line-height: 1.6;
        margin-bottom: 6px;
        margin: 0px;
      }
      h3 {
        display: block;
        font-size: 1.17em;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold;
      }
      .summary {
        margin-top: 5px;
        font-size: 16px;
        color: #777777;
      }
      p {
        display: block;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
      }
    }
    .text-gradient {
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, white 75%);
      background-repeat: repeat-x;
    }
  }
  
  .index-base-item {
    position: relative;
    float: left;
    overflow: hidden;
  }
}


.section-title {
    margin-bottom: -12px;
    border-bottom: 2px solid rgb(214, 214, 212);
}



.section-title.techniques-title h2 {
    border-bottom-color: #337ab7;
}
.section-title h2 {
    font-size: 24px;
    float: left;
    padding-bottom: 5px;
    margin-bottom: -2px;
    border-bottom: 2px solid;
}
.section-title .more {
    color: rgb(255, 255, 255);
    float: right;
    margin-top: 20px;
    background: #337ab7;
    padding: 0px 12px;
    border-radius: 50px;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
}
h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
a {
    color: rgb(102, 58, 158);
    text-decoration: none;
    transition: all 0.15s ease;
}










body, textarea, input, select, section, h4, span {
    color: rgb(68, 68, 68);
    font-size: 14px;
    line-height: 1.8;
    font-weight: normal;
    font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
}
</style>

