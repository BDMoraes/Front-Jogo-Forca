import Vue from 'vue';

export const baseApiUrl = 'https://jogo-da-forca.herokuapp.com';

export function showError(e) {
    const data = e?.response?.data;

    if (data?.errors) {
        const errors = data.errors;
        const message = errors[Object.keys(errors).shift()].shift();

        Vue.toasted.show(message);
    } else if (data?.message) {
        Vue.toasted.show(data.message);
    } else if (typeof e === 'string') {
        Vue.toasted.show(e);
    } else {
        Vue.toasted.show('Erro inesperado.');
    }
}

export default {baseApiUrl, showError};
