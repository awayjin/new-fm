<template>
  <div class="log-wrap" v-if="showTips">
    <div class="log-tip">
      <span class="log-info">{{tipText}}</span>
      <a  href="javascript:;" class="close" v-show="closeShow" @click="closeTips">
        &times;
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showTips: {
        type: Boolean,
        default: false
      },
      // 关闭按钮
      closeShow: {
        type: Boolean,
        default: true
      },
      tipText: {
        type: String,
        default: '请求错误!!!'
      }
    },
    watch: {
      showTips () {
        if (this.showTips) this.cancelTips()
      },
      tipText (val) {
//        if (val) console.log(val)
        this.showTips = true
      }
    },
    methods: {
      cancelTips () {
        // 3秒后自动消失
        let timeId = null
        clearTimeout(timeId)
        timeId = setTimeout(() => {
          this.showTips = false
        }, 3000)
      },
      passText () {
        this.$dispatch('page-tips')
      },
      closeTips () {
        this.showTips = false
      }
    }
  }
</script>

