<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_project_list.less";
  @import "../less/_filter_item.less";

</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-main="true"  :title="'周期性工单'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content clearfix">
      <div class="filter-wrap">
        <periodicity-header :active-path="'pending'"></periodicity-header>
        <div class="filter-line">
          <div class="filter-item" :class="{ 'filter-current': toggleProject }" @click="filterProject">
            <span>项目</span> <i class="triangle"></i>
          </div>
        </div>
      </div>

      <div class="">

        <div class="task-list-none" v-show="listNone">
          <span class="task-none"></span>
          还没有待接单哦~
        </div>

        <div class="list-have project-list" v-if="listHave">
          <page-scroller  @next-page-event="loadMore" :busy="busy" :is-the-last-page="listEnd">
            <ul>
              <li v-for="(item, index) in itemList"  @click="periodicityDetail(item, index)">
                <h2 class="device-title"> {{ item.content }}</h2>
                <p class="d-address"> <span class="time-icon"></span> {{ item.projectName }}</p>
                <p class="dev">  <span class="type-icon"></span> {{ item.deviceTypeName }}</p>
                <div class="d-time">
                  <span class="item-time">{{ item.createTime }}</span>
                  <span class="isfrom-fm" v-if="item.comeFM"> 来自FM</span>
                </div>

                <div class="order-btn" @click="orderReceiving(item, index)">
                  接单
                </div>
              </li>
            </ul>
          </page-scroller>

        </div>

        <div class="task-list-none" v-if="listError">
          服务器异常
        </div>

        <!--筛选项目 Begin-->
        <section class="filter-box clearfix"  v-show="toggleProject" >
          <!-- 一级 Begin -->
          <div class="filter-one" >
            <ul>
              <li class="current">
                <div class="bg">供配电设备</div>
              </li>
              <li v-for="(i, index) in 18">
                <div class="bg">供配电设备 {{ index }}</div>
              </li>
            </ul>
          </div>
          <!-- 一级 End -->

          <!-- 二级 Begin-->
          <div class="filter-two" >
            <ul>
              <li  >
                <div class="bg">A供配电设备</div><span class="sprite-icon" ></span>
              </li>
            </ul>
          </div>
          <!-- 二级 End-->

        </section>
        <!--筛选项目 End-->


      </div>
    </section>

    <page-loading :show-loading="showLoading"></page-loading>

    <page-dialog :show-dialog="showDialog" :dialog-text="dialogText"  @event-cancel-dialog="cancelDialog" @event-affirm-dialog="affirmDialog"></page-dialog>

  </div>
</template>

<script>
  import PageHeader from '../commonComponents/page-header.vue'
  import PeriodicityHeader from '../components/periodicity-header.vue'
  import PageLoading from '../commonComponents/page-loading.vue'
  import PageScroller from '../commonComponents/page-scroller.vue'
  import PageDialog from '../commonComponents/page-dialog.vue'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      PeriodicityHeader,
      PageScroller,
      PageLoading,
      PageDialog
    },
    data () {
      return {
        itemList: [],
        toggleProject: false,
        showLoading: false,
        showDialog: false,
        dialogText: '确认?', // 确认文本
        deleteIndex: -1, // 确认删除索引
        deviceType: '', // 设备类型
        busy: false, // 加载中
        twoFacility: [], // 联动二级数据
        selected: null, // 联动二级数据
        selectedTwo: null, // 联动二级数据
        nextPage: 1, // 下一页
        listEnd: false, // 最后一页
        listNone: false,
        listError: false,
        listHave: true
      }
    },
    computed: {
      isBusy () {
        return this.busy
      }
    },
//    mounted () {
//      this.$nextTick(() => {
//        this.loadList()
//      })
//    },
    methods: {
      // 接单
      orderReceiving (item, index) {
        console.log(item)
        console.log('index:' + index)
        if (item && item.content) {
          this.dialogText = item.content + '-' + index
          this.deleteIndex = index
        }
        this.showDialog = true
      },
      // 取消接单
      cancelDialog () {
        this.showDialog = false
      },
      // 确认接单
      affirmDialog () {
        console.log('确认接单...this.deleteIndex:' + this.deleteIndex)
        if (this.deleteIndex !== -1) {
          this.itemList.splice(this.deleteIndex, 1)
        }
        this.showDialog = false
      },
      // 初始化列表数据
      initLoad () {
        this.itemList.splice(0, this.itemList.length)
        this.nextPage = 1
        this.listEnd = false
        this.loadMore()
      },
      loadMore: function () {
        this.busy = true
        setTimeout(() => {
          let url = this.$appConfig.api.orderMaintain(this.nextPage, 'a', 'a', this.deviceType)
          this.$http.get(url).then((res) => {
            let resData = res.data
            if (resData.data && res.status === 200) {
              if (resData.data.orderList.length === 0 && this.itemList.length === 0) {
                this.listNone = true
                this.listHave = false
              }
              this.itemList = this.itemList.concat(resData.data.orderList)
              this.nextPage++
              this.busy = false
              this.listEnd = this.nextPage > resData.data.totalRow
            } else {
              console.error('获取数据失败..')
            }
          }, (res) => {
            console.log('error:' + res)
            this.listError = true
            this.listHave = false
            this.busy = false
          })
        }, 1000)
      },
      // 筛选项目
      filterProject () {
        this.toggleProject = !this.toggleProject
      },
      // 筛选设备类型
      filterDevice (arg) {
        this.toggleProject = false
      },
      // 周期性工单详细
      periodicityDetail () {
        this.$router.push({ path: '/per-detail-base' })
      }
    }
  }
</script>

