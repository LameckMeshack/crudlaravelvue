require('./bootstrap');


window.Vue = require('vue');

// import VueRouter from 'vue-router';



import axios from 'axios';

import App from './App.vue';
Vue.use(axios);


import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),  
    routes
});

const app = VueRouter.createApp({
    router,
    render: (h) => h(App)
});

app.mount('#app');


// const app = new Vue(Vue.util.extend({ router })).$mount('#app');