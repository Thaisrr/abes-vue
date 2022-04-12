<template>
<h1>Le Data Binding</h1>
  <p @click="switchClass" :class="ma_classe">J'ai une classe dynamique !</p>
  <p :[dynamicAttribute]="'p'">Id dynamique</p>

  <button @click="changeRole()">Change Role </button>
  <p :class="getUserClass">via computed: {{user.nom}}</p>
  <p :class="getUserClassMethod()">via méthode : {{user.nom}}</p>

  <p>
    <input v-model="user.nom">
  </p>

  <p>{{fullname}}</p>
  <ul>
    <li>Prénom : {{firstname}}</li>
    <li>Nom : {{lastname}}</li>
  </ul>
  <p>
    <input v-model="fullname">
  </p>

</template>

<script>
export default {
  name: "DataBinding",
  data: function () {
      return {
        ma_classe: 'red',
        dynamicAttribute: 'id',
        user: {
          nom: 'Toto',
          role: 'ADMIN'
        },
        firstname: 'John',
        lastname: 'Doe'
      }
  },
  methods: {
    switchClass() {
      this.ma_classe = (this.ma_classe === 'red')? 'blue' : 'red';
    },
    getUserClassMethod() {
      console.log('get class methode')
      return (this.user.role === 'ADMIN')? 'blue' : 'red';
    }
  },
  computed: { // Se lance uniquement quand la valeur surveillée est modifiée
    // et retourne quelque chose
    getUserClass() {
      console.log('get class computed')
      return (this.user.role === 'ADMIN')? 'blue' : 'red';
    },
    fullname: {
      get() {
          return this.firstname + ' ' + this.lastname;
      },
      set(value) {
        // Version "Old School"
        const tab_values = value.split(' ');
        this.firstname = tab_values[0];
        this.lastname = tab_values[1];

        // Version destructurée
        [this.firstname, this.lastname] = value.split(' ');
      }
    }
  },
  watch: {
    /* Le nom des méthodes doivent être identiques à ceux des datas surveillées */
    ma_classe() {
      console.warn('Ma classe a été modifiée');
    },
    user() {
      // Ne fonctionne pas car pas de modification mémoire
      console.error('User a été modifié')
    }
  }


}
</script>

<style scoped>
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>