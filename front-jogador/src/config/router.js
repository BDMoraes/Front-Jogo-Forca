import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../components/Home';
import Categoria from '../components/Categoria';
import Jogo from '../components/Jogo';
import Final from '../components/Final';


Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Home
},
{
    name: "categoria",
    path: "/Categoria",
    component: Categoria
},
{
    name: "jogo",
    path: "/Jogo/:categoria",
    component: Jogo
},
{
    name: "final",
    path: "/Final/:pontos",
    component: Final
},]

export default new VueRouter({
    mode: "history",
    routes
})

