<template>
  <IndexContainer :data="kontaktIndexData" :type="type"></IndexContainer>
</template>
<script>
import IndexContainer from '../sub/IndexContainer.vue'
export default {
  data() {
    return {
      kontaktIndexData: JSON.parse(localStorage.getItem("homeData")).data[6],
      type: "Kontakt"
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
