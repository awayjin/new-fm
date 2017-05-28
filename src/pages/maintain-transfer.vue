<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_detail.less";
</style>

<template>
  <div class="page" >

    <section class="content clearfix">
      <div class="common-bg">
        <router-link to="/main/maintainTransferChoice">
        <div class="flow-assigner">
          <span class="name" >转单给</span>
          <div class="cause" >请选择转单对象</div>
          <span class="icons">></span>
        </div>
        </router-link>
      </div>
      
      <div class="common-bg">
        <div class="flow-reason">
          <span class="common-tip">转单原因</span>
          <div class="fill-reason">
             <textarea placeholder="请填写转单原因" ></textarea>
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
          title: '转单',
          currentView: CommitHeader
        })
      })
    },
    methods: {
      submit () {
        let moment = require('moment')
        console.log(moment('1495816210', 'X').fromNow())
        console.log(moment().subtract(1, 'day').calendar())
        console.log(moment().format('X'))
        console.log(this.msg)
      },
      demo () {
        let url = this.$appConfig.api.demo(233)
        this.$http.get(url).then(res => {
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
      }
    }
  }
</script>

