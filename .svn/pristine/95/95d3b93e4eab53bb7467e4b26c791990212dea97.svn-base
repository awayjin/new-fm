
<style lang="less" scoped>
  @import "../../less/_vars";
  .detail-cause {
    width: 100%;
    position: relative; 
    border-bottom: 1px solid  @gray-bg;
    .txt {
        color:@gray-brownish;
        line-height: 1.8rem;
        padding: 0.83rem 0.42rem 0.83rem 1.25rem;
        border-top: 1px solid  @gray-bg;
        .two-line();
    }
    .detail-title{ 
        color:@gray-cool;
        padding: 1.17rem 1.16rem 1.25rem 0.42rem;  
        width:5.33rem;
        top: 0;
        left: 0;
        position: absolute;
    }
    .detail-describe {
        margin: 1.17rem 0.67rem 1.25rem 7.24rem;
    }
}
</style>
<template>
  <div>
    <div class="detail-cause" v-bind:class="{ detailCause : isCause }">
      <span class="detail-title" v-text="title" v-if="!isCause"></span>
      <span class="detail-describe" v-text="context" v-if="!isCause"></span>
      <span class="common-tip" v-text="title" v-if="isCause"></span>
      <div class="txt" v-text="context" v-if="isCause"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailBase',
  props: {
    title: {
      type: String,
      default: ''
    },
    context: {
      type: String,
      default: ''
    },
    isCause: {
      type: Boolean,
      default: true
    }
  }
}
</script>
