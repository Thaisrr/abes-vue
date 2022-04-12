<template>
  <h1>Communication entre les composants</h1>
  <div class="container">
    <CardComponent v-for="film of films" :key="film" :title="film"/>
    <CardComponent title="a"/>
    <CardComponent />
  </div>

  <div class="container">
    <CardObj v-for="movie of movies" :key="movie" :film="movie"/>
    <CardObj  />
  </div>
</template>

<script>
import CardComponent from "@/components/Card";
import {Film} from "@/models/Film";
import CardObj from "@/components/CardObj";
export default {
  name: "ParentComponent",
  components: {CardObj, CardComponent},
  data() {
    return {
      films: [`Le Seigneur des Anneaux`, `L'Empire contre attaque`, `La Ligne Verte`],
      movies: [
          new Film('Le Seigneur des Anneaux 1', 'Peter Jackson', true),
          new Film('Le Seigneur des Anneaux 2', 'Peter Jackson', true),
          new Film('Le Seigneur des Anneaux 3', 'Peter Jackson', true),
          new Film('Le Seigneur des Anneaux 4', 'Peter Jackson', false),
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  gap: 20px;
}
</style>