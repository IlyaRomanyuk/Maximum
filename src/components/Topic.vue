<template>
  <div>
    <h3>Тема обращения</h3>
    <ul class="list">
        <label v-for="(item, i) in items" :key="item">
            <input
                type="checkbox"
                v-bind:checked = "checked === i"
                v-on:change="changeCheckbox($event, i)"
            >
            {{ item }}
        </label>
    </ul>
    <input v-on:input="clearCheck" type="text" placeholder="Другое" v-model="another">
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'Topic',
  data() {
      return {
          another: '',
          checked: null,
          items: ['Недоволен качеством услуг', 'Расторжение договора', 'Не приходит письмо активации на почту', 'Не работает личный кабинет']
      }
  },

  watch: {
      another(val) {
          if(val) {
              this.UPDATE_FORM_CHECK({type: 'topic', val: true})
          } else {  
              this.UPDATE_FORM_CHECK({type: 'topic', val: false})
          }
      },

      checked(val) {
          if(val) {
              this.UPDATE_FORM_CHECK({type: 'topic', val: true})
          } else {  
              this.UPDATE_FORM_CHECK({type: 'topic', val: false})
          }
      }
  },
  
  methods: {
      changeCheckbox(event, i) {
        if(this.checked == i) {
            this.checked = null;
        } else {
            this.checked = event ? i : null;
            this.another = '';
        }
      },

      clearCheck() {
          this.checked = null
      },
      ...mapActions(["UPDATE_FORM_CHECK"])
  }
}
</script>

<style lang="scss">

</style>