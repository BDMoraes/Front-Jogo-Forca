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
      <b-form-group
        v-if="mode === 'save'"
        label="Categoria:"
        label-for="palavra.categoria"
      >
        <b-form-select
          id="palavra-categoria"
          :options="categorias"
          v-model="palavra.categoria"
        />
      </b-form-group>
      <b-button variant="primary" v-if="mode === 'save'" @click="save"
        >Salvar</b-button
      >
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
        >Excluir</b-button
      >
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="palavras" :fields="fields">
      <template slot="cell(actions)" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadPalavra(data.item)"
          class="espaco_bts"
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
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Adminpalavras",
  data: function () {
    return {
      mode: "save",
      palavra: {},
      palavras: [],
      categorias: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "category", label: "Categoria", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadCategorias() {
      const url = `${baseApiUrl}/api/category`;
      axios.get(url).then((res) => {
        this.categorias = res.data.data.map((categoria) => {
          return { value: categoria.id, text: categoria.name };
        });
      });
    },
    loadPalavras() {
      const url = `${baseApiUrl}/palavras`;
      axios.get(url).then((res) => {
        this.palavras = res.data.data.map((palavra) => {
          return { ...palavra, value: palavra.id };
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