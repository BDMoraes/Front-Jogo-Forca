<template>
  <b-navbar class="navbar-header" fixed="top" variant="primary">
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown hidden left></b-nav-item-dropdown>
    </b-navbar-nav>
    <b-navbar-brand class="mr-0 title-header" href="/" v-bind:class="{ 'ml-7': authenticated }">{{
        title
      }}
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown v-if="authenticated" class="text-dark" right text="Administrador">
        <b-dropdown-item @click="administracao">Dashboard</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="logout">Sair</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
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
.ml-7 {
  margin-left: 8.5rem !important;
}

.title-header {
  font-size: 2rem !important;
}

.navbar-header {
  background: rgb(255, 71, 1);
  background: linear-gradient(90deg, rgba(255, 71, 1, 1) 0%, rgba(254, 165, 0, 1) 100%);
}
</style>
