<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
</style>

<template>
  <div class="page" >
    <section class="content clearfix">
      <div class="trans-accept common-bg">
        <person-list :userList="userList"></person-list>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'maintainTransferChoice',
    data () {
      return {
        userList: [
          {userName: '王小军', role: '技术员', skillNames: '供配电、给排水、给排水、给排水供配电、给排水、给排水、给排水', city: '天津东丽万科城', isCheck: false},
          {userName: '李浩', role: '主管', skillNames: '供配电、给排水', city: '天津东丽万科城', isCheck: false},
          {userName: '张慧小号', role: '城市经理', skillNames: '供配电、给排水', city: '天津东丽万科城', isCheck: true},
          {userName: '王小军', role: '服务中心', skillNames: '供配电、给排水', city: '天津东丽万科城', isCheck: false}
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.mainBus.$emit('setHeader', {
          title: '选择转单对象',
          leftText: '返回'
        })
      })
    },
    methods: {
    }
  }
</script>

