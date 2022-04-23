import { createRouter, createWebHashHistory} from "vue-router";

import Autorization from './components/Autorization.vue';
import Registration from './components/Registration.vue';
import DetailUser from './components/DetailUser.vue';
import Lab5Table from './components/Lab5Table.vue';
import Lab5 from './components/Lab5.vue';

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        // { path: '/autorization', component: Autorization, alias: '/'},
        { path: '/lab5', component: Lab5, alias: '/'},
        { path: '/registration', component: Registration },
        { path: '/users', component: Lab5Table },
        { path: '/detail-user/:id', component:  DetailUser }
    ],
});