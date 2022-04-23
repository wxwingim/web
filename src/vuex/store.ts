import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: [],
        user: null
    },
    actions: {
        GET_ALL_USERS({commit}){
            return axios.get('https://87b78a4a-1a8a-4d31-9bd5-5fd179e2eedf.mock.pstmn.io/users')
            .then((res) => {
                commit('SET_USERS_TO_VUEX', res.data)
            })
        },

        GET_ONE_USER({commit}, id){
            return axios.get('https://87b78a4a-1a8a-4d31-9bd5-5fd179e2eedf.mock.pstmn.io/users/' + id)
            .then((res) => {
                commit('SET_USER_BY_ID', res.data)
            })
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        },
        SET_USER_BY_ID: (state, user) => {
            state.user = user
        }
    },
    getters: {
        USERS(state){
            return state.users
        },
        USER(state){
            return state.user
        }
    }
})

export default store;