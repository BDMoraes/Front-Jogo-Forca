<template>
  <b-container class="content h-100" fluid="true">
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.container {
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
