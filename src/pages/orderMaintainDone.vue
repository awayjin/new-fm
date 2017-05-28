<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars";

  .content {

  }

</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-main="true" :title="'临时工单'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content clearfix">
      <maintain-header :active-path="'done'"></maintain-header>
      done
    </section>

  </div>
</template>

<script>
  import PageHeader from '../commonComponents/page-header'
  import MaintainHeader from '../components/maintain-header.vue'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      MaintainHeader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      orderMaintain () {
        this.$route.router.go('/order-maintain')
      },
      orderPeriodicity () {
        this.$route.router.go('/exception/403')
      },
      scanCode () {
        console.log('index header right-click')
      },
      demo () {
        console.log(this)
        console.log(this.$appConfig)
        let url = this.$appConfig.api.demo(233)
        this.$http.get(url).then((res) => {
          console.log(res)
        }, (res) => {
          console.log('error')
        })
      }
    }
  }
</script>

