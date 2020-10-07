<template>
  <b-container class="home">
    <b-row class="title title-div" align-h="center">
      <h1>Ranking de Jogadores</h1>
    </b-row>
    <b-row align-h="center">
      <b-col align-self="center">
        <b-table hover striped :items="jogadores" :fields="fields"> </b-table>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-button class="btn-lg botao" @click="categoria">Jogar</b-button>
    </b-row>
  </b-container>
</template>

<script>
import { baseApiUrl /*showError*/ } from "@/global";

import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      jogadores: [],
      fields: [
        { key: "posicao", label: "Posição" },
        { key: "pontos", label: "Pontuação" },
        { key: "name", label: "Nome" },
      ],
    };
  },
  methods: {
    loadJogadores() {
      const url = `${baseApiUrl}/api/`;
      axios.get(url).then((res) => {
        this.jogadores = res.data.data.map((jogador) => {
          return { ...jogador, value: jogador.name };
        });
      });
    },
    categoria() {
      this.$router.push({ path: "/categoria" });
    },
    mounted() {
      this.loadJogadores();
    },
  },
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.home {
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