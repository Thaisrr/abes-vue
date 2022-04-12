<template>
  <div class="card" :class="getClass" >
    <h2>{{film.title}}</h2>
    <button @click="deleteMovie()">Supprimer</button>
  </div>
</template>

<script>
import {Film} from "@/models/Film";

export default {
  name: "CardObj",
  props: {
    film: {
      type: Film,
      required: false,
      default() {
        return new Film('Inconnu', 'Anonyme', false);
      }
    }
  },
  computed: {
    getClass() {
      return this.film.is_watched? "vu" : "pasvu"
    }
  },
  methods: {
    deleteMovie() {
      // args : nom de l'événement, ... données
      this.$emit('delete', this.film, 'Coucou');
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