import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';
import 'popper.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
