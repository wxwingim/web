<template>
<div class="container">
    <h2>Регистрация</h2>
    <hr>

    <form class="registration-form form-in">
        <div class="input-email">
            <label for="email"><b>Email</b></label>
            <input type="text" v-model="mail" placeholder="Enter Email" name="email" id="email" required>
        </div>
        <p v-if=vError>Введите email!</p>

        <button v-if="!visible" v-on:click="FormEnd" type="submit" class="nextbtn">Далее</button>

        <div v-if="visible">
            <div class="form-in nextinput">
                <label for="psw"><b>Password</b></label>
                <input type="password" v-model="pass" placeholder="Пароль" name="psw" id="psw" required>
            </div>

            <div class="form-in nextinput">
                <label for="log"><b>Login</b></label>
                <input type="text" v-model="log" placeholder="Логин" name="log" id="log" required>
            </div>

            <button v-on:click="RegistrationUser" type="button" class="registerbtn">Регистрация</button>
        </div>
    </form>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            visible: false,
            mail: null,
            pass: null,
            log: null,
            vError: false
        }
    },

    methods: {
        FormEnd() {
            if(this.mail){
                this.visible = !this.visible;
                this.vError = false;
            }
            else{
                this.vError = true;
            }
        },
        RegistrationUser(){
            const url =  "https://87b78a4a-1a8a-4d31-9bd5-5fd179e2eedf.mock.pstmn.io/registr/";

            const data = {
                login: this.log,
                password: this.pass,
                email: this.mail
            };

            axios.post(url, data, {headers:{'x-mock-match-request-body': true}}).then((res) => {
                console.log(res);
                alert("Регистрация прошла успешно");
            })
            .catch((error) => {
                console.log(error);
                alert("Логин занят");
            });
        }
    },

});


</script>

<style scope>
@import './../css/style-registration.css';
</style>