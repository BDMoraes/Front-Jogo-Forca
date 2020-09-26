import Vue from "vue";
import VueRouter from "vue-router";

import AdminPages from "../components/Admin/AdminPages";
import Login from '../components/auth/Auth';


Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Login
},
{
    name: "adminPages",
    path: "/admin",
    component: AdminPages
}, {
    name: 'auth',
    path: '/Auth',
    component: Login
}]

export default new VueRouter({
    mode: "history",
    routes
})

