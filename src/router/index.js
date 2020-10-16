import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import Login from '@/views/Login';
import Home from '@/views/Home';
import store from '@/config/store';
import Categoria from '@/views/Categoria';
import Jogo from '@/views/Jogo';
import Final from '@/views/Final';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '',
    component: Home,
  },
  {
    name: 'Categoria',
    path: '/categoria',
    component: Categoria,
  },
  {
    name: 'Jogo',
    path: '/jogo/:categoria',
    component: Jogo,
  },
  {
    name: 'Final',
    path: '/final',
    component: Final,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
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

