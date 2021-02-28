<template>
  <div class="filial">
    <h3>Ваш филиал</h3>
    <select v-bind:disabled="isOnline" v-model="optionValue">
      <option value="">Выберете город</option>
      <option v-bind:value=town.title v-for="town in TOWNS" :key="town.title">{{ town.title }}</option>
    </select>
    <input type="checkbox" v-model="isOnline" v-bind:required="!optionValue" /><span>Онлайн</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Filial",

  data() {
    return {
      isOnline: false,
      optionValue: ''
    };
  },

  watch: {
    isOnline(val) {
      this.UPDATE_FORM_CHECK({type: 'filial', val: [val, this.optionValue].some(val => val)})
    },
    optionValue(val) {
      this.UPDATE_FORM_CHECK({type: 'filial', val: [val, this.isOnline].some(val => val)})
    }
  },

  methods: {
    formControl() {
      this.UPDATE_FORM_CHECK('filial')
    },
    ...mapActions(["GET_DATA", "UPDATE_FORM_CHECK"]),
  },

  computed: {
      ...mapGetters(['TOWNS'])
  },

  mounted() {
    this.GET_DATA();
  },
};
</script>

<style lang="scss">
  .filial {
    h3 {
      color: red
    }
  }
</style>
