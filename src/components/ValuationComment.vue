<template>
  <div class="valuation-comment">
    <span class="valuation-comment__like"> {{ counterup }} <i class="fa fa-thumbs-o-up" aria-hidden="true" v-on:click="counterup += 1"></i></span>
    <span class="valuation-comment__dislike"> <i class="fa fa-thumbs-o-down" aria-hidden="true" v-on:click="counterdown -= 1"></i> {{ counterdown }} </span>
  </div>
</template>
<script>
export default{
  name: 'ValuationComment',
  data: function () {
    return {
      counterup: 0,
      counterdown: 0
    }
  }
}
</script>
<style media="screen">

</style>
