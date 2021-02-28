<template>
  <div>
    <h3>Описание проблемы</h3>
    <textarea v-model="textareaChange" />
  </div>
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
</style>