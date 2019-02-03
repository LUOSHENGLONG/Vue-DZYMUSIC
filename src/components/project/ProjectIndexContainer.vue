<template>
  <IndexContainer :data="tutorialIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      tutorialIndexData: JSON.parse(localStorage.getItem("homeData")).data[5],
      type: "工程"
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
