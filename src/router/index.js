import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import("../pages/home/Home.vue");
const Category = () => import("../pages/category/Category.vue");

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
