import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import AdminPages from "../components/Admin/AdminPages";
import Login from '../components/auth/Auth';

//import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Home
},
{
    name: "adminPages",
    path: "/admin",
    component: AdminPages
},{
    name: 'auth',
    path: '/Auth',
    component: Login
}]

export default new VueRouter({
    mode: "history",
    routes
})

