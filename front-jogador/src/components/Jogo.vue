<template>
  <b-container fluid class="text-center back">
  </b-container>
</template>

<script>
import { baseApiUrl /*showError*/ } from "@/global";

import axios from "axios";

export default {
  name: "Jogo",
  data: function () {
    return {
      categorias: [],
    };
  },
  methods: {
    loadCategorias() {
      const url = `${baseApiUrl}/api/category`;
      axios.get(url).then((res) => {
        this.categorias = res.data.data.map((categoria) => {
          return { value: categoria.id, text: categoria.name };
        });
      });
    },
    categoria() {
      this.$router.push({ path: "/Jogo" });
    },
    mounted() {
      this.loadCategorias();
    },
  },
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.back {
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>