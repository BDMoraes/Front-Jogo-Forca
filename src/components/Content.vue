<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  background-color: white;
  grid-area: content;
  padding: 20px;
}
</style>