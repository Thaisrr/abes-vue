<template>
  <button @click="action">
    *** <slot></slot> ***
  </button>
</template>

<script>
export default {
  name: "SuperButton",
  props: {
    action: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

</style>