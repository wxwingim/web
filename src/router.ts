import { createRouter, createWebHashHistory} from "vue-router";

import Autorization from './components/Autorization.vue';
import Registration from './components/Registration.vue';

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/autorization', component: Autorization, alias: '/'},
        { path: '/registration', component: Registration }
    ],
});