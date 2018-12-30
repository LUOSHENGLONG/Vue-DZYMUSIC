<template>
  <IndexContainer :data="hostIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      hostIndexData: JSON.parse(localStorage.getItem("homeData")).data[4],
      type: "宿主"

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
