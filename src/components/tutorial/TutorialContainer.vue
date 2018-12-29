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

