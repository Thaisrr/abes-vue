<template>
  <ul>
    <li>
      <router-link :to="{name: 'presentation'}">Présentation</router-link>
    </li>
    <li>
      <router-link :to="{name: 'binding'}">Data Binding</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavigationComponent',
  }
</script>