<template>
  <div class="all">

    <div class="menu-app">
      <Menu></Menu>
    </div>
    

    <div class="container">
      <Header></Header>
      <Main></Main>
    </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Main from './components/Main.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Menu,
    Main
  }
});
</script>

<style>
@import url("./css/style.css");
</style>
