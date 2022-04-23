<template>
<div>
      <table class="users">
    <thead>
        <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>День рождения</th>
            <th>Email</th>
            <th>Посмотреть запись</th>
        </tr>
    </thead>
  
    <tbody>
        <tr v-for="user in users_data.data" :key="user.id">
            <td>{{ user.id}}</td>
            <td>{{ user.fio }}</td>
            <td>{{ user.birthday }}</td>
            <td>{{ user.email }}</td>
            <td>
                <button v-on:click="$router.push('/detail-user/' + user.id)">Открыть</button>
            </td>
        </tr>
    </tbody>

  </table>    
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default {
    props: {
        users_data:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
};
</script>

<style scope>
@import "./../css/lab5.css";
</style>