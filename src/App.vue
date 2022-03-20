<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Name from './components/Name.vue';
import Autorization from './components/Autorization.vue';
import Registration from './components/Registration.vue';
import Lab5 from './components/Lab5.vue';

export default defineComponent({
  name: 'App',
  components: {
    Name,
    Autorization,
    Registration,
    Lab5
  }
});
</script>

<style>
@import './css/style-all.css';
</style>
