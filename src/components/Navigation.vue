<template>
  <ul>
    <li>
      <router-link :to="{name: 'presentation'}">Présentation</router-link>
    </li>
    <li>
      <router-link :to="{name: 'binding'}">Data Binding</router-link>
    </li>
    <li>
      <router-link :to="{name: 'com'}">Communication</router-link>
    </li>
    <li>
      <router-link :to="{name: 'form'}">Formulaires</router-link>
    </li>
    <li>
      <router-link :to="{name: 'parent-form'}">Formulaires Bis</router-link>
    </li>
    <li>
      <router-link :to="{name: 'data'}">Données</router-link>
    </li>
    <li>
      <router-link :to="{name: 'store'}">Les Stores</router-link>
    </li>
    <li>
      <p>Panier Icone : {{basket}}</p>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'NavigationComponent',
    computed: {
      ...mapGetters({basket: 'panier_length'})
    }
  }
</script>