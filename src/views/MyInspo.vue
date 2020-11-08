<template>
  <div class="wrapper">
    <h1> Your Favorites: </h1>
    <h3 v-if='emptyList'>Search or Browse to find your favorites!</h3>
    <InspoList v-else :photos="photos" />
  </div>
</template>

<script>
import InspoList from "../components/InspoList.vue";
export default {
  name: "MyInspo",
  components: {
    InspoList
  },
  data() {
    return {
    };
  },
  computed: {
    photos() {
      return this.$root.$data.hearted;
    },
    emptyList() {
      return this.$root.$data.hearted.length == 0;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.wrapper {
    min-height: 90vh;;
}
h1 {
    margin-left: 200px;
    margin-top: 1vh;
}
h3 {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}

</style>