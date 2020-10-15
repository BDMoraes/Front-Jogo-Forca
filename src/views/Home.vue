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
    <b-col class="ran">
      <b-row v-for="(jogador, index) in jogadores" :key="jogador.name" class="ranking">
        <span>{{ index + 1 }}</span>
        <span class="name">{{ jogador.name }}</span>
        <span>{{ jogador.score }}</span>
      </b-row>
    </b-col>
    <b-row align-h="center">
      <b-button class="btn-lg" variant="primary" @click="categoria">Jogar</b-button>
    </b-row>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: "Home",
  data: function () {
    return {
      jogadores: [],
      fields: [
        { key: "posicao", label: "Posição" },
        { key: "name", label: "Nome" },
        { key: "pontos", label: "Pontuação" },
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
  font-family: fontDalek;
  font-size: 20px;
}
.name {
  color: orange;
  padding-right: 90px;
  padding-left: 90px;
}
.ran{
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
</style>
