<template>
  <h1>Présentation de Vue</h1>
  <p>La syntaxe de template</p>
  <CounterComponent/>
</template>

<script>
import CounterComponent from "@/components/Counter";
export default {
  name: 'PresentationPage',
  components: {CounterComponent},
}
</script>