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
          <span class="common-tip" v-text="causetip">验收意见</span>
          <div class="fill-reason">
             <textarea placeholder="请输入验收意见,不通过时必填" ></textarea>
           </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import CommitHeader from '../components/global/commit-header.vue'
  export default {
    name: 'maintainAccept',
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
          title: '验收意见',
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

