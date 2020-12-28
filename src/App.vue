<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1 id="logo">I N S P O</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/">
        <div class="menu-item browse" @click='clearSearch()'>
          <i class="fas fa-search"></i>
          <p>Search</p>
        </div>
      </router-link>
      <router-link to="/browse">
        <div class="menu-item browse">
          <i class="fas fa-globe"></i>
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/myInspo">
        <div class="menu-item">
          <i class="fas fa-heart"></i>
          <span class="badge" id='num_hearts' v-if="hasNumHearted">{{num_hearted}}</span>
          <p>My INSPO</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />

  <footer class="footer">
    
    <a href="https://github.com/jack40tall/creative3-inspo"><i class="fab fa-github"></i>   GitHub Repository</a>
  </footer>
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
  },
  methods: {
    clearSearch() {
      this.$root.$data.searchedImages.length = 0;
    }
  }
}
</script>

<style>* {
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
}
footer {
  height: 60px;
  background: grey;
}
.fa-github {
  font-size: 22pt;
  padding: 0 10px;
}
footer.footer a {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  height: 100%;
  color: white;
  margin: 0;
  font-size: 13pt;
  text-decoration: none;
}

footer.footer a:hover {
  color: black;
}

body {
  margin-top: 10px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  box-shadow: 0px 3px grey;
}

#menu a {
  color: #B84901;
  text-decoration: none;
}

#logo {
  font-family: 'Abel', sans-serif;
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
  margin-right: 60px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  margin-top: 10px;;
}

.menu-item p {
  margin: 5px;
  font-size: 12pt;
}

.menu-item i {
  font-size: 30px;
}

.browse {
  margin-right: 50px;
}

.menu-item {
  position: relative;
  width: 70px;
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

  #side {
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin:auto;
  }

  .menu-item {
    margin-right: 0px;
    /* border: 1px solid black; */
  }

  #brand h1 {
    margin-top: 0px;
    margin-bottom: 10px;
  }
}
</style>