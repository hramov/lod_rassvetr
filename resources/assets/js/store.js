import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        leadersTable: []
    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
        },
        SET_LEADERS_TO_TABLE: (state, leadersTable) => {
            state.leadersTable = leadersTable;
        }
    },
    actions: {
        GET_LEADERS_FROM_TABLE({
            commit
        }) {
            return axios.get('/show_leaders',{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then((leadersTable) => {
                        commit('SET_LEADERS_TO_TABLE', leadersTable.data);
                        console.log(leadersTable.data)
                        return leadersTable;
                    })
                    .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        GETLEADERS(state) {
            return state.leadersTable;
        }
    }
})