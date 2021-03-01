<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  color: #444;
  font-size: 15px;
}

#app {
  width: 100%;
}

.container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;

  font-family: sans-serif;

  box-sizing: border-box;
}

.content {
  border: 1px solid #ccc;
  padding: 20px 15px;
}

.title {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 20px;
}
</style>
