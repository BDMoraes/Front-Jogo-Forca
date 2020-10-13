<template>
  <b-container class="back-jogo">
    <b-col class="topo">
      <b-row align-h="between">
        <b-col>
          <img
            src="../assets/img/Pitagoras_corda.png"
            width="260"
            height="300"
          />
        </b-col>
        <b-col class="box-timer timer">
          <b-row align-h="center"> 00 : {{ displayTime }} </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row align-h="start">
        <img
          src="../assets/img/en6.png"
          width="200"
          class="corpo"
          v-if="erros.length == 6"
        />
        <img
          src="../assets/img/en5.png"
          width="200"
          class="corpo"
          v-if="erros.length == 5"
        />
        <img
          src="../assets/img/en4.png"
          width="200"
          class="corpo"
          v-if="erros.length == 4"
        />
        <img
          src="../assets/img/en3.png"
          width="200"
          class="corpo"
          v-if="erros.length == 3"
        />
        <img
          src="../assets/img/en2.png"
          width="200"
          class="corpo"
          v-if="erros.length == 2"
        />
        <img
          src="../assets/img/en1.png"
          width="200"
          class="corpo"
          v-if="erros.length == 1"
        />
      </b-row>
    </b-col>
    <b-col>
      <b-row class="palavra" align-h="center">
        <div v-for="letra in letras" :key="letra" class="letras">
          <span v-if="letra">{{ letra }}</span>
          <span v-if="!letra"> </span>
        </div>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="opcoes">
        <div class="alfabeto">
          <span v-for="letra in alfabeto" :key="letra">
            <b-button
              v-if="letra"
              class="btn-lg botao"
              @click="validar(letra)"
              :disabled="carregando"
            >
              {{ letra }}
            </b-button>
          </span>
        </div>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="fundo" align-h="center">
        <div v-for="letra in erros" :key="letra" class="letras-erradas">
          {{ letra }}
        </div>
      </b-row>
    </b-col>
    <b-modal
      class="desafio-modal"
      ref="desafio-modal"
      hide-footer
      title="Qual a alternativa correta?"
    >
      <b-row align-h="center" class="linha-modal">
        <div class="d-block text-center">
          <h2>{{ this.desafio.description }} =</h2>
        </div>
      </b-row>
      <b-row align-h="center" class="linha-modal">
        <div class="text-center">
          <b-form-group class="form">
            <b-form-radio
              class="radios"
              v-model="selected"
              name="some-radios"
              value="A"
              >A) {{ this.desafio.optionA }}</b-form-radio
            >
            <b-form-radio
              class="radios"
              v-model="selected"
              name="some-radios"
              value="B"
              >B) {{ this.desafio.optionB }}</b-form-radio
            >
            <b-form-radio
              class="radios"
              v-model="selected"
              name="some-radios"
              value="C"
              >C) {{ this.desafio.optionC }}</b-form-radio
            >
          </b-form-group>
          <div class="d-block mt-3">
            Opção: <strong>{{ selected }}</strong>
          </div>
        </div>
      </b-row>
      <b-row align-h="center" class="bt-modal linha-modal">
        <b-button
          pill
          class="d-block text-center botao"
          variant="success"
          @click="hideModal"
          >Responder</b-button
        >
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
import { baseApiUrl /*showError*/ } from "@/global";

import axios from "axios";

export default {
  name: "Jogo",
  data: function () {
    return {
      carregando: false,
      categorias: [],
      letras: [],
      alfabeto: [...Array(26)].map((_, y) => String.fromCharCode(y + 65)),
      erros: [],
      selected: "",
      desafio: {
        description: "2² + 3³ - 1",
        optionA: 3,
        optionB: 5,
        optionC: 0,
      },
      displayTime: 60,
    };
  },
  methods: {
    contadorTempo() {
      if (this.displayTime > 0) {
        setTimeout(() => {
          this.displayTime -= 1;
          this.contadorTempo();
        }, 1000);
      } else {
        console.log("acabou");
      }
    },
    loadPalavra() {
      this.carregando = true;
      this.letras = new Array(7);
      // const url = `${baseApiUrl}/api/`;
      // axios.get(url).then((res) => {
      //   this.categorias = res.data.data.map((categoria) => {
      //     return { value: categoria.id, text: categoria.name };
      //   });
      // });

      this.carregando = false;
    },
    async validar(letra) {
      this.carregando = true;

      const url = `${baseApiUrl}/api/game/letter`;
      const { data } = await axios.post(url, { id: 7, letter: letra });

      if (data.length > 0) {
        const letras = [...this.letras];
        data.forEach((posicao) => {
          letras[posicao] = letra;
        });
        this.letras = letras;
      } else {
        this.erros = [...this.erros, letra];
        if (this.erros.length == 6) {
          this.showModal();
          // const url = `${baseApiUrl}/api/`;
          // axios.get(url).then((res) => {
          //   this.categorias = res.data.data.map((categoria) => {
          //     return { value: categoria.id, text: categoria.name };
          //   });
          // });
        }
      }

      const index = this.alfabeto.indexOf(letra);
      const alfabeto = [...this.alfabeto];

      delete alfabeto[index];

      this.alfabeto = alfabeto;
      this.carregando = false;
    },
    showModal() {
      this.$refs["desafio-modal"].show();
    },
    hideModal() {
      this.$refs["desafio-modal"].hide();
    },
  },
  mounted() {
    this.loadPalavra();
    this.contadorTempo();
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
  height: 100%;
  display: grid;
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
  margin-bottom: 50px;
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
  margin-bottom: 0px;
}
.letras-erradas {
  display: inline-block;
  font-size: 20px;
  font-family: fontDalek;
  margin-right: 19px;
  text-decoration: line-through;
  color: red;
}
.fundo {
  margin-top: 30px;
}
.corpo {
  position: relative;
  left: 145px;
  margin-top: -50px;
}
.box-timer {
  display: grid;
  align-items: center;
  text-align: center;
}
.timer {
  font-family: fontDalek;
  padding: 5px;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 55px;
  color: orangered;
}

.desafio-modal {
  display: grid;
  align-items: center;
  text-align: center;
}
.bt-modal {
  margin: 20px;
}
.radios {
  display: inline;
  align-items: center;
  text-align: center;
  margin-right: 30px;
}

.linha-modal {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
