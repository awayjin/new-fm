<template>
  <div class="page-header">
    <div class="wrap">
      <a v-if="leftText || leftIcon" class="ph-btn abs-left" href="javascript:;" @click="leftClick">
        <i v-if="leftIcon" class="icon" :class="leftIcon"></i>{{ leftText }}
      </a>
      <h1 class="page-title font-of" v-if="title !== '' && !titleEvent">{{ title }}
        <i class="icon down-arrow" v-if="downArrow" :class="downArrow"></i></h1>
      <h1 class="page-title font-of" v-if="title !== '' && titleEvent" @click="titleClick" >{{ title }}<i class="icon down-arrow" v-if="downArrow" :class="downArrow"></i>
      </h1>
      <a  v-if="rightText || rightIcon || rightCircle" class="ph-btn abs-right" href="javascript:;" @click="rightClick">{{ rightText }}
        <i v-if="rightIcon" class="icon" :class="rightIcon"></i>
        <!--<i v-if="rightCircle" v-for="i in 3" :class="rightCircle"></i>-->
        <i v-if="rightCircle"  :class="rightCircle"></i>
        <i v-if="rightCircle"  :class="rightCircle"></i>
        <i v-if="rightCircle"  :class="rightCircle"></i>
      </a>
    </div>
    <slot></slot>
    <slot name="filter-project"></slot>
  </div>
</template>

<script>
  // 通用头部组件
  export default {
    props: {
      leftClickEvent: {
        type: Boolean,
        default: false
      },
      leftOperateEvent: {
        type: Boolean,
        default: false
      },
      leftText: {
        type: String,
        default: ''
      },
      leftIcon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      titleEvent: {
        type: Boolean,
        default: false
      },
      rightText: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: ''
      },
      rightCircle: {
        type: String,
        default: ''
      },
      downArrow: {
        type: String,
        default: ''
      },
      isIndex: {
        type: Boolean,
        default: false
      },
      returnMain: {
        type: Boolean,
        default: false
      },
      returnPending: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 左右键按钮事件
      leftClick () {
        // this.$dispatch('page-header-left-click')
        if (this.isIndex) {
          // 关闭 调App接口 22
          let closeObj = {
            'method': 'closeWeb',
            'content': '',
            'success': '',
            'error': ''
          }
          window.location = '/native_service?data=' + JSON.stringify(closeObj)
        } else if (this.returnMain) { // 返回主页
          this.$router.push({ path: '/' })
        } else if (this.returnPending) { // 返回周期性工单待处理
          this.$router.push({ path: '/periodicity-pending' })
        } else if (this.leftClickEvent) {
          this.$emit('page-header-left-click')
        } else {
          window.history.back()
        }
      },
      titleClick () {
        this.$emit('page-header-title-click')
      },
      rightClick () {
        this.$emit('page-header-right-click')
      }
    }
  }
</script>
