<template>
    <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: "ChildInject",
  inject: ['message'],
  data() {
    return {
      message : this.message
    }
  }
}
</script>

<style scoped>

</style>