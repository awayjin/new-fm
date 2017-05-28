<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_project_list.less";
  @import "../less/_filter_item.less";

</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-main="true"  :title="'临时工单'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content clearfix">
      <div class="filter-wrap">
        <maintain-header :active-path="'waiting'"></maintain-header>
        <div class="filter-line">
          <div class="filter-item" :class="{ 'filter-current': toggleProject }" @click="filterProject">
            <span>项目</span> <i class="triangle"></i>
          </div>
          <div class="filter-item"  :class="{ 'filter-current': toggleDevice }" @click="filterDevice">
            <span>设备类型</span> <i class="triangle"></i>
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
            <ul  >
              <li v-for="(item, index) in itemList">
                <router-link to="/main/maintainDetail"><h2 class="device-title"> {{ item.content }}</h2></router-link>
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

        <!--筛选设备 Begin-->
        <section class="filter-box clearfix"  v-show="toggleDevice" >
          <!-- 一级 Begin -->
          <div class="filter-one" >
            <ul>
              <li v-for="(one, index) in oneFacility" @click="filterTwo(one, $event)" :class="{current: one === selected }">
                <div class="bg"> {{ one.name }}</div>
              </li>
            </ul>
          </div>
          <!-- 一级 End -->

          <!-- 二级 Begin-->
          <div class="filter-two" >
            <ul>
              <li v-for="two in twoFacility" @click="fitlerRequestDevice(two)" :class="{current: two === selectedTwo }">
                <div class="bg">{{ two.name }}</div>
              </li>
            </ul>
          </div>
          <!-- 二级 End-->

        </section>
        <!--筛选设备 End-->

      </div>
    </section>

    <page-loading :show-loading="showLoading"></page-loading>

    <page-dialog :show-dialog="showDialog" :dialog-text="dialogText"  @event-cancel-dialog="cancelDialog" @event-affirm-dialog="affirmDialog"></page-dialog>

  </div>
</template>

<script>
  import PageHeader from '../commonComponents/page-header.vue'
  import MaintainHeader from '../components/maintain-header.vue'
  import PageLoading from '../commonComponents/page-loading.vue'
  import PageScroller from '../commonComponents/page-scroller.vue'
  import PageDialog from '../commonComponents/page-dialog.vue'
  import facilityData from '../setting/page-facility-data'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      MaintainHeader,
      PageScroller,
      PageLoading,
      PageDialog
    },
    data () {
      return {
        itemList: [],
        toggleProject: false,
        toggleDevice: false,
        showLoading: false,
        showDialog: false,
        dialogText: '确认?', // 确认文本
        deleteIndex: -1, // 确认删除索引
        deviceType: '', // 设备类型
        busy: false, // 加载中
        oneFacility: facilityData.oneFacility(), // 一级设备数据
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
      filterTwo (one) {
        this.selected = one // 选中状态
        this.twoFacility = facilityData.twoFacility[one.code] // 二级数据
        console.log('length:' + this.twoFacility.length + 'one.code:' + one.code)
      },
      fitlerRequestDevice (two) {
        this.selectedTwo = two
        this.toggleDevice = false // 隐藏筛选设备
        this.deviceType = two.code // 设备类型ID
        console.log(two.code)
        this.initLoad()
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
        this.toggleDevice = false
        this.toggleProject = !this.toggleProject
      },
      // 筛选设备类型
      filterDevice (arg) {
        this.toggleProject = false
        this.toggleDevice = !this.toggleDevice
      },
      orderMaintain () {
        this.$route.router.go('/order-maintain')
      },
      orderPeriodicity () {
        this.$route.router.go('/exception/403')
      },
      scanCode () {
        console.log('index header right-click')
      }
    }
  }
</script>

