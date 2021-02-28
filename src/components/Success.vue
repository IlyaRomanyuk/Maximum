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
</style>