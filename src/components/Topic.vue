<template>
  <section class="section">
    <p class="section__title">
      Тема обращения
      <span class="section__important">*</span>
    </p>
    <ul class="section__list">
      <div class="section__item" v-for="(item, i) in items" :key="item">
        <div class="radio">
          <label class="radio__label">
            <input
              class="radio__input"
              type="checkbox"
              v-bind:checked="checked === i"
              v-on:change="changeCheckbox($event, i)"
            />
            <span class="radio__view"></span>
            <span class="radio__text">{{ item }}</span>
          </label>
        </div>
      </div>
    </ul>
    <input class="input" v-on:input="clearCheck" type="text" placeholder="Другое" v-model="another" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Topic",
  data() {
    return {
      another: "",
      checked: null,
      items: [
        "Недоволен качеством услуг",
        "Расторжение договора",
        "Не приходит письмо активации на почту",
        "Не работает личный кабинет"
      ]
    };
  },

  watch: {
    another(val) {
      if (val) {
        this.UPDATE_FORM_CHECK({ type: "topic", val: true });
      } else {
        this.UPDATE_FORM_CHECK({ type: "topic", val: false });
      }
    },

    checked(val) {
      if (val !== null) {
        this.UPDATE_FORM_CHECK({ type: "topic", val: true });
      } else {
        this.UPDATE_FORM_CHECK({ type: "topic", val: false });
      }
    }
  },

  methods: {
    changeCheckbox(event, i) {
      if (this.checked == i) {
        this.checked = null;
      } else {
        this.checked = event ? i : null;
        this.another = "";
      }
    },

    clearCheck() {
      this.checked = null;
    },
    ...mapActions(["UPDATE_FORM_CHECK"])
  }
};
</script>

<style lang="scss">
.radio {
  &__input {
    display: none;
  }

  &__label {
    display: flex;
    align-items: center;
  }

  &__view {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 7px;

    border: 1px solid #333;
    border-radius: 50%;
    background-color: transparent;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 13px;
      height: 13px;
      background-color: #333;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  &__input:checked + &__view::after {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
}

.input {
  border: 1px solid #333;
  border-radius: 2px;
  outline: none;

  width: 220px;
  padding: 5px 7px;
  box-sizing: border-box;

  font-family: inherit;
  font-size: 1rem;
  color: #444;
}
</style>