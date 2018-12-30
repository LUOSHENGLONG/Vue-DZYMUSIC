<template>
  <IndexContainer :data="tutorialIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      tutorialIndexData: JSON.parse(localStorage.getItem("homeData")).data[3],
      type: "教程"
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
