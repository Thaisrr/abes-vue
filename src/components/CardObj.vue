<template>
  <div class="card" :class="getClass" >
    <h2>{{film.title}}</h2>
  </div>
</template>

<script>
import {Film} from "@/models/Film";

export default {
  name: "CardObj",
  props: {
    film: {
      type: Film,
      required: true,
      default() {
        return new Film('Inconnu', 'Anonyme', false);
      }
    }
  },
  computed: {
    getClass() {
      return this.film.is_watched? "vu" : "pasvu"
    }
  }
}
</script>

<style scoped>

.vu {
  border-color: green;
}

.pasvu {
  border-color: red;
}
</style>