<template>
  <div class="">
    <div class="">
      <form-comment v-model="message"></form-comment>
      <list-comment v-bind:my-message="message"></list-comment>
    </div>
  </div>
</template>

<script>
import FormComment from 'components/FormComment'
import ListComment from 'components/ListComment'
import UserComment from 'components/UserComment'
import UserMessage from 'components/UserMessage'
import ValuationComment from 'components/ValuationComment'
</script>
