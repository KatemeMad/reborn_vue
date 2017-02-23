<template>
  <div class="form-comment">
    <h2>{{name2}} puedes publicar aqui tus comentarios</h2>
    <textarea class="form-comment__textarea" v-bind:value="value"></textarea>
    <input type="submit" value="Publicar" class="form-comment__input" v-on:click="updateValue($event.target.value)"/>
  </div>
</template>

<script>
  var data= {name2:'Pepito Grillo'}
  export default{
    name: 'FormComment',
    props: {value: {required: true}},
    data: function () {
      return data
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value);
      }
    }
  }
</script>
