import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import initialPhotos from "./pixabay-data"

Vue.config.productionTip = false;

let data = {
  popularImages: initialPhotos,
  searchedImages: [],
  hearted: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
