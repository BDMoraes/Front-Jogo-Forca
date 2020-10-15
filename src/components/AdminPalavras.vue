<template>
  <div class="palavra-admin">
    <b-form>
      <input id="palavra-id" v-model="palavra.id" type="hidden"/>
      <b-form-group label="Nome:" label-for="palavra-name">
        <b-form-input
            id="palavra-name"
            v-model="palavra.name"
            :readonly="mode === 'remove'"
            placeholder="Informe a Palavra..."
            required
            type="text"
        />
      </b-form-group>
      <b-form-group
          v-if="mode === 'save'"
          label="Categoria:"
          label-for="palavra.category.name"
      >
        <b-form-select
            id="palavra-categoria"
            v-model="palavra.category.id"
            :options="categorias"
        />
      </b-form-group>
      <b-button variant="primary" v-if="mode === 'save'" @click="save"
      >Salvar
      </b-button
      >
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
      >Excluir
      </b-button
      >
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr/>
    <b-table hover striped :items="palavras" :fields="fields" ref="table">
      <template slot="cell(actions)" slot-scope="data">
        <b-button
            class="espaco_bts"
            variant="primary"
            @click="loadPalavra(data.item)"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadPalavra(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import {baseApiUrl, showError} from '@/global';
import axios from 'axios';

export default {
  name: 'Adminpalavras',
  data: function() {
    return {
      mode: 'save',
      palavra: {
        category: {
          id: null,
        },
      },
      palavras: [],
      categorias: [
        {value: null, text: 'Selecione'},
      ],
      fields: [
        {key: 'id', label: 'Código', sortable: true},
        {key: 'name', label: 'Nome', sortable: true},
        {key: 'category.name', label: 'Categoria', sortable: true},
        {key: 'actions', label: 'Ações'},
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
    async loadPalavras() {
      const url = `${baseApiUrl}/api/word`;
      const {data} = await axios.get(url);
      this.palavras = [
        ...data.data.map((palavra) => {
          return {...palavra, value: palavra.id};
        }),
      ];
    },
    reset() {
      this.mode = 'save';
      this.palavra = {};
      this.loadPalavras();
    },
    save() {
      const method = this.palavra.id ? 'put' : 'post';
      const id = this.palavra.id
          ? `api/word/${this.palavra.id}`
          : 'api/category/' + this.palavra.category.id + '/word';
      axios[method](`${baseApiUrl}/${id}`, this.palavra).then(() => {
        this.loadPalavras();
        this.$toasted.global.defaultSuccess();
        this.reset();
      }).catch(showError);
    },
    remove() {
      const id = this.palavra.id;
      axios.delete(`${baseApiUrl}/api/word/${id}`).then(() => {
        this.$toasted.global.defaultSuccess();
        this.reset();
      }).catch(showError);
    },
    loadPalavra(palavra, mode = 'save') {
      this.mode = mode;
      this.palavra = {...palavra};
    },
  },
  mounted() {
    this.loadCategorias();
    this.loadPalavras();
  },
};
</script>

<style>
.espaco_bts {
  margin-right: 5px;
}
</style>
