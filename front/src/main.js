import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'font-awesome/css/font-awesome.css';
import store from './config/store';

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
