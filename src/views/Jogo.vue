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
            v-if="numErros === 6"
        />
        <img
            src="../assets/img/en5.png"
            width="200"
            class="corpo"
            v-if="numErros === 5"
        />
        <img
            src="../assets/img/en4.png"
            width="200"
            class="corpo"
            v-if="numErros === 4"
        />
        <img
            src="../assets/img/en3.png"
            width="200"
            class="corpo"
            v-if="numErros === 3"
        />
        <img
            src="../assets/img/en2.png"
            width="200"
            class="corpo"
            v-if="numErros === 2"
        />
        <img
            src="../assets/img/en1.png"
            width="200"
            class="corpo"
            v-if="numErros === 1"
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
    <b-col>
      <b-row class="fundo" align-h="center">
        <div class="timer">Pontos = {{ this.pontuacao }}</div>
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
          <h2>{{ this.desafio }} =</h2>
        </div>
      </b-row>
      <b-row align-h="center" class="linha-modal">
        <div class="text-center">
          <b-form-group class="form">
            <b-form-radio
              v-for="(resposta, indice) in respostas"
              :key="resposta.id"
              class="radios"
              v-model="selected"
              :value="resposta.id"
              >{{ indice + 1 }}) {{ resposta.answer }}</b-form-radio
            >
          </b-form-group>
        </div>
      </b-row>
      <b-row align-h="center" class="bt-modal linha-modal">
        <b-button
            pill
            class="d-block text-center"
            variant="success"
            @click="hideModal"
          >Responder</b-button
        >
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: "Jogo",
  data: function () {
    return {
      carregando: false,
      desafiou: false,
      categorias: [],
      letras: [],
      alfabeto: [...Array(26)].map((_, y) => String.fromCharCode(y + 65)),
      erros: [],
      numErros: 0,
      palavra: null,
      selected: "",
      desafio: "",
      respostas: [],
      displayTime: 60,
      pontuacao: 0,
      contador: null,
      jogadas: 0,
    };
  },
  methods: {
    contadorTempo() {
      if (this.displayTime > 0) {
        this.contador = setTimeout(() => {
          this.displayTime -= 1;
          this.contadorTempo();
        }, 1000);
      } else {
        this.$router.push({path: '/final/' + this.pontuacao});
      }
    },
    loadPalavra() {
      if (this.jogadas <= 15) {
        this.jogadas += 1;
        this.carregando = true;
        const categoria = this.$route.params.categoria;
        const url = `${baseApiUrl}/api/game/word/` + categoria;
        axios.get(url).then((res) => {
          this.alfabeto = [...Array(26)].map((_, y) =>
            String.fromCharCode(y + 65)
          );
          this.numErros = 0;
          this.erros = [];
          this.displayTime = 60;
          this.letras = new Array(res.data.data.size);
          this.palavra = res.data.data.id;
        });
        this.carregando = false;
      } else {
        this.$router.push({path: '/final/' + this.pontuacao});
      }
    },
    async validar(letra) {
      this.carregando = true;

      const url = `${baseApiUrl}/api/game/letter`;
      const { data } = await axios.post(url, {
        id: this.palavra,
        letter: letra,
      });
      if (data.length > 0) {
        this.pontuacao += 10;
        const letras = [...this.letras];
        data.forEach((posicao) => {
          letras[posicao] = letra;
        });
        this.letras = letras;
        if (this.letras.filter(Boolean).length === this.letras.length) {
          this.pontuacao += 100;
          this.loadPalavra();
        }
      } else {
        this.erros = [...this.erros, letra];
        this.numErros = this.numErros + 1;
        if (this.numErros == 6) {
          if (!this.desafiou) {
            this.showModal();
            this.desafiou = true;
          } else {
            this.$router.push({path: '/final/' + this.pontuacao});
          }
        }
      }

      const index = this.alfabeto.indexOf(letra);
      const alfabeto = [...this.alfabeto];

      delete alfabeto[index];

      this.alfabeto = alfabeto;
      this.carregando = false;
    },
    showModal() {
      clearTimeout(this.contador);
      const url = `${baseApiUrl}/api/game/question`;
      axios.get(url).then((res) => {
        this.desafio = res.data.question.question;
        this.respostas = res.data.answers;
      });
      this.$refs["desafio-modal"].show();
    },
    hideModal() {
      const url = `${baseApiUrl}/api/game/question/answer`;
      axios.post(url, { id: this.selected }).then((res) => {
        if (res.data) {
          this.numErros = this.numErros - 1;
          this.displayTime = 60;
          clearTimeout(this.contador);
          this.contadorTempo();
        } else {
          this.$router.push({path: '/final/' + this.pontuacao});
        }
        this.$refs['desafio-modal'].hide();
      });
    },
  },
  mounted() {
    this.loadPalavra();
    this.contadorTempo();
  },
  beforeDestroy() {
    clearTimeout(this.contador);
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
