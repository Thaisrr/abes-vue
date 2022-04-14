<template>
  <NavigationComponent/>
  <HeaderComponent/>
  <router-view/>

  <footer>
    <hr>
    <p>2022 -- Dawan Formation</p>
  </footer>
</template>
<script>

import NavigationComponent from "@/components/Navigation";
import HeaderComponent from "@/components/Header";
import {mapGetters} from "vuex";
import {coucou} from "@/tools/service/test.service";
export default {
  name: 'App',
  components: {HeaderComponent, NavigationComponent},
  computed: {
    ...mapGetters({panier: 'panier'})
  },
  mounted() {
    // dispatch : pour les actions
      this.$store.dispatch('getJoke');
      this.$store.commit('recupPanier');
      coucou();
  },
  beforeUnmount() {
    localStorage.setItem('panier', this.panier.join('|') )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
