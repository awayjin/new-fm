<style lang="less" scoped>
  @import "../less/_vars.less";
  @import "../less/_common_header.less";

  .detail-header {
    position: fixed; left: 0; right: 0; z-index: 2;
  }
</style>

<template>
  <ul class="maintain-header detail-header">
    <li :class="{'current': activePath === 'base' }"><router-link to="per-detail-base"><span>工单信息</span></router-link></li>
    <li :class="{'current': activePath === 'dispose' }"><router-link to="per-detail-dispose"><span>处理记录</span></router-link></li>
    <li :class="{'current': activePath === 'assist' }"><router-link to="per-detail-assist"><span>协助记录</span></router-link></li>
  </ul>
</template>

<script>
  export default {
    props: {
      activePath: {
        type: String,
        defalut: ''
      }
    }
  }
</script>
