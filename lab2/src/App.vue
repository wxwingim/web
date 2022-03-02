<template>
  <div>
    <name></name>
    <forma></forma>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Name from './components/Name.vue';
import Forma from './components/Forma.vue';

export default defineComponent({
  name: 'App',
  components: {
    Name,
    Forma
  }
});
</script>

<style>
</style>
