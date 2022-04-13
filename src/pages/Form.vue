<template>
  <form @submit.prevent="onSubmit" >
    <p>
      <label>Nom</label>
      <input v-model="user.name"
             @blur="checkName"
             :class="(name_error)? 'error': 'valid'"
             :aria-invalid="name_error">
      <small v-if="name_error">Ce champs est obligatoire</small>
    </p>
    <p>
      <label>Email</label>
      <input v-model="user.email" type="email"/>
    </p>
    <p>
      <label>Password</label>
      <input v-model="user.password" type="password">
    </p>
    <p>
      <button type="submit">S'inscrire</button>
    </p>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      user: this.prop_user || {
        name: '',
        email: '',
        password: ''
      },
      name_error: false
    }
  },
  props : {
    prop_user: Object
  },
  methods: {
    onSubmit(e) {
      if(this.prop_user) {
        // on modifie
        this.$emit('modify', this.user);
      } else {
        // On créé
        alert('New User created')
        console.log(e)
        console.log(this.user);
      }


    },
    checkName() {
      console.log('in check name')
      this.user.name = this.user.name.trim();
      this.name_error =  this.user.name.length <= 2;
      console.log(this.name_error)
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  border-color: red;
}
</style>