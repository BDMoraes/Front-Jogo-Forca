<template>
  <b-container class="back">
    <b-row class="justify-content-md-center title title-div">
      <h1>Selecione a categoria</h1>
    </b-row>
    <!-- <b-row class="justify-content-md-center">
      <b-form-group label="Categoria:" label-for="categoria.name">
        <b-form-select
          id="palavra-categoria"
          :options="categorias"
          v-model="categoria.name"
        />
      </b-form-group>
    </b-row> -->
    <b-row class="justify-content-md-center title">
      <b-button class="btn-lg botao">Vamos lá!</b-button>
    </b-row>
  </b-container>
</template>

<script>
import { baseApiUrl /*showError*/ } from "@/global";

import axios from "axios";

export default {
  name: "Categoria",
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
    categoria(){
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
  width: 80%;
  height: 70%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.title {
  font-family: fontDalek;
}
.title-div {
  background-color: orange;
  border-radius: 10px;
  width: 120%;
}
.botao {
  background-color: orange;
}
</style>