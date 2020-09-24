<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
    <Header title="Jogo da forca do Pitágoras" :hideToggle="!user" :hideUserDropdown="!user"/>
    <Menu v-if="user"/>
    <Content />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Dashboard_Admin/Header";
import Menu from "./components/Dashboard_Admin/Menu";
import Content from "./components/Dashboard_Admin/Content";
import Footer from "./components/Dashboard_Admin/Footer";

export default {
  name: "App",
  components:{ Header, Menu, Content, Footer },
  computed: mapState(['isMenuVisible', 'user'])
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

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
