<template>
   <div class="searchContainer">
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
        navType: "搜索结果"

      }
    },
    mounted() {
      this.getData()
    }
    ,
    methods: {
      getData() {
        console.log(this.keyword)
        axios.post("http://localhost:3001/search",{currentPage: this.currentPage, keyword: this.keyword})
        .then(result => {
          this.data = result.data.data
          this.count = result.data.count["count(id)"]
          console.log("xxxxxxxxxxxxxxxxxssssssssssssssssssssss")
          
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

