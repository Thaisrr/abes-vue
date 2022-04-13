<template>
  <h1>Requêtes HTTP et Cycle de Vie</h1>

  <div>
    <p v-if="has_error">Quelque chose n'a pas fonctionné</p>
    <p v-else-if="is_loading">Chargement...</p>
    <ul v-else>
      <li v-for="user of users" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "DataComponent",
  data() {
    return {
      message : 'Hello World !',
      users: [],
      has_error: false,
      is_loading : true
    }
  },
  methods: {
    getUsers: function () {
      this.is_loading = true;
      axios('https://swapi.dev/api/people')
          .then(res => {
            console.log(res.data);
            this.users = res.data.results;
            this.has_error = false;
          })
          .catch(err => {
            console.error(err);
            this.has_error = true;
          })
          .finally(() => this.is_loading = false)
    }
  },
  beforeCreate() {
    console.log('Before Create : ', this.message)
  },
  mounted() {
    // Pour faire les requêtes api, lancer les fluxs
    this.getUsers();
    let i = 0;
    this.$interval = setInterval(() => {
      console.log('interval + ' + i);
      i++;
    }, 1000)
  },
  beforeUnmount() {
    // Pour couper les fluxs, observables, websockets....
    clearInterval(this.$interval)
  }
}
</script>

<style scoped>

</style>