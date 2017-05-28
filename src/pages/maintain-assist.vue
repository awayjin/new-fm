<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_detail";
</style>

<template>
  <div class="page" >
    <section class="content clearfix">
      <div class="common-bg">
        <router-link to="/main/maintainAssistChoice">
        <div class="flow-assigner">
          <span class="name" >协助人</span>
          <div class="cause" >请选择协助人</div>
          <span class="icons">></span>
        </div>
        </router-link>
      </div>
      
      <div class="common-bg">
        <div class="flow-reason">
          <span class="common-tip">请求协助原因</span>
          <div class="fill-reason">
             <textarea placeholder="请填写协助原因" ></textarea>
           </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import CommitHeader from '../components/global/commit-header.vue'
  export default {
    name: 'maintainAssist',
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
          title: '协助',
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

