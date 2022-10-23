require('./bootstrap');


window.Vue = require('vue');




import {createApp} from 'vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';


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

const router = createRouter({
    history: createWebHistory(),
    routes, 
  });

  

const app = createApp(App);
// app.use(axios);
app.use(router).mount('#app');


