<template>
  <b-navbar class="d-flex justify-content-center navbar-header" fixed="top" type="dark" variant="primary">
    <b-navbar-brand class="title-header" href="/">{{ title }}</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
  },
  methods: {
    administracao() {
      this.$router.push({name: 'Dashboard'});
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push({name: 'Login'});
    },
  },
};
</script>
<style>
.title-header {
  font-size: 2rem !important;
  color: black !important;
}

.navbar-header {
  background: rgb(255, 71, 1);
  background: linear-gradient(90deg, rgba(255, 71, 1, 1) 0%, rgba(254, 165, 0, 1) 100%);
}
</style>
