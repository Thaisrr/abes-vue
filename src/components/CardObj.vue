<template>
  <div class="card" :class="getClass" >
    <h2>{{film.title}}</h2>
  </div>
</template>

<script>
export default {
  name: "CardObj",
  props: {
    film: {
      type: Object,
      required: true,
      default() {
        return {title: "Inconnu", director: "inconnu", is_watched: false}
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