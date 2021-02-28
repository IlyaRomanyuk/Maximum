<template>
  <form action="POST">
      <Filial />
      <Topic />
      <Textarea />
      <File />
      <Button />
  </form>
</template>

<script>
import Filial from './Filial'
import Topic from './Topic'
import Textarea from './Textarea'
import File from './File'
import Button from './Button'

export default {
  name: 'Form',
   components: {
       Filial, Topic, Textarea, File, Button
   }
}
</script>

<style>
</style>