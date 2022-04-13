<template>
  <h1>Mon User : </h1>
  <ul>
    <li v-for="(value, key) in user" :key="value.name">{{key}} : {{value}}</li>
  </ul>

  <FormComponent @modify="modify" :prop_user="{...user}"/>
</template>

<script>
import FormComponent from "@/pages/Form";
export default {
  name: "ParentForm",
  components: {FormComponent},
  data: function () {
    return {
      user: {
        name: 'Toto',
        email: 'toto@mail.fr',
        password: 'password'
      }
    }
  },
  methods : {
    modify(new_user) {
      this.user  = {...new_user}
    }
  }
}
</script>

<style scoped>

</style>