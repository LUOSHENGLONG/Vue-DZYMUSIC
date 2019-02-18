<template>
  <IndexContainer :data="lastIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      lastIndexData: JSON.parse(localStorage.getItem("homeData")).data[9],
      type: "最新"

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
