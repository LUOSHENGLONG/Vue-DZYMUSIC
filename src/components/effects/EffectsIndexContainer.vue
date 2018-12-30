<template>
  <IndexContainer :data="effectsIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      effectsIndexData: JSON.parse(localStorage.getItem("homeData")).data[1],
      type: "效果器"

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
