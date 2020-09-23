<template>
  <div class="questao-admin">
    <b-form>
      <input id="questao-id" type="hidden" v-model="questao.id" />
      <b-form-group label="Nome:" label-for="questao-name">
        <b-form-input
          id="questao-name"
          type="text"
          v-model="questao.name"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe o Nome da Questao..."
        />
      </b-form-group>
      <b-form-group label="Descrição:" label-for="questao-desc">
        <b-form-input
          id="questao-desc"
          type="text"
          v-model="questao.desc"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Descrição da Questao..."
        />
      </b-form-group>
      <b-form-group label="Resposta:" label-for="questao-resp">
        <b-form-input
          id="questao-resp"
          type="text"
          v-model="questao.resp"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Resposta da Questao..."
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 1:" label-for="questao-alt1">
        <b-form-input
          id="questao-alt1"
          type="text"
          v-model="questao.alt1"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Alternativa incorreta 1 da Questao..."
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 2:" label-for="questao-alt2">
        <b-form-input
          id="questao-alt2"
          type="text"
          v-model="questao.alt2"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Alternativa incorreta 2 da Questao..."
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
    <b-table hover striped :items="questaos" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadQuestao(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadQuestao(data.item, 'remove')">
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
  name: "AdminQuestoes",
  data: function () {
    return {
      mode: "save",
      questao: {},
      questaos: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadQuestoes() {
      const url = `${baseApiUrl}/cquestaos`;
      axios.get(url).then((res) => {
        // this.questaos = res.data
        this.questaos = res.data.map((questao) => {
          return { ...questao, value: questao.id, text: questao.path };
        });
      });
    },
    reset() {
      this.mode = "save";
      this.questao = {};
      this.loadQuestoes();
    },
    save() {
      const method = this.questao.id ? "put" : "post";
      const id = this.questao.id ? `/${this.questao.id}` : "";
      axios[method](`${baseApiUrl}/questaos${id}`, this.questao)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.questao.id;
      axios
        .delete(`${baseApiUrl}/questaos/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadQuestao(questao, mode = "save") {
      this.mode = mode;
      this.questao = { ...questao };
    },
  },
  mounted() {
    this.loadQuestoes();
  },
};
</script>

<style>
</style>