import Vue from 'vue';
import Router from 'vue-router';

import SuccessPage from './../pages/SuccessPage';
import MainPage from './../pages/MainPage.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/success',
            name: 'success',
            component: SuccessPage,
            props: true
        },
        {
            path: '/',
            name: 'main',
            component: MainPage,
            props: true
        },
    ]
})

export default router;
