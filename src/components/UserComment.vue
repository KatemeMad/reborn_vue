<template>
  <li class="user-comment__item media-object">
    <div class="media-object-section">
      <div class="user-comment__avatar thumbnail">
        <img src="https://randomuser.me/api/portraits/women/68.jpg"/>
      </div>
    </div>
    <div class="media-object-section">
      <div class="user-comment__title">
        <h3 class="user-comment__name">Pepito Grillo</h3>
        <span class="user-comment__date">hace 3 horas</span>
      </div>
      <div class="user-comment__message">
        <user-message v-bind:my-message="myMessage"> </user-message>
      </div>
    </div>
    <valuation-comment></valuation-comment>
  </li>
</template>

<script>
  import UserMessage from 'components/UserMessage'
  import ValuationComment from 'components/ValuationComment'
  export default{
    name: 'UserComment',
    components: {
      UserMessage,
      ValuationComment
    },
    props: ['myMessage']
  }
</script>
