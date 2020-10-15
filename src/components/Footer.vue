<template>
  <footer class="footer">
    <span>Modelagem de Software - 6N 2020/2</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.footer {
  font-family: fontDalek;
  grid-area: footer;
  background: linear-gradient(to right, orangered, orange);
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-right: 10px;
}
</style>
