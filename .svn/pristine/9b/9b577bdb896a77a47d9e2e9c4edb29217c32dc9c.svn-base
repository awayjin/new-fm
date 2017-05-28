<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

<template>
  <div class="page" >
    <div class="page-header">
      <div class="wrap">
        <a class="ph-btn abs-left" href="javascript:;" @click="viewBack" >
          <i class="icon left-arrow" ></i>
          {{leftText}}
        </a>
        <h1 class="page-title font-of" >
          {{title}}
        </h1>
        <a href="javascript:;" class="ph-btn abs-right">
          <component :is="currentView">
            <!-- 组件在 vm.currentview 变化时改变！ -->
          </component>
          
        </a>
      </div>
    </div>
    <section >
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      currentView: null,
      title: '',
      leftText: '返回'
    }
  },
  mounted () {
    window.mainBus.$on('setHeader', data => {
      this.title = data.title || ''
      this.leftText = data.leftText || '返回'
      this.currentView = data.currentView || null
      this.href = data.href
    })
  },
  methods: {
    viewBack () {
      if (this.href) {
        this.$router.push(this.href)
        return
      }
      this.$router.back()
    }
  }
}
</script>

