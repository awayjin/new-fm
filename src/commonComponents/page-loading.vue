<template>
  <div class="loading-fm" v-show="showLoading">
    <p>&nbsp;</p>
    正在加载...
  </div>
</template>

<script>
  export default {
    props: {
      showLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
