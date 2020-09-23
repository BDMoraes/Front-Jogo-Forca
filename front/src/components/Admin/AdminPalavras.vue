<template>
  <div class="palavra-admin">
    <b-form>
      <input id="palavra-id" type="hidden" v-model="palavra.id" />
      <b-form-group label="Nome:" label-for="palavra-name">
        <b-form-input
          id="palavra-name"
          type="text"
          v-model="palavra.name"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Palavra..."
        />
      </b-form-group>
      <b-form-group label="Categoria Pai:" label-for="palavra-parentId">
        <b-form-select
          v-if="mode === 'save'"
          id="palavra-parentId"
          :options="palavras"
          v-model="palavra.parentId"
        />
        <b-form-input v-else id="palavra-parentId" type="text" v-model="palavra.path" readonly />
      </b-form-group>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="palavras" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadPalavra(data.item)" class="mr-2">
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
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Adminpalavras",
  data: function () {
    return {
      mode: "save",
      palavra: {},
      palavras: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: 'category', label: 'Categoria', sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadPalavras() {
      const url = `${baseApiUrl}/palavras`;
      axios.get(url).then((res) => {
        // this.palavras = res.data
        this.palavras = res.data.map((palavra) => {
          return { ...palavra, value: palavra.id, /*text: palavra.path*/ };
        });
      });
    },
    reset() {
      this.mode = "save";
      this.palavra = {};
      this.loadPalavras();
    },
    save() {
      const method = this.palavra.id ? "put" : "post";
      const id = this.palavra.id ? `/${this.palavra.id}` : "";
      axios[method](`${baseApiUrl}/palavras${id}`, this.palavra)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.palavra.id;
      axios
        .delete(`${baseApiUrl}/palavras/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadPalavra(palavra, mode = "save") {
      this.mode = mode;
      this.palavra = { ...palavra };
    },
  },
  mounted() {
    this.loadPalavras();
  },
};
</script>

<style>
</style>