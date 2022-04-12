<template>
  <div>
      <p>ID: {{ user.id }}</p>
      <p>ФИО: {{ user.fio }}</p>
      <p>Дата рождения: {{ user.birthday }}</p>
      <p>Email: {{ user.email }}</p>
      <button v-on:click="testData">Click</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {mapActions, mapGetters} from 'vuex';
import axios from 'axios';

export default defineComponent({
    data: () => ({
        user: {},
    }),

    computed:{
    },

    methods:{

        testData(){
            console.log(this.user);
        }
    },

    mounted(){
        const id = this.$route.params.id;

        axios.get('https://87b78a4a-1a8a-4d31-9bd5-5fd179e2eedf.mock.pstmn.io/user/' + id)
        .then((res) => {
            console.log(res.data);
            const user = res.data;
            this.user = user.data;

        });

    }
});
</script>

<style>

</style>