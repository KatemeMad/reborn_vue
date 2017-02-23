<template>
  <div>
    <div>
        <md-toolbar >
          <h2 class="md-logo"><img src="../assets/logo.png" alt=""></h2>
        </md-toolbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-logo {
    margin: 0 auto;
    padding-right: 28px;
    padding-left: 28px;
    width: 180px;
  }
 </style>
