<template>
   <div class="synthesizerContainer">
    <EachContainer :data="data"></EachContainer>
  </div>
</template>
<script>
import axios from 'axios'
import EachContainer from '../sub/EachContainer.vue'
  export default {
    data() {
      return {
        data:[]
      }
    },
    mounted() {
      this.getData()
    }
    ,
    methods: {
      getData() {
        axios.post("http://localhost:3001/synth")
        .then(result => {
          console.log(result)
          this.data = result.data
        })
      }
    },
    components: {
      EachContainer
    }
  }
</script>
<style lang="scss" scoped>



</style>

