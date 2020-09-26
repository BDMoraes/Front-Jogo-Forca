<template>
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
            <AdminPalavras />
          </b-tab>
          <b-tab title="Questões">
            <AdminQuestoes />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../Dashboard_Admin/PageTitle";
import AdminCategorias from "./AdminCategorias";
import AdminPalavras from "./AdminPalavras";
import AdminQuestoes from "./AdminQuestoes";

export default {
  name: "AdminPages",
  components: { PageTitle, AdminCategorias, AdminPalavras, AdminQuestoes },
};
</script>

<style>
</style>