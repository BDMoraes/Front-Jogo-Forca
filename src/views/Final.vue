<template>
  <b-container>
    <b-card align="center" bg-variant="secondary" class="mt-5" title="Ranking de Jogadores"></b-card>
    <b-row align-h="center" class="mt-5">
      <b-form-group label-for="player-name">
        <b-form-input
            id="player-name"
            v-model="jogador"
            placeholder="Informe seu nickname"
            required
            size="lg"
            type="text"
        />
      </b-form-group>
    </b-row>
    <b-row align-h="center" class="mt-5">
      <b-button class="btn-lg" variant="primary" @click="finalizar">Gravar</b-button>
    </b-row>
  </b-container>
</template>
<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: 'Final',
  data: function() {
    return {
      jogador: '',
    };
  },
  methods: {
    finalizar() {
      const pontos = this.$route.params.pontuacao;
      const url = `${baseApiUrl}/api/ranking`;
      axios.post(url, {name: this.jogador, score: pontos});
      this.$router.push({path: '/'});
    },
  },
  mounted() {
  },
};
</script>
