<template>
  <div class="categoria-admin">
    <b-form @submit="save">
      <b-form-group label="Nome:" label-for="categoria-name">
        <b-form-input
            id="categoria-name"
            v-model="categoria.name"
            :readonly="mode === 'remove'"
            placeholder="Informe o Nome da Categoria..."
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
    <b-table hover striped :items="categorias" :fields="fields">
      <template slot="cell(actions)" slot-scope="data">
        <b-button
            variant="primary"
            @click="loadCategoria(data.item)"
            class="espaco_bts"
        >
          <i class="fa fa-pencil" color="red"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategoria(data.item, 'remove')">
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
  name: 'AdminCategorias',
  data: function() {
    return {
      mode: 'save',
      categoria: {},
      categorias: [],
      fields: [
        {key: 'id', label: 'Código', sortable: true},
        {key: 'name', label: 'Nome', sortable: true},
        {key: 'actions', label: 'Ações'},
      ],
    };
  },
  methods: {
    loadCategorias() {
      const url = `${baseApiUrl}/api/category`;
      axios.get(url).then((res) => {
        this.categorias = res.data.data.map((categoria) => {
          return {...categoria, value: categoria.id};
        });
      });
    },
    reset() {
      this.mode = 'save';
      this.categoria = {};
    },
    save(e) {
      e.preventDefault();

      const edicao = !!this.categoria.id;
      const method = edicao ? 'put' : 'post';
      const id = edicao ? `/${this.categoria.id}` : '';

      axios[method](`${baseApiUrl}/api/category${id}`, this.categoria).then(response => {
        const categoria = response.data.data;

        if (edicao) {
          const index = this.categorias.findIndex(categoria => categoria.id === this.categoria.id);

          const categorias = this.categorias;
          categorias[index] = categoria;

          this.categorias = [...categorias];
        } else {
          this.categorias = [{...categoria, value: categoria.id}, ...this.categorias];
        }

        this.$toasted.global.defaultSuccess();
        this.reset();
      }).catch(showError);
    },
    remove() {
      const id = this.categoria.id;
      axios.delete(`${baseApiUrl}/api/category/${id}`).then(() => {
        this.$toasted.global.defaultSuccess();
        this.reset();

        const index = this.categorias.findIndex(categoria => categoria.id === id);

        const categorias = this.categorias;
        categorias.splice(index, 1);

        this.categorias = [...categorias];
      }).catch(showError);
    },
    loadCategoria(categoria, mode = 'save') {
      this.mode = mode;
      this.categoria = {...categoria};
    },
  },
  mounted() {
    this.loadCategorias();
  },
};
</script>

<style>
.espaco_bts {
  margin-right: 5px;
}
</style>
