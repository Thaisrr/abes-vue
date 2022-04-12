<template>
  <NavigationComponent/>
  <router-view/>

  <footer>
    <hr>
    <p>2022 -- Dawan Formation</p>
  </footer>
</template>
<script>

import NavigationComponent from "@/components/Navigation";
export default {
  name: 'App',
  components: {NavigationComponent}
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
