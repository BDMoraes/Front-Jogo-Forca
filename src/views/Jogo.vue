<template>
  <b-container>
    <b-col class="topo">
      <b-row>
        <b-col cols="4">
          <img
              height="300"
              src="../assets/img/Pitagoras_corda.png"
              width="260"
          />
        </b-col>
        <b-col align-self="center" cols="8">
          <b-row align-v="center">
            <b-col class="timer">
              <b-row align-h="center"> 00 : {{ displayTime }}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row align-h="center" class="fundo">
                <div class="timer">Pontos = {{ this.pontuacaoLetras + this.pontuacaoPalavras }}</div>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row align-h="center" class="fundo">
                <div v-for="letra in erros" :key="letra" class="letras-erradas">
                  {{ letra }}
                </div>
              </b-row>
            </b-col>
          </b-row>
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
                :disabled="carregando"
                class="btn-lg botao"
                @click="validar(letra)"
            >
              {{ letra }}
            </b-button>
          </span>
        </div>
      </b-row>
    </b-col>
    <b-modal
        ref="desafio-modal"
        class="desafio-modal"
        hide-footer
        hide-header-close="true"
        no-close-on-backdrop="true"
        no-close-on-esc="true"
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
                v-model="selected"
                :value="resposta.id"
                class="radios"
            >{{ indice + 1 }}) {{ resposta.answer }}
            </b-form-radio
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
        >Responder
        </b-button
        >
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: 'Jogo',
  data: function() {
    return {
      carregando: false,
      desafiou: false,
      categorias: [],
      letras: [],
      alfabeto: [...Array(26)].map((_, y) => String.fromCharCode(y + 65)),
      erros: [],
      numErros: 0,
      palavra: null,
      selected: '',
      desafio: '',
      respostas: [],
      displayTime: 60,
      pontuacao: 0,
      pontuacaoLetras: 0,
      pontuacaoPalavras: 0,
      contador: null,
      jogadas: 0,
    };
  },
  methods: {
    final() {
      this.$store.commit('setPontuacao', this.pontuacao);
      this.$router.push({path: '/final'});
    },
    contadorTempo() {
      if (this.displayTime > 0) {
        this.contador = setTimeout(() => {
          this.displayTime -= 1;
          this.contadorTempo();
        }, 1000);
      } else {
        this.pontuacao = this.pontuacaoPalavras + this.pontuacaoLetras;
        this.final();
      }
    },
    loadPalavra() {
      if (this.jogadas <= 15) {
        this.jogadas += 1;
        this.carregando = true;
        this.pontuacaoLetras = 0;

        const categoria = this.$route.params.categoria;
        const url = `${baseApiUrl}/api/game/word/` + categoria;
        axios.get(url).then((res) => {
          this.alfabeto = [...Array(26)].map((_, y) =>
              String.fromCharCode(y + 65),
          );
          this.numErros = 0;
          this.erros = [];
          this.displayTime = 60;
          this.letras = new Array(res.data.data.size);
          this.palavra = res.data.data.id;
        });
        this.carregando = false;
      } else {
        this.pontuacao = this.pontuacaoPalavras;
        this.final();
      }
    },
    async validar(letra) {
      this.carregando = true;

      const url = `${baseApiUrl}/api/game/letter`;

      const {data} = await axios.post(url, {
        id: this.palavra,
        letter: letra,
      });

      if (data.length > 0) {
        this.pontuacaoLetras += 10;

        const letras = [...this.letras];

        data.forEach((posicao) => {
          letras[posicao] = letra;
        });

        this.letras = letras;

        if (this.letras.filter(Boolean).length === this.letras.length) {
          this.pontuacaoPalavras += 100;
          this.loadPalavra();
        }
      } else {
        this.erros = [...this.erros, letra];
        this.numErros = this.numErros + 1;

        if (this.numErros === 6) {
          if (!this.desafiou) {
            this.showModal();
            this.desafiou = true;
          } else {
            this.pontuacao = this.pontuacaoPalavras + this.pontuacaoLetras;
            this.final();
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

      this.$refs['desafio-modal'].show();
    },
    hideModal() {
      const url = `${baseApiUrl}/api/game/question/answer`;

      axios.post(url, {id: this.selected}).then((res) => {
        if (res.data) {
          clearTimeout(this.contador);

          this.numErros = this.numErros - 1;
          this.displayTime = 60;
          this.contadorTempo();
        } else {
          this.pontuacao = this.pontuacaoPalavras + this.pontuacaoLetras;
          this.final();
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

.timer {
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
