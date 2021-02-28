<template>
  <div id="app">
    <div class="container">
      <h2 class="title">Форма подачи заявки в отдел сервиса и качества</h2>
      <div class="content">
        <Form />
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Form from "./components/Form";

export default {
  name: "App",
  components: {
    Form
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
