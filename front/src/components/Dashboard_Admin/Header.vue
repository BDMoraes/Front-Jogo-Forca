<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background: linear-gradient(to right, orangered, orange);
  grid-area: header;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>