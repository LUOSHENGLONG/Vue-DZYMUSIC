<template>
   <div class="searchContainer" v-if="isShow">
    <EachContainer :data="data" :PageCount="count" @currentPage="setCurrentPage" :navType="navType"></EachContainer>
  </div>
</template>
<script>
import axios from 'axios'
import EachContainer from '../sub/EachContainer.vue'
  export default {
    data() {
      return {
        data:[],
        count: {},
        currentPage: 1,
        labelTypeColor: "background: #CC0033",
        keyword: this.$route.params.keyword,
        navType: "搜索结果",
        isShow: true

      }
    },
    mounted() {
      this.getData()
    }
    ,
    methods: {
      getData() {
        axios.post("http://localhost:3001/search",{currentPage: this.currentPage, keyword: this.keyword})
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
                  img.push("http://localhost:3001" + item)
                })
              }else {
                img.push("http://localhost:3001" + item.img)
              }
              item.img = img[0]
            }else {
              item.img = "http://localhost:3001/contribute/1788MUSIC.png"
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
    },
    watch: {
      keyword(newVal, oldVal) {
      }
    }
  }
</script>
<style lang="scss" scoped>



</style>

