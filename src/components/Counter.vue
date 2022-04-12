<template>
  <h1>{{title}}</h1>
  <p>Hello from counter component !</p>

  <h2>Evenements</h2>
  <p>Mon compteur est à {{count}}</p>
  <p @mouseover="console.log('coucou')">10 + 10 = {{10 + 10}}</p>
  <p>
    <button v-on:click="incrementCounter">Incrémenter</button>
    <button @click="incrementCounter">Incrémenter</button>
    <button @click="count--">Décrémenter</button>
  </p>

  <h2>V- Model</h2>
  <p>Votre nom est : {{name}} </p>
  <p>
    <input v-model="name" type="text"/>
  </p>

  <h2>Affichage conditionnel</h2>
  <p>
    <button @click="is_connected = !is_connected">
      {{ is_connected? 'Déconnexion' : 'Connexion' }}
    </button>
  </p>
  <p v-if="is_connected">Vous êtes connecté.e</p>
  <p v-else-if="count > 10">Veuillez vous connecter + compteur trop haut</p>
  <p v-else>Veuillez vous connecter</p>


  <h2>Affichage de boucles</h2>
  <ul>
    <li  v-for="(el, index) of fruits" :key="index">{{el}}</li>
  </ul>
</template>

<script>
    export default {
      name: 'CounterComponent',
      data: function () {
        return {
          count: 0,
          title: 'Mon Compteur',
          message : this.title + ' coucou',
          name: '',
          is_connected: true,
          fruits : ['Abricots', 'Pommes', 'Patates']
        }
      },
      methods: {
        incrementCounter() {
          this.count++;
        }
      }
    }
</script>

<!-- Scoped : le style reste bloqué dans le composant sans se propager -->
<style scoped></style>