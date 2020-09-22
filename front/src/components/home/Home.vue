<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Estatísticas" />
    <div class="stats">
      <Stat title="Categorias" :value="stat.categorias" icon="fa fa-folder" color="#3282cd" />
      <Stat title="Palavras" :value="stat.palavras" icon="fa fa-pencil" color="#3bc480" />
      <Stat title="Questões" :value="stat.questoes" icon="fa fa-book" color="#d54d50" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../Dashboard_Admin/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "@/global";
export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>