<template>
    <div class="wrapper">
        <div class="photos">
            <div class="photo" v-for="photo in photos" :key="photo.id">
                <button @click='removeFromList(photo)'>
                    <span class="filled-heart"><i class="fas fa-heart"></i></span>
                    <span class="empty-heart"><i class="far fa-heart"></i></span>
                </button>
                <img :src="photo.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InspoList',
  props: {
    photos: Array
  },
  computed: {
      
  },
  methods: {
    removeFromList(photo) {
      let index = this.$root.$data.hearted.indexOf(photo);
      this.$root.$data.hearted.splice(index, 1);
    },
  }
}
</script>

<style scoped>.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.photos {
    margin: 20px 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo {
    margin: 4px;
    margin-top: 1px;
    width: 500px;
    position: relative;
}

.photo img {
    /* border: 2px solid #333; */
    height: 300px;
    width: 500px;
    object-fit: cover;
}

button {
    float: right;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1000;
    padding: 5px;
    font-weight: bold;
    font-size: 40px;
    height: 56px;
    width: 56px;
    background: none;
    border-radius: 50%;
    color: #f5f5f5;
    border: none;
    line-height: 50px;
    outline: none;
}

button .empty-heart {display: none}

@media screen and (max-width: 499px) {

    .photo {
        height: 225px;
        width: 375px;
    }

    .photo img {
        /* border: 2px solid #333; */
        height: 225px;
        width: 375px;
    }
}

/* Diable hover on mobile */
@media screen and (min-width: 1025px) {
    button:hover .empty-heart {display: inline;}
    button:hover .filled-heart {display: none;}
}


</style>
