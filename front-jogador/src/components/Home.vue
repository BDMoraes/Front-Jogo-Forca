<template>
    <b-container class="home">
        <b-row class="justify-content-md-center"> 
          <h1>Ranking de Jogadores</h1> 
        </b-row>
        <b-row class="justify-content-md-center">
          <b-table hover striped :items="jogadores" :fields="fields"> </b-table>
        </b-row>

        <b-row class="justify-content-md-center">
          <b-button variant="danger" class="btn-lg">Jogar</b-button>
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
           { key: "name", label: "Nome"},
           { key: "pontos", label: "Pontos"},
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
    mounted() {
      this.loadJogadores();
    },
  },
};
</script>

<style>
.home {
  background-color: white;
  width: 80%;
  height: 70%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius:  10px;
}
</style>