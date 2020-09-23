<template>
  <div class="categoria-admin">
    <b-form>
      <input id="categoria-id" type="hidden" v-model="categoria.id" />
      <b-form-group label="Nome:" label-for="categoria-name">
        <b-form-input
          id="categoria-name"
          type="text"
          v-model="categoria.name"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe o Nome da Categoria..."
        />
      </b-form-group>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="categorias" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategoria(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategoria(data.item, 'remove')">
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
  name: "AdminCategorias",
  data: function () {
    return {
      mode: "save",
      categoria: {},
      categorias: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadCategorias() {
      const url = `${baseApiUrl}/categorias`;
      axios.get(url).then((res) => {
        // this.categorias = res.data
        this.categorias = res.data.map((categoria) => {
          return { ...categoria, value: categoria.id, text: categoria.path };
        });
      });
    },
    reset() {
      this.mode = "save";
      this.categoria = {};
      this.loadCategorias();
    },
    save() {
      const method = this.categoria.id ? "put" : "post";
      const id = this.categoria.id ? `/${this.categoria.id}` : "";
      axios[method](`${baseApiUrl}/categorias${id}`, this.categoria)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.categoria.id;
      axios
        .delete(`${baseApiUrl}/categorias/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadCategoria(categoria, mode = "save") {
      this.mode = mode;
      this.categoria = { ...categoria };
    },
  },
  mounted() {
    this.loadCategorias();
  },
};
</script>

<style>
</style>