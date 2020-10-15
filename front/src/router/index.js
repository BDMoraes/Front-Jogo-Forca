import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminPages from '../components/Admin/AdminPages';
import Login from '../components/auth/Auth';
import store from '@/config/store';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: AdminPages,
    meta: {
      guarded: true,
    },
  }];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let redirect = to.name !== 'Login' &&
      to.meta.guarded &&
      store.state.accessToken === null;

  redirect ? next({name: 'Login'}) : next();
});

export default router;

