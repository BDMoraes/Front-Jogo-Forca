<template>
  <b-container>
    <b-card align="center" bg-variant="secondary" class="mt-5" title="Selecione Uma Categoria"></b-card>
    <b-row align-h="center" class="mt-5">
      <b-col align-self="center">
        <b-form-group class="select-categoria" label-for="categoria.name">
          <b-form-select id="palavra-categoria" v-model="selected" :options="categorias" class="font" size="lg"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="title mt-5">
      <b-col class="d-flex justify-content-center">
        <b-button class="btn-lg" variant="primary" @click="categoria">Vamos lá!</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: 'Categoria',
  data: function() {
    return {
      selected: 0,
      categorias: [
        {
          value: 0,
          text: 'Todas',
        },
      ],
    };
  },
  methods: {
    loadCategorias() {
      const url = `${baseApiUrl}/api/game/category`;
      axios.get(url).then((res) => {
        this.categorias = [
          ...this.categorias, ...res.data.data.map((categoria) => {
            return {value: categoria.id, text: categoria.name};
          })];
      });
    },
    categoria() {
      this.$router.push({path: `/jogo/${this.selected}`});
    },
  },
  mounted() {
    this.loadCategorias();
  },
};
</script>
<style>
.select-categoria {
  display: grid;
  justify-content: center;
  align-items: center;
}

.font {
  font-size: 15px;
}
</style>
