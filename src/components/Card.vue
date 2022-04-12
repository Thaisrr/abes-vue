<template>
  <div class="card">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  //props: ['title']
  /*props: {
    title: String // Number | Object | Array | Function | Boolean
  }*/
  props: {
    title: {
      type: String,
      default: 'Pas de film', // Syntaxe pour les types primitifs
      required: false,
      validator(value) {
        return value.length > 2;
      }
    }
  }
}
</script>

<style>
  .card {
    width: 24%;
    border: solid 1px;
    padding: 15px;
    box-sizing: border-box;
  }
</style>