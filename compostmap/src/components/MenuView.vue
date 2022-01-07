<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/" :class="{
        'link-on' : getPath('Home'),
        'link-off' : !getPath('Home')
      }">
        Accueil
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <router-link class="navbar-link" to="/composters" :class="{
        'link-on' : getPath('ComposterList'),
        'link-off' : !getPath('ComposterList')
      }">
          Composteurs
        </router-link>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            List
          </a>
          <a class="navbar-item">
            Carte
          </a>
          <router-link class="navbar-item" :to="{ path: 'About'}" :class="{
        'link-on' : getPath('About'),
        'link-off' : !getPath('About')
      }">
            A propos
          </router-link>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Voir le code source
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <p>Created by Gauron dorian</p>
    </div>
  </div>
</nav>
  
</template>

<script>
export default {
    name: "MenuView",
    methods:{
      getPath(currentLink){
        return this.$route.name == currentLink
      }
    }
}
</script>

<style>
.link-on{
  font-weight: bold;
  background-color: rgb(75, 218, 75);
}

.link-off{
  font-weight: 100;
  background-color: transparent;
}
</style>