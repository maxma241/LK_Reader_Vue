import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';

import App from './components/App.vue';
import Home from './components/Home.vue';
import Comic from './components/Comic.vue';

Vue.use(VueRouter);

Vue.use(VueMaterial);

Vue.use(VueResource);


const router = new VueRouter({
    routes: [
        { path: '/home/:page', component: Home },
        { path: '/Comic/:link', component: Comic },
        { path: '*', redirect: '/home/1' }
    ]
})

var app = new Vue({
    el: '#app',
    router,
    methods: {

    },
    mounted: () => {

    },
    render: h => h(App)
});