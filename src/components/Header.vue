<template>
  <b-navbar fixed="top" type="dark" variant="primary">
    <b-navbar-brand href="/">{{ title }}</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="authenticated" right text="Administrador">
          <b-dropdown-item @click="administracao">Dashboard</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="logout">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
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
