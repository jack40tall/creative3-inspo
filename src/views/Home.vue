<template>
<div>
  <PhotoList :photos="photos" />
</div>
</template>

<script>
import PhotoList from "../components/PhotoList.vue"
export default {
  name: 'Home',
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
