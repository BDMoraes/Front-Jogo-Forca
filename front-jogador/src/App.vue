<template>
  <div id="app">
    <Header title="Jogo da forca do Pitágoras"/>
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Content, Footer },
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
