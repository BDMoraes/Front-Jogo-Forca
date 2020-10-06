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
.content{
  background-image: url("../assets/img/bg.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: content;
}
</style>