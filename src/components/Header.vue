<template>
  <header>
    <p>{{joke}}</p>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  computed: {
    ...mapGetters({joke: 'joke'})
  }
}
</script>

<style scoped>

</style>