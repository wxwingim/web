<template>
  <header>
    <div class="search">
      <a href=""><img src="./../assets/images/search.png" alt="search-icon"></a>
      <input type="text" placeholder="Search.." name="search">
    </div>

    <div class="header-icons">
      <a href=""><img src="./../assets/images/user.png" alt="user-icon"></a>
      <a href="" class="header-orange">
        <img src="./../assets/images/bell-school.png" alt="bell school">
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("./../css/header.css");
</style>