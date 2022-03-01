"use strict";
const appl = Vue.createApp({});
appl.component('name', {
    data() {
        return {
            lastName: 'Пестова',
            firstName: 'Елизавета',
            middleName: 'Вячеславовна',
        };
    },
    template: '<div>{{lastName}} {{firstName}} {{middleName}}</div>',
});
