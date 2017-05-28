<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_per_detail.less";

</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-pending="true" :title="'周期性工单详情'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content content-detail clearfix">
      <per-detail-header :active-path="'assist'"></per-detail-header>

      <div class="detail">
        <div class="assist-content">
          <ul class="assist-list">
            <li class="tri" @click="childOrder">
              <p class="assist-name">五小小</p><p class="assist-content">由于设备维修比较麻维修比较麻烦，需要协助</p>
            </li>
            <li class="tri">
              <p class="assist-name">五二</p><p class="assist-content">由于烦，需要协助</p>
            </li>
          </ul>
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
    },
    methods: {
      childOrder () {
        console.log('childOrder')
        this.$router.push({ path: '/per-assist-child' })
      }
    }
  }
</script>

