export default {
    SET_DATA(state, data) {
        state.towns = data
    },

    UPDATE_FORM_CHECK(state, {type, val}) {
        state.formControl[type] = val
    },
}