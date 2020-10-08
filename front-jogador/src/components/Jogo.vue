<template>
  <b-container class="back">
    <b-row class="palavra">
      <div v-for="palavra in palavra" :key="palavra" class="">
        A
      </div>
    </b-row>
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
      palavra: 9,
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
  border-radius: 10px;
}
.palavra div{
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  margin: 2px;
}
</style>