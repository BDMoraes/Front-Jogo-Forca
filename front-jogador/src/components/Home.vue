<template>
  <b-container class="home">
    <b-row class="title title-div" align-h="center">
      <h1>Ranking de Jogadores</h1>
    </b-row>
    <b-row align-h="center">
      <b-col align-self="center">
        <b-table hover striped :fields="fields"> </b-table>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <div v-for="(jogador, index) in jogadores" :key="jogador.name" class="ranking">
        <span>{{ index + 1 }} </span>
        <span class="name">{{ jogador.name }} </span>
        <span>{{ jogador.score }}</span>
        <br>
      </div>
    </b-row>
    <b-row align-h="center">
      <b-button class="btn-lg botao" @click="categoria">Jogar</b-button>
    </b-row>
  </b-container>
</template>

<script>
import { baseApiUrl} from "@/global";

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
      const url = `${baseApiUrl}/api/ranking`;
      axios.get(url).then((res) => {
        this.jogadores = res.data.data.map((jogador) => {
          return { ...jogador, value: jogador.name };
        });
      });
    },
    categoria() {
      this.$router.push({ path: "/categoria" });
    },
  },
  mounted() {
    console.log("aqui");
    this.loadJogadores();
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
.ranking {
  display: inline-block;
  font-family: fontDalek;
  font-size: 20px;
}
.name {
  color: orange;
  padding-right: 30px;
  padding-left: 30px;
}
</style>