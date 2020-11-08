<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div v-if="hasSearch"></div>
  <div v-else class="empty-message">
      <p>Find your Inspiration</p>
  </div>
  <PhotoList :photos="photos" />
</div>
</template>

<script>
import PhotoList from "../components/PhotoList.vue";
export default {
  name: 'Search',
  components: {
    PhotoList
  },
    data() {
    return {
      searchText: '',
    }
  },
  computed: {
      hasSearch() {
          if (this.$root.$data.searchedImages.length > 0) {
              return true;
          }
          else {
              return false;
          }
      },
    photos() {
      return this.$root.$data.popularImages;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.empty-message {
    max-width: 200px;
    margin: auto;
    margin-top: 100px;
}

</style>