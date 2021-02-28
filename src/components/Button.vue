<template>
    <button class="button">Отправить</button>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Button',
  data() {
      return {
          
      }
  },
  computed: {
    ...mapGetters("FORM_CONTROL")
  }
}
</script>

<style>
  .button {
    padding: 8px 14px;
    background-color: rgb(255, 167, 67);
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    outline: none;
  }

  .button-close {
    padding: 8px 14px;
    background-color: lightgray;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    outline: none;
  }
</style>