<template>
  <form name="myForm" novalidate v-on:submit.prevent="funcSubmit">
    <Filial />
    <Topic />
    <Textarea />
    <File />
    <Button />
  </form>
</template>

<script>
import Filial from "./Filial";
import Topic from "./Topic";
import Textarea from "./Textarea";
import File from "./File";
import Button from "./Button";
import axios from "axios";
import Swal from "sweetalert2";
import router from "./../router/router";

export default {
  name: "Form",
  components: {
    Filial,
    Topic,
    Textarea,
    File,
    Button
  },

  methods: {
    funcSubmit() {
      axios
        .post(
          "https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form",
          {}
        )
        .then(response => response.data)
        .then(data => {
          if (!data.success) {
            Swal.fire("Ошибка отправки заявки");
            return;
          }
          router.push({ path: "/success" });
        });
    }
  }
};
</script>

<style>
</style>