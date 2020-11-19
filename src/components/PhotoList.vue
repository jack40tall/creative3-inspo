<template>
    <div class="wrapper">
        <div class="photos">
            <div class="photo" v-for="photo in photos" :key="photo.id">
                <button @click='toggleList(photo)'>
                    <span v-if="isHearted(photo)" class="filled-heart"><i class="fas fa-heart"></i></span>
                    <span v-else class="empty-heart"><i class="far fa-heart"></i></span>
                </button>
                <img :src="photo.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: {
    photos: Array
  },
  computed: {

  },
  methods: {
      toggleList(photo) {
          if(this.$root.$data.hearted.includes(photo)) {
              let index = this.$root.$data.hearted.indexOf(photo);
              this.$root.$data.hearted.splice(index, 1);
          }
          else {
              this.$root.$data.hearted.push(photo);
          }
      },
      isHearted(photo) {
        if(this.$root.$data.hearted.includes(photo)) {
            return true;
        }
        else {
            return false;
        }
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
    /* justify-content: space-around; */
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

</style>
