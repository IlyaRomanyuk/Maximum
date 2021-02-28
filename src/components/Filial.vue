<template>
  <section class="section">
    <p class="section__title">
      Ваш филиал<span class="section__important">*</span>
    </p>
    <div class="section__select">
      <div class="select">
        <select v-bind:disabled="isOnline" v-model="optionValue">
          <option value="">Выберете город</option>
          <option v-bind:value=town.title v-for="town in TOWNS" :key="town.title">{{ town.title }}</option>
        </select>
    </div>
    </div>
    <div class="section__checkbox">
      <div class="checkbox">
        <label class="checkbox__label">
          <input class="checkbox__input" type="checkbox" v-model="isOnline" v-bind:required="!optionValue" />
          <span class="checkbox__view"></span>
          <span class="checkbox__text">Онлайн</span>
        </label>
    </div>
    </div>
  </section>
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
  .section {
    margin-bottom: 20px;

    &__title {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 5px;
    }

    &__important {
      color: red
    }

    &__select {
      margin-bottom: 10px;
    }

    &__list {
      list-style: none;
    }

    &__item {
      margin-bottom: 7px;
    }

    &__text {
      margin-bottom: 10px;
    }
  }

  .select {
    position: relative;
    width: 220px;

    &::after {
        content: '';
        display: block;

        position: absolute;
        top: 50%;
        right: 10px;

        margin-top: -2px;
        width: 7px;
        height: 7px;

        background-color: transparent;
        border: 1px solid #333;
        border-top: none;
        border-right: none;
        transform: translateY(-50%) rotate(-45deg);
      }

    select {
      display: block;
      width: 100%;
      appearance: none;
      outline: none;
      padding: 5px 24px 5px 7px;

      background: none;
      border: 0;
      border: 1px solid #444;
      border-radius: 2px;

      color: #444;
      font-size: 1rem;
      font-family: inherit;
    }
  }

  .checkbox {
    &__input {
      display: none;
    }

    &__label {
      display: flex;
      align-items: center;
    }

    &__text {
      font-size: 1rem;
      color: #444;
    }

    &__view {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #333;
      border-radius: 2px;
      margin-right: 7px;

      position: relative;

      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 6px;

        background-color: transparent;
        border: 1px solid #333;
        border-top: none;
        border-right: none;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%) rotate(-45deg);

        opacity: 0;
        transition: opacity .2s ease-in-out;
      }
    }

    &__input:checked + &__view::after {
      opacity: 1;
      transition: opacity .2s ease-in-out;
    }
  }
</style>
