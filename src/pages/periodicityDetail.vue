<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_project_list.less";
  @import "../less/_filter_item.less";

</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :title="'周期性工单详情'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content clearfix">
      <per-detail-header :active-path="'waiting'"></per-detail-header>

      <div class="">


base
      </div>
    </section>

    <page-loading :show-loading="showLoading"></page-loading>


  </div>
</template>

<script>
  import PageHeader from '../commonComponents/page-header.vue'
  import PerDetailHeader from '../components/per-detail-header.vue'
  import PageLoading from '../commonComponents/page-loading.vue'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      PerDetailHeader,
      PageLoading
    },
    data () {
      return {
        showLoading: false
      }
    }
  }
</script>

