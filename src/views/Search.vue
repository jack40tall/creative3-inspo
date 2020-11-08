<template>
<div>
    <h2 id='banner-message'>Find your Inspiration</h2>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form" v-on:submit.prevent="searchPhotos()">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div v-if="hasSearch">
      <PhotoList :photos="searchedImages" />
  </div>
  <div v-else class="spacer"></div>
</div>
</template>

<script>
import PhotoList from "../components/PhotoList.vue";

const APIKEY = "19023503-87b010c566b4c2cdf0586d799";
const URL = "https://pixabay.com/api/?key=" + APIKEY + "&orientation=horizontal&image_type=all&per_page=10&q=";

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
            } else {
                return false;
            }
        },
        searchedImages() {
            console.log(this.$root.$data.searchedImages)
            return this.$root.$data.searchedImages;
        }
    },
    methods: {
        async searchPhotos() {
            this.$root.$data.searchedImages.length = 0;
            // debugger
            const response = await fetch(URL + this.searchText);
            const photos = await response.json();

            photos.hits.forEach(currPhoto => {
                this.$root.$data.searchedImages.push({id:currPhoto.id, tags:currPhoto.tags, img:currPhoto.webformatURL, likes:currPhoto.likes, user:currPhoto.user})
            })
        },

    },
} 
</script>

<style scoped>

.spacer {
  min-height: 80vh;;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
#banner-message {
    width: 100%;
    text-align: center;
    margin: 130px 0 50px 0;
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


</style>