<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_per_detail.less";
  @import "../less/_common_detail.less";

  .detail {
    .detail-handle {
       margin-top: .5rem;
    }
    top: -.3rem;
    .assist-list li {
      padding-left: 0;
      p {
        white-space: normal; overflow: auto;
      }
      .assist-name {
        color: @gray-cool;       text-align: left; width: 9rem;
      }
      .assist-content {
        width: 95%; color: @gray-charcoal;
      }
      .assist-des {

      }
    }
  }
</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-pending="true" :title="'周期性工单详情'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content content-detail clearfix">

      <div class="detail">
        <div class="assist-content">
          <ul class="assist-list">
            <li >
              <p class="assist-name">所属项目</p><p class="assist-content">由于设备维修比较麻维修比较麻烦，需要协助</p>
            </li>
            <li>
              <p class="assist-name">设备类型</p><p class="assist-content">由于烦，需要协助</p>
            </li>
            <li>
              <p class="assist-name">故障描述</p>
              <p class="assist-content assist-des">由于烦，需由于烦由于烦由于烦由于烦由于烦由于烦由于烦由于烦要协助</p>
            </li>
            <li>
              <p class="assist-name">协助原因</p><p class="assist-content">由于烦，需要协助</p>
            </li>
          </ul>
        </div>

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
  import PageLoading from '../commonComponents/page-loading.vue'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      PageLoading
    },
    data () {
      return {
        showLoading: false
      }
    }
  }
</script>

