import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

import './assets/app.scss';
import 'font-awesome/css/font-awesome.css';

import store from './config/store';
import './config/msg';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
