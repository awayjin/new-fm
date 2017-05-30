<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

<template>
  <div class="page" >
    <h2>Hi demo-main</h2>
    <p>      id: {{ $route.params.id }}
    </p>
    <h3>
      h3: <!--<compoent :is="demoCurrentView"></compoent>-->
    </h3>
    <section >
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'demo-main',
    data () {
      return {
        demoCurrentView: null
      }
    }
  }
</script>
