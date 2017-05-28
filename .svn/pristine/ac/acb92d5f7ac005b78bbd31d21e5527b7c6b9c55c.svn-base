<style lang="less" scoped>
  @import "../less/_vars";
  .maintain-header {
    .css3-flex();  border-bottom: 1px solid @gray-light; padding: 0 .5rem; background-color: @white;
    li {
      .css3-flex-1(); height: 3.5rem; line-height: 3.5rem; text-align: center;
      a { display: block;  }
    }
    .current {
      font-weight: bold;
      a {
        color: @green-emerald;
      }
      span {
        border-bottom: 2px solid @green-emerald;  padding: 0 0.6rem;
      }
    }
  }
</style>

<template>
  <ul class="maintain-header">
    <li :class="{'current': activePath === 'waiting' }"><router-link to="order-maintain"><span>待接单</span></router-link></li>
    <li :class="{'current': activePath === 'pending' }"><router-link to="order-maintain-pending"><span>待处理</span></router-link></li>
    <li :class="{'current': activePath === 'checking' }"><router-link to="order-maintain-checking"><span>待验收</span></router-link></li>
    <li :class="{'current': activePath === 'done' }"><router-link to="order-maintain-done"><span>已完成</span></router-link></li>
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
