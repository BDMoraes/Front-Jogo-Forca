<template>
  <header class="header">
    <h1 class="title">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.header {
  background: linear-gradient(to right, orangered, orange);
  grid-area: header;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-family: fontDalek;
  font-size: 2rem;
  color: black;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
.title a {
  color: black;
  text-decoration: none;
}
.title a:hover {
  color: black;
  text-decoration: none;
}
</style>