<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_per_detail.less";
  @import "../less/_common_detail.less";

  .detail-handle {
    margin-top: .5rem;
  }
</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-pending="true" :title="'周期性工单详情'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content content-detail clearfix">
      <per-detail-header :active-path="'dispose'"></per-detail-header>

      <div class="detail">
        <div class="detail-handle common-bg">
          <span class="common-tip" >处理记录</span><span class="common-tip time">工时 5:00</span>
          <div class="handle-list">
            <ul >
              <li>
                <div class="handle-log">万宏向王小军发起协助111</div>
                <div class="handle-time" >20分钟前</div>
              </li>
              <li>
                <div class="handle-log">万宏向王小军发起协助111</div>
                <div class="handle-time" >20分钟前</div>
              </li>
            </ul>
            <div class="handle-more" >展开详情<span></span></div>
          </div>
        </div>
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

