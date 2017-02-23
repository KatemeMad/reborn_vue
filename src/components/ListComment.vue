<template>
  <ul>
    <user-comment v-bind:my-message="myMessage"></user-comment>
  </ul>
</template>

<script>
import UserComment from 'components/UserComment'
  export default{
    name: 'ListComment',
    components: {
      UserComment
    },
    props: ['myMessage']
  }
</script>
