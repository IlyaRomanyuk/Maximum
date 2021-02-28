<template>
  <section class="section">
    <p class="section__title">
      Описание проблемы<span class="section__important">*</span>
    </p>
    <textarea class="textarea" v-model="textareaChange" placeholder="Введите текст"/>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'Textarea',
  data() {
    return {
      textareaChange: ''
    }
  },
  watch: {
    textareaChange(val) {
      if(val) {
        this.UPDATE_FORM_CHECK({type: 'textarea', val: true})
      } else {
        this.UPDATE_FORM_CHECK({type: 'textarea', val: false})
      }
    }
  },
  methods: {
      ...mapActions(["UPDATE_FORM_CHECK"]),
  }
}
</script>

<style>
  .textarea {
    resize: none;
    width: 100%;
    height: 100px;
    padding: 5px;
    box-sizing: border-box;

    font-size: 1rem;
    font-family: inherit;
    outline: none;
    border-radius: 2px;
  }
</style>