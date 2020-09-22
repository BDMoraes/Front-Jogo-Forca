<template>
  <header class="header">
    <a class="toggle">
      <i class="fa fa-lg" :class="icon" @click="toggleMenu" v-if="!hideToggle"></i>
    </a>
    <h1 class="title">{{ title }}</h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";

export default {
  name: "Header",
  components: {
    UserDropdown,
  },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean,
  },
  computed: {
    icon() {
      return "fa fa-bars";
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
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
.title {
  font-size: 2rem;
  color: black;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
.title a {
  color: #fff;
  text-decoration: none;
}

header.header > a.toggle {
  width: 60px;
  height: 300%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
  height: 300%;
}
</style>