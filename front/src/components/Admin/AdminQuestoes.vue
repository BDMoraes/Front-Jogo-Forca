<template>
  <div class="questao-admin">
    <b-form>
      <input id="questao-id" type="hidden" v-model="questao.id" />
      <b-form-group label="Nome:" label-for="questao-name">
        <b-form-input
          id="questao-name"
          type="text"
          v-model="questao.question"
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
          v-model="questao.resp.answer"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Resposta da Questao..."
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 1:" label-for="questao-alt1">
        <b-form-input
          id="questao-alt1"
          type="text"
          v-model="questao.alt1.answer"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe a Alternativa incorreta 1 da Questao..."
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 2:" label-for="questao-alt2">
        <b-form-input
          id="questao-alt2"
          type="text"
          v-model="questao.alt2.answer"
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
      <template slot="cell(actions)" slot-scope="data">
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
      questao: {
        resp: {},
        alt1: {},
        alt2: {},
      },
      questaos: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "question", label: "Nome", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadQuestoes() {
      const url = `${baseApiUrl}/api/question`;
      axios.get(url).then((res) => {
        this.questaos = res.data.data.map((questao) => {
          return { ...questao, value: questao.id };
        });
      });
    },
    reset() {
      this.mode = "save";
      this.questao = {};
      this.loadQuestoes();
    },
    save() {
      const resp = this.questao.resp;
      const alt1 = this.questao.alt1;
      const alt2 = this.questao.alt2;

      const method = this.questao.id ? "put" : "post";
      const id = this.questao.id ? `/${this.questao.id}` : "";
      axios[method](`${baseApiUrl}/api/question${id}`, this.questao)
        .then((response) => {
          this.$toasted.global.defaultSuccess();
          this.reset();
          this.saveResposta(response.data.data, {
            ...resp,
            correct: true,
          });
          this.saveResposta(response.data.data, alt1);
          this.saveResposta(response.data.data, alt2);
          this.loadQuestoes();
        })
        .catch(showError);
    },
    saveResposta(questao, resposta) {
      const method = resposta.id ? "put" : "post";
      const id = resposta.id
        ? `api/answer/${resposta.id}`
        : `api/question/${questao.id}/answer${id}`;
      axios[method](`${baseApiUrl}/${id}`, resposta);
      this.loadQuestoes();
    },
    remove() {
      const id = this.questao.id;
      axios
        .delete(`${baseApiUrl}/api/question/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    async loadQuestao(questao, mode = "save") {
      this.mode = mode;
      const response = await axios.get(
        `${baseApiUrl}/api/question/${questao.id}/answer`
      );
      questao.resp = response.data.data.find((resposta) => resposta.correct);
      const respostas = response.data.data.filter(
        (resposta) => !resposta.correct
      );
      questao.alt1 = respostas.shift();
      questao.alt2 = respostas.shift();
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