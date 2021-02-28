import Vue from 'vue';
import Router from 'vue-router';

import Success from './../components/Success';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/success',
            name: 'success',
            component: Success,
            props: true
        },
    ]
})

export default router;