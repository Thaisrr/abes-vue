<template>
  <ul>
    <li>
      <router-link :to="{name: 'presentation'}">Présentation</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavigationComponent',
  }
</script>