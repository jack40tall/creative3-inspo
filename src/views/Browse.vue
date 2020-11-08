<template>
<div>
  <PhotoList :photos="photos" />
  <div class="spacer"></div>
</div>
</template>

<script>
import PhotoList from "../components/PhotoList.vue"
export default {
  name: 'Browse',
  components: {
    PhotoList
  },
  data() {
    return {
    }
  },
  computed: {
    photos() {
      return this.$root.$data.popularImages;
    }
  },
}
</script>

<style scoped>
.wrapper {
  /* min-height: 100vh; */
}
.spacer {
  min-height: 5vh;
}
</style>
