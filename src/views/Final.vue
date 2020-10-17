<template>
  <b-container>
    <b-card align="center" bg-variant="secondary" class="mt-5" title="Ranking de Jogadores"></b-card>
    <b-form @submit="finalizar">
      <b-row align-h="center" align-v="center" class="mt-5">
        <b-col class="d-flex justify-content-center">
          <h1>Você fez {{ this.pontuacao }} pontos</h1>
        </b-col>
      </b-row>
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
        <b-button class="btn-lg" type="submit" variant="primary">Enviar</b-button>
      </b-row>
    </b-form>
  </b-container>
</template>
<script>
import {baseApiUrl, showError} from '@/global';

import axios from 'axios';

export default {
  name: 'Final',
  data: function() {
    return {
      jogador: '',
    };
  },
  methods: {
    async finalizar(e) {
      e.preventDefault();

      try {
        const pontos = this.$store.state.pontuacao;
        const url = `${baseApiUrl}/api/ranking`;

        await axios.post(url, {name: this.jogador, score: pontos});
        await this.$router.push({name: 'Home'});
      } catch (e) {
        showError(e);
      }
    },
  },
  computed: {
    pontuacao() {
      return this.$store.state.pontuacao;
    },
  },
};
</script>
