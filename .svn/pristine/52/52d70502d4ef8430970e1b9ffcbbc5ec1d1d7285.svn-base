
<style lang="less" scoped>
  @import "../../less/_vars.less";
  @import "../../less/_common_detail.less";

</style>

<template>
  <div>
    <div class="detail-handle common-bg">
          <span class="common-tip" v-text="title"></span><span class="common-tip time">工时 5:00</span>
          <div class="handle-list">
            <ul v-bind:class="{ hideover : more }" >
              <li v-for="v in log">
                <div class="handle-log" v-text="v.text"></div>
                <div class="handle-time" v-text="v.time" ></div>
              </li>
          </ul>
          <div class="handle-more" v-if="more" @click="more =!more">展开详情<span></span></div>
        </div>
      </div>

  </div>

</template>
<script>
export default {
  name: 'DetailRecord',
  data () {
    return {
      more: true
    }
  },
  props: {
    log: {
      type: Array,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    hours: {
      type: String,
      default: ''
    }
  }
  // mounted () {
  //   this.$nextTick(() => {
  //     let moment = require('moment')
  //     console.log(moment('1495816210', 'X').fromNow())
  //     console.log(this.log)
  //     for (var v in this.log) {
  //       console.log(moment(this.log[v].time, 'X').fromNow())
  //     }
  //   })
  // }
}
</script>
