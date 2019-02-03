<template>
  <IndexContainer :data="presetIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      presetIndexData: JSON.parse(localStorage.getItem("homeData")).data[7],
      type: "预置"
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
