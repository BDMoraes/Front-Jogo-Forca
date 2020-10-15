<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header title="Jogo da forca do Pitágoras" :hideUserDropdown="!user" />
    <Content />
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {Header, Content, Footer},
  computed: mapState(['isMenuVisible', 'user']),
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
    "content content"
    "footer footer";
}
</style>
