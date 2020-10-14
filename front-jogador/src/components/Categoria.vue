<template>
  <b-container class="back">
    <b-row class="title title-div" align-h="center">
      <b-col align-self="center">
        <h1>Selecione a categoria</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col align-self="center">
        <b-form-group class="select-categoria" label-for="categoria.name">
          <b-form-select id="palavra-categoria" :options="categorias" v-model="selected" class="font"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="title" align-h="center">
      <b-col align-self="center">
        <b-button class="btn-lg botao" @click="categoria">Vamos lá!</b-button>
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
      const url = `${baseApiUrl}/api/category`;
      axios.get(url).then((res) => {
        this.categorias = [
          ...this.categorias, ...res.data.data.map((categoria) => {
            return {value: categoria.id, text: categoria.name};
          })];
      });
    },
    categoria() {
      this.$router.push({path: '/Jogo/' + this.selected});
    },
  },
  mounted() {
    this.loadCategorias();
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

.select-categoria {
  display: grid;
  justify-content: center;
  align-items: center;
}

.font {
  font-family: fontDalek;
  font-size: 15px;
}
</style>
