<template>
    <div>
        <section>
            <Lab5Table
                :users_data="USERS"
            />
        </section>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Lab5Table from './Lab5Table.vue';
import {mapActions, mapGetters} from 'vuex';

export default defineComponent({

    components:{
        Lab5Table
    },

    data: () => {
        return{

        }
    },

    computed:{
        ...mapGetters([
            'USERS'
        ])
    },

    methods:{
        ...mapActions([
            'GET_ALL_USERS'
        ])
    },

    mounted(){
        this.GET_ALL_USERS();
    }
});
</script>

<style scope>
</style>