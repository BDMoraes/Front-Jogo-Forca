import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';
import './assets/app.scss';
import './config/bootstrap';
import 'font-awesome/css/font-awesome.css';

import store from './config/store';
import './config/msg';
import router from './config/router';



Vue.use(VueAxios, axios);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
