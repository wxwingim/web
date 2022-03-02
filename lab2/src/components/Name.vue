
<template>
  <div class="name">
    {{ lastName }} 
    {{ firstName }}
    {{ middleName }}

    <br>
    <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'name',
  data (){
    return{
      lastName: 'Пестова',
      firstName: 'Елизавета',
      middleName: 'Вячеславовна',
    }
  }
});
</script>

<style>
  .name {
    text-align: center;
    margin: 20px auto;
  }
</style>