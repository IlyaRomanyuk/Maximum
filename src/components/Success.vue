<template>
  <div class="success">
    <h3>Заявка отправлена</h3>
    <img v-bind:src="require('./../assets/images/success_img.png')" alt="картинка" />
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
  .success {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>