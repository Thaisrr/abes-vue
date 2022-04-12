<template>
  <h1>Communication entre les composants</h1>
  <div class="container">
    <CardComponent v-for="film of films" :key="film" :title="film"/>
    <CardComponent title="a"/>
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "@/components/Card";
export default {
  name: "ParentComponent",
  components: {CardComponent},
  data() {
    return {
      films: [`Le Seigneur des Anneaux`, `L'Empire contre attaque`, `La Ligne Verte`]
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