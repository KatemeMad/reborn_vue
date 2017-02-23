<template>
  <div class="form-comment">
    <h2>{{name2}} puedes publicar aqui tus comentarios</h2>
    <form action="/">
      <md-input-container>
        <label>Escribe tu mensaje aquí</label>
        <md-textarea v-bind:value="value"></md-textarea>
      </md-input-container>
      <md-button type="submit" class="md-raised md-accent" v-on:click="updateValue($event.target.value)">Publicar</md-button>
    </form>
  </div>
</template>

<script>
var data = { name2: ' Pepito Grillo ' }
export default {
  name: 'FormComment',
  props: {value: {required: true}},
  data: function () {
    return data
  },
  methods: {
    updateValue: function (value) {
      this.$emit('md-button', value)
    }
  }
}
</script>
<style media="screen">

</style>
