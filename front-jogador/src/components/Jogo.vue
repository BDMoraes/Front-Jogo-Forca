<template>
  <b-container class="back-jogo">
    <b-col class="topo">
      <b-row align-h="between">
        <img src="../assets/img/Pitagoras_corda.png" width="260" height="300" />
        <img src="../assets/img/temp.gif" width="300" />
      </b-row>
      <b-row class="palavra" align-h="center">
        <div v-for="letra in letras" :key="letra" class="letras">
          <span v-if="letra">{{ letra }}</span>
          <span v-if="!letra"> </span>
        </div>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="opcoes">
        <b-div class="alfabeto">
          <span v-for="letra in alfabeto" :key="letra">
            <b-button
              v-if="letra"
              class="btn-lg botao"
              @click="validar(letra)"
              >{{ letra }}</b-button
            >
          </span>
        </b-div>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="fundo" align-h="start">
        <b-div v-for="letra in erros" :key="letra" class="letras-erradas">{{
          letra
        }}</b-div>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import { baseApiUrl /*showError*/ } from "@/global";

import axios from "axios";

export default {
  name: "Jogo",
  data: function () {
    return {
      categorias: [],
      letras: [],
      alfabeto: [...Array(26)].map((_, y) => String.fromCharCode(y + 65)),
      erros: [],
    };
  },
  methods: {
    loadPalavra() {
      this.letras = new Array(7);
      // const url = `${baseApiUrl}/api/`;
      // axios.get(url).then((res) => {
      //   this.categorias = res.data.data.map((categoria) => {
      //     return { value: categoria.id, text: categoria.name };
      //   });
      // });
    },
    async validar(letra) {
      const url = `${baseApiUrl}/api/game/letter`;
      const { data } = await axios.post(url, { id: 7, letter: letra });
      console.log(data);

      if (data.length > 0) {
        const letras = [...this.letras];
        data.forEach((posicao) => {
          letras[posicao] = letra;
        });
        this.letras = letras;
        console.log(this.letras);
      } else {
        this.erros = [...this.erros, letra];
      }
      const index = this.alfabeto.indexOf(letra);
      const alfabeto = [...this.alfabeto];
      delete alfabeto[index];
      this.alfabeto = alfabeto;
    },
    categoria() {
      this.$router.push({ path: "/Jogo" });
    },
  },
  mounted() {
    this.loadPalavra();
  },
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.back-jogo {
  background-color: white;
  border-radius: 10px;
  width: 180%;
  height: 95%;
}
.palavra div {
  display: inline-block;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 60px;
  border-bottom: 10px solid black;
  margin: 2px;
  padding-bottom: 0px;
  margin-bottom: 20px;
}
.letras {
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: fontDalek;
}
.opcoes {
  display: inline-block;
  margin: 5px;
}
.alfabeto {
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: 20px;
  margin: 5px;
}
.botao {
  background-color: orange;
  margin: 5px;
}
.topo {
  margin-bottom: 150px;
}
.letras-erradas {
  display: inline-block;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: fontDalek;
  margin-right: 19px;
  text-decoration: line-through;
}
.fundo {
  margin-top: 30px;
}
</style>