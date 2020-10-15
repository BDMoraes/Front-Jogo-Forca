<template>
  <header class="header">
    <h1 class="title">
      {{ title }}
    </h1>
    <b-dropdown v-if="authenticated" text="Administrador" variant="transparent">
      <b-dropdown-item @click="administracao">Dashboard</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="logout">Sair</b-dropdown-item>
    </b-dropdown>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    hideUserDropdown: Boolean,
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
@font-face {
  font-family: fontDalek;
  src: url("../../assets/fonts/DALEKPINPOINTBOLD.TTF");
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
