import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { userKey } from '../global'

Vue.use(Vuex)

const setUser = (state, user) => {
    state.user = user
    if (user) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
        state.isMenuVisible = true
    } else {
        delete axios.defaults.headers.common['Authorization']
        state.isMenuVisible = false
    }
}

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (!state.user) {
                state.isMenuVisible = false
                return
            }

            if (isVisible == undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user) {
            state.user = user
            setUser(state, user)
        },
        init(){
            const user = JSON.parse(localStorage.getItem(userKey));
            setUser(this.state, user);
            console.log(user.access_token);
        }
    }
})