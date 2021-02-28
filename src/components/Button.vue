<template>
  <button
    class="button"
    v-bind:disabled="!isActive"
    v-bind:class="!isActive && 'button_disabled'"
  >Отправить</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Button",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["FORM_CONTROL"]),
    isActive() {
      if (Object.values(this.FORM_CONTROL).filter(item => item).length == 3) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
.button {
  padding: 8px 14px;
  background-color: rgb(255, 167, 67);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  outline: none;

  &_disabled {
    background-color: lightgray;
  }
}
</style>