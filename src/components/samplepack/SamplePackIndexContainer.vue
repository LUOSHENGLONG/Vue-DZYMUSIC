<template>
  <IndexContainer :data="samplePackIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      samplePackIndexData: JSON.parse(localStorage.getItem("homeData")).data[2],
      type: "采样包"
    }
  },
  methods: {
    
  },
  components: {
    IndexContainer
  }
}  
</script>
<style lang="scss" scoped>

</style>
