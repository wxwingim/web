<template>
<div class="f-container">
  <div class="f-image"></div>

  <img class="f-logo" src="./../assets/logo.png">

  <form class="f-form">
    <h2>Авторизация</h2>

    <div class="f-input">
      <label>Login</label>
      <input v-model="log" type="text" placeholder="login" class="input-login">
    </div>

    <div class="f-input">
      <label>Password</label>
      <div class="password">
        <input v-model="pus" type="password" id="passwd" placeholder="password" class="password-input">
        <button class="pass-aye" v-on:click="switchVisibility"></button>
      </div>
    </div>

    <div class="button">
      <button v-on:click="GoAutorization" type="button">Войти</button>
      <router-link to="/registration">Перейти к регистрации</router-link>
    </div>

  </form>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'autorization',
  data() {
    return {
      passwordFieldType: false,
      log: null,
      pus: null
    };
  },
  methods: {
    switchVisibility() {
      let pass: HTMLInputElement;
      this.passwordFieldType = !this.passwordFieldType;
      pass = document.getElementById("passwd") as HTMLInputElement;

      if (this.passwordFieldType){
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    },
    
    GoAutorization(){
      const url =  "https://87b78a4a-1a8a-4d31-9bd5-5fd179e2eedf.mock.pstmn.io/auth/";

      const data = {
        login: this.log,
        password: this.pus
      };

      axios.post(url, data, {headers:{'x-mock-match-request-body': true}}).then((res) => {
        console.log(res);
        alert("Авторизация прошла успешно");
      })
      .catch((error) => {
        console.log(error);
        alert("Неверный логин или пароль");
      });
    }
  }
});
</script>

<style scope>

.f-container{
  width: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

button{
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

img {
  width: 10%;
  height: 10%;
}

.f-input{
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  border-radius: 5px;
}

.password-input{
  width: 100%;
}

form{
  width: -webkit-fill-available;
}

.password{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
}

.pass-aye{
  height: 30px;
  width: 30px;
  background-image: url("https://img.icons8.com/material-outlined/24/000000/visible--v1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
}

.button {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
textarea {
  font: 1em sans-serif;
  padding: 5px 10px;
  margin: 0 10px 0 0;
  box-sizing: border-box;
  border: none;
  width: 100%;
  border: none;
}

@media (min-width: 768px) {
  .f-container{
    max-width: 900px;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }
  .f-image{
  width: 250px;
  height: 400px;
  margin: 32px 0px;
  background: url('./../assets/pexels-j-lee-6847584.jpg');
  }
  .f-logo{
    display: none;
  }
  form{
    margin: 1em;
    padding: 1em;
    width: auto;
    display: flex;
    flex-direction: column;
  }
}

</style>
