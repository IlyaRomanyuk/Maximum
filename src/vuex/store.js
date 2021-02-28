import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        towns: [],
        formControl: {
            filial: false,
            topic: false,
            textarea: false
        }
    },
    mutations,
    actions,
    getters
})

export default store;