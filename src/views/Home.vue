<template>
  <b-container>
    <b-card align="center" bg-variant="secondary" title="Ranking de Jogadores"></b-card>
    <b-row align-h="center">
      <b-col align-self="center">
        <b-table :fields="fields" :items="jogadores" class="ranking" hover striped></b-table>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-button class="btn-lg" variant="primary" @click="categoria">Jogar</b-button>
    </b-row>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: 'Home',
  data: function() {
    return {
      jogadores: [],
      fields: [
        {key: 'posicao', label: 'Posição', class: 'index'},
        {key: 'name', label: 'Nome', class: 'name'},
        {key: 'score', label: 'Pontuação', class: 'score'},
      ],
    };
  },
  methods: {
    loadJogadores() {
      const url = `${baseApiUrl}/api/ranking`;
      axios.get(url).then((res) => {
        this.jogadores = res.data.data.map((jogador, index) => {
          return {
            ...jogador,
            posicao: index + 1,
            value: jogador.name,
          };
        });
      });
    },
    categoria() {
      this.$router.push({path: '/categoria'});
    },
  },
  mounted() {
    this.loadJogadores();
  },
};
</script>

<style>
.ranking {
  font-size: 20px;
}

.name {
  color: orange;
  padding-right: 90px;
  padding-left: 90px;
}

.score {
  text-align: end;
}

.index {
  text-align: center;
}
</style>
