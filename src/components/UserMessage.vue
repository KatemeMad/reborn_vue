<template>
  <p class="user-message">{{ myMessage }}</p>
</template>

<script>
  export default{
    name: 'UserMessage',
    props: ['myMessage']
  }
</script>
