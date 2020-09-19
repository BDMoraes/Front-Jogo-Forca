<template>
  <!-- <div id="app">
    <Login/>
  </div>-->
  <div id="app">
    <Header />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
//import Login from "./components/Login.vue";
import Header from "./components/Dashboard_Admin/Header";
import Menu from "./components/Dashboard_Admin/Menu";
import Content from "./components/Dashboard_Admin/Content";
import Footer from "./components/Dashboard_Admin/Footer";

export default {
  name: "App",
  components:
    //Login
    { Header, Menu, Content, Footer },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
        "header header"
        "menu content"
        "menu footer";
}
</style>
