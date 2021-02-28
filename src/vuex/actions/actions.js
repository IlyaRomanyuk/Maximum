import axios from "axios"

export default {
    GET_DATA({commit}) {
        axios.get('https://60254fac36244d001797bfe8.mockapi.io/api/v1/city').
        then(result => commit('SET_DATA', result.data))
    },

    UPDATE_FORM_CHECK({commit}, data) {
        commit('UPDATE_FORM_CHECK', data)
    }
}