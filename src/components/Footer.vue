<template>
  <b-navbar class="d-flex justify-content-center navbar-footer" fixed="bottom" type="dark" variant="primary">
    <b-navbar-brand class="title-footer">Modelagem de Software - 6N 2020/2</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style>
.title-footer {
  font-size: 1rem !important;
  color: black !important;
}

.navbar-footer {
  background: rgb(255, 71, 1);
  background: linear-gradient(90deg, rgba(255, 71, 1, 1) 0%, rgba(254, 165, 0, 1) 100%);
}
</style>
