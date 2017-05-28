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
          <span class="common-tip">挂起原因</span>
          <div class="fill-reason">
             <textarea placeholder="简要描述挂起原因" ></textarea>
           </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import CommitHeader from '../components/global/commit-header.vue'
  export default {
    name: 'maintainHang',
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
          title: '挂起',
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

