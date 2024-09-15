import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home.vue';
import Category from '../pages/category/Category.vue';

Vue.use(VueRouter)

const routes = [
  { 
     path: '/',
     name: 'Home',
     component: Home
  },
  { 
    path: '/articles/:id',
    name: 'Articles',
    component: Category
 }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
})

export default router;
