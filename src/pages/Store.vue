<template>
  <h1>Les stores</h1>
  <p>Bienvenue {{username}}</p>

  <div>
    <label>Nom</label>
    <input v-model="new_name">
    <button @click="save">Save</button>
  </div>

  <h2>Magasin : </h2>
  <ul>
    <li v-for="(article) of products" :key="article">
      {{article}}
      <button @click="add(article)">++</button>
    </li>
  </ul>
  <hr>

  <h2>Mon panier : {{count}} </h2>
  <ul>
    <li v-for="(product, i) of panier" :key="product + i">{{product}}</li>
  </ul>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "StorePage",
  data: function () {
    return {
      new_name: '',
      products: ['Furby', 'Chocolat', 'Salade']
    }
  },
  methods: {
    ...mapMutations({add: 'addToBasket'}), // paramétre : uniquement value
    save() {
      if(this.new_name) {
        this.$store.commit('setUsername', this.new_name)
      }
    }
  },
  computed: {
    // helpers de vuex
    ...mapGetters({panier: "panier", count: "panier_length"}),
    username: function () {
      return this.$store.getters.username;
    }
  }
}
</script>

<style scoped>

</style>