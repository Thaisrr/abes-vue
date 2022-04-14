<template>
  <h1>Communication entre les composants</h1>
  <div class="container">
    <CardComponent v-for="film of films" :key="film" :title="film"/>
    <CardComponent title="a"/>
    <CardComponent />
  </div>

  <div class="container">
    <CardObj
        v-for="movie of movies"
        :key="movie"
        :film="movie"
        @delete="deleteMovie"
    />
    <CardObj @delete="deleteMovie" />
  </div>

  <p>Un bouton : <SuperButton :action="() => {}">Ne cliquez pas ici</SuperButton></p>

  <h2>Structure de page : </h2>
  <PageStructure>
    <template v-slot:header>
      <h3>Mon header</h3>
    </template>
    <template v-slot:main>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi consequuntur doloribus eligendi enim est iure laborum minima nulla, quod voluptatem voluptatibus? Ad culpa debitis eaque fugit praesentium, quod sed.</p>
    </template>
  </PageStructure>

</template>

<script>
import CardComponent from "@/components/Card";
import {Film} from "@/models/Film";
import CardObj from "@/components/CardObj";
import SuperButton from "@/components/SuperButton";
import PageStructure from "@/components/PageStructure";
export default {
  name: "ParentComponent",
  components: {PageStructure, SuperButton, CardObj, CardComponent},
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
  },
  /*provide: {
    message: 'Coucou du parent'
  },*/
  provide() {
    return {
      films: this.films,
      message: 'Coucou du parent'
    }
  },
  methods: {
    deleteMovie(movie, message) {
      console.log(message)
      const index = this.movies.indexOf(movie);
      console.log(index)
      if(index <= 0) {
        alert(`Ce film n'existe pas`)
      } else {
        this.movies.splice(index, 1);
      }
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