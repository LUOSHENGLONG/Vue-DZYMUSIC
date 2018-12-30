<template>
  <IndexContainer :data="synthesizerIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      synthesizerIndexData: JSON.parse(localStorage.getItem("homeData")).data[0],
      type: "合成器"
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
