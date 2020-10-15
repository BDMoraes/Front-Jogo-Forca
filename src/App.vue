<template>
  <div id="app" class="h-100">
    <Header title="Jogo da forca do Pitágoras"/>
    <Content/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {Header, Content, Footer},
};
</script>
