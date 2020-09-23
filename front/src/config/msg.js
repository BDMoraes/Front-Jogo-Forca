import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    'Operação realidada com sucesso!',
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    'Erro na operação!',
    { type: 'error', icon: 'times' }
)