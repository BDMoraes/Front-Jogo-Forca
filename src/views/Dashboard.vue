<template>
  <b-container>
    <div class="admin-pages">
      <PageTitle
          icon="fa fa-cogs"
          main="Administração do Sistema"
          sub="Cadastros"
      />
      <div class="admin-pages-tabs">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Categorias" active>
              <AdminCategorias />
            </b-tab>
            <b-tab title="Palavras">
              <AdminPalavras/>
            </b-tab>
            <b-tab title="Questões">
              <AdminQuestoes/>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import PageTitle from '../components/PageTitle';
import AdminCategorias from '../components/AdminCategorias';
import AdminPalavras from '../components/AdminPalavras';
import AdminQuestoes from '../components/AdminQuestoes';

export default {
  name: 'Dashboard',
  components: {PageTitle, AdminCategorias, AdminPalavras, AdminQuestoes},
};
</script>

<style>
</style>
