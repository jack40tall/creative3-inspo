<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>INSPO</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/search">
        <div class="menu-item browse">
          <i class="fas fa-search"></i>
          <p>Search</p>
        </div>
      </router-link>
      <router-link to="/">
        <div class="menu-item browse">
          <i class="fas fa-globe"></i>
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/myInspo">
        <div class="menu-item">
          <i class="fas fa-heart"></i>
          <span class="badge" id='num_hearts' v-if="hasNumHearted">{{num_hearted}}</span>
          <p>My Inspo</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  computed: {
    hasNumHearted() {
      return this.$root.$data.hearted.length > 0;
    },
    num_hearted() {
      return this.$root.$data.hearted.length;
    }
  }
}
</script>

<style>* {
  box-sizing: border-box;
}

body {
  margin: 50px 0;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  box-shadow: 5px 10px grey;
}

#menu a {
  color: #B84901;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand h1 {
  font-size: 60px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 80px;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.menu-item p {
  margin: 5px;
  font-size: 16pt;
}

.menu-item i {
  font-size: 50px;
}

.browse {
  margin-right: 50px;
}

.menu-item {
  position: relative;
}
.badge {
  position: absolute;
  top: -10px;
  right: 8px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}

@media screen and (max-width: 820px) {
  #menu {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "brand""side";
  }

  #brand h1 {
    margin-top: 0px;
    margin-bottom: 10px;
  }

  #side {
    justify-content: center;
  }
}
</style>