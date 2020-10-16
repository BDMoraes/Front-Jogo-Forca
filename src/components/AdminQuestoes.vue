<template>
  <div class="questao-admin">
    <b-form @submit="save">
      <b-form-group label="Enunciado:" label-for="questao-name">
        <b-form-input
            id="questao-name"
            v-model="questao.question"
            :readonly="mode === 'remove'"
            placeholder="Informe o Enunciado da Questão..."
            required
            type="text"
        />
      </b-form-group>
      <b-form-group label="Resposta:" label-for="questao-resp">
        <b-form-input
            id="questao-resp"
            v-model="questao.resp.answer"
            :readonly="mode === 'remove'"
            placeholder="Informe a Resposta da Questao..."
            required
            type="text"
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 1:" label-for="questao-alt1">
        <b-form-input
            id="questao-alt1"
            v-model="questao.alt1.answer"
            :readonly="mode === 'remove'"
            placeholder="Informe a Alternativa incorreta 1 da Questao..."
            required
            type="text"
        />
      </b-form-group>
      <b-form-group label="Alternativa incorreta 2:" label-for="questao-alt2">
        <b-form-input
            id="questao-alt2"
            v-model="questao.alt2.answer"
            :readonly="mode === 'remove'"
            placeholder="Informe a Alternativa incorreta 2 da Questao..."
            required
            type="text"
        />
      </b-form-group>
      <b-button v-if="mode === 'save'" type="submit" variant="primary">
        Salvar
      </b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
      >Excluir
      </b-button
      >
      <b-button class="ml-2" variant="danger" @click="reset">Cancelar</b-button>
    </b-form>
    <hr/>
    <b-table :fields="fields" :items="questoes" hover striped>
      <template slot="cell(actions)" slot-scope="data">
        <b-button
            variant="primary"
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
import {baseApiUrl, showError} from '@/global';

import axios from 'axios';

export default {
  name: 'AdminQuestoes',
  data: function() {
    return {
      mode: 'save',
      questao: {
        resp: {},
        alt1: {},
        alt2: {},
      },
      questoes: [],
      fields: [
        {key: 'id', label: 'Código', sortable: true},
        {key: 'question', label: 'Nome', sortable: true},
        {key: 'actions', label: 'Ações'},
      ],
    };
  },
  methods: {
    loadQuestoes() {
      const url = `${baseApiUrl}/api/question`;
      axios.get(url).then((res) => {
        this.questoes = res.data.data.map((questao) => {
          return {...questao, value: questao.id};
        });
      });
    },
    reset() {
      this.mode = 'save';
      this.questao = {
        resp: {},
        alt1: {},
        alt2: {},
      };
    },
    save(e) {
      e.preventDefault();

      const resp = this.questao.resp;
      const alt1 = this.questao.alt1;
      const alt2 = this.questao.alt2;

      const edicao = !!this.questao.id;
      const method = edicao ? 'put' : 'post';
      const id = edicao ? `/${this.questao.id}` : '';

      axios[method](`${baseApiUrl}/api/question${id}`, this.questao).then((response) => {
        this.$toasted.global.defaultSuccess();
        this.reset();

        const questao = response.data.data;

        this.saveResposta(questao, {
          ...resp,
          correct: true,
        });
        this.saveResposta(questao, alt1);
        this.saveResposta(questao, alt2);

        if (edicao) {
          const index = this.questoes.findIndex(questao => questao.id === this.questao.id);

          const questoes = this.questoes;
          questoes[index] = questao;

          this.questoes = [...questoes];
        } else {
          this.questoes = [{...questao, value: questao.id}, ...this.questoes];
        }
      }).catch(showError);
    },
    saveResposta(questao, resposta) {
      const method = resposta.id ? 'put' : 'post';
      const id = resposta.id
          ? `api/answer/${resposta.id}`
          : `api/question/${questao.id}/answer`;
      axios[method](`${baseApiUrl}/${id}`, resposta);
      this.loadQuestoes();
    },
    remove() {
      const id = this.questao.id;

      axios.delete(`${baseApiUrl}/api/question/${id}`).then(() => {
        this.$toasted.global.defaultSuccess();
        this.reset();

        const index = this.questoes.findIndex(questao => questao.id === id);

        const questoes = this.questoes;
        questoes.splice(index, 1);

        this.questoes = [...questoes];
      }).catch(showError);
    },
    async loadQuestao(questao, mode = 'save') {
      this.mode = mode;
      const response = await axios.get(
          `${baseApiUrl}/api/question/${questao.id}/answer`,
      );
      questao.resp = response.data.data.find((resposta) => resposta.correct) ?? {};
      const respostas = response.data.data.filter(
          (resposta) => !resposta.correct,
      );
      questao.alt1 = respostas.shift() ?? {};
      questao.alt2 = respostas.shift() ?? {};

      this.questao = {...questao};
    },
  },
  mounted() {
    this.loadQuestoes();
  },
};
</script>
