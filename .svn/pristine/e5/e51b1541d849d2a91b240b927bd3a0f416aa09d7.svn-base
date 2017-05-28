<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_detail";
</style>

<template>
  <div class="page" >
    <section class="content clearfix">
      <div class="common-bg">
        <div class="flow-reason">
          <span class="common-tip">故障原因</span>
          <div class="fill-reason">
             <textarea placeholder="简要描述设备故障原因" ></textarea>
           </div>
        </div>
      </div>
      <div class="common-bg">
        <div class="flow-reason">
          <span class="common-tip">维修方法</span>
          <div class="fill-reason">
             <textarea placeholder="简要描述维修方法" ></textarea>
           </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import CommitHeader from '../components/global/commit-header.vue'
  export default {
    name: 'maintainTransfer',
    components: {
      CommitHeader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {
      CommitHeader.methods.submit = this.submit
      this.$nextTick(() => {
        window.mainBus.$emit('setHeader', {
          title: '完成工单',
          leftText: '返回',
          currentView: CommitHeader
        })
      })
    },
    methods: {
      submit () {
        console.log(this.msg)
      }
    }
  }
</script>

