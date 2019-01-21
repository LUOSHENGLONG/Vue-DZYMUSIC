<template>
   <div class="tutorialContainer">
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
        navType: "教程"
      }
    },
    mounted() {
      this.getData()
    }
    ,
    methods: {
      getData() {
        axios.post("http://localhost:3001/tutorial",{currentPage: this.currentPage})
        .then(result => {
          this.data = result.data.data
          this.count = result.data.count["count(id)"]
          console.log(this.data)
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
            console.log(item.img)
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

