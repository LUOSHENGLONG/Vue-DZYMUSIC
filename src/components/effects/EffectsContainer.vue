<template>
   <div class="effectsContainer">
    <EachContainer :data="data" :PageCount="count" @currentPage="setCurrentPage" :navType="navType"></EachContainer>
  </div>
</template>
<script>

import EachContainer from '../sub/EachContainer.vue'
  export default {
    data() {
      return {
        data:[],
        count: {},
        currentPage: 1,
        navType: "效果器"
      }
    },
    mounted() {
      this.getData()
    }
    ,
    methods: {
      getData() {
        this.axios.post("/api/classify",{type: 'effects', currentPage: this.currentPage})
        .then(result => {
          this.data = result.data.data
          this.count = result.data.count["count(id)"]
          let test = /(\")|(\])|(\[)/
          let img = []
          String.prototype.replaceAll = function(s1,s2){ 
            return this.replace(new RegExp(s1,"gm"),s2); 
          }
          this.data.forEach( item => {
            img = []
            if( item.img != null) {
              item.img = item.img.replaceAll(test,"")
              if(item.img.indexOf(",") > -1) {
                item.img.split(",").forEach( item => {
                  img.push("" + item)
                })
              }else {
                img.push("" + item.img)
              }
              item.img = img[0]
            }else {
              item.img = "/contribute/1788MUSIC.png"
            }
          })
        })
      },
      setCurrentPage(e) {
        this.currentPage = e
        this.data = {}
        this.getData()
        this.scrollTop()
      },
      scrollTop() {
        window.scrollTo(0,0);
      }
    },
    components: {
      EachContainer
    }
  }
</script>
<style lang="scss" scoped>



</style>

