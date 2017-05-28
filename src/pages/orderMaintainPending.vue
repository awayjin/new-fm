<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_project_list.less";
  @import "../less/_filter_item.less";

  .content {
    .filter-wrap {
      height: auto; background-color: inherit;
    }
    .project-list {
      top: 3.8rem;
    }
  }
</style>

<template>
  <div class="page" >
    <div class="hd">
      <page-header :return-main="true"  :title="'临时工单'"  :left-text="'返回'" :left-icon="'left-arrow'"></page-header>
    </div>

    <section class="content clearfix">
      <div class="filter-wrap">
        <maintain-header :active-path="'pending'"></maintain-header>

      </div>

      <div class="">

        <div class="task-list-none" v-show="listNone">
          <span class="task-none"></span>
          还没有待处理单哦~
        </div>

        <div class="list-have project-list" v-if="listHave">
          <page-scroller  @next-page-event="loadMore" :busy="busy" :is-the-last-page="listEnd">
            <ul  >
              <li v-for="(item, index) in itemList">
                <h2 class="device-title"> {{ item.content }}</h2>
                <p class="d-address"> <span class="time-icon"></span> {{ item.projectName }}</p>
                <p class="dev">  <span class="type-icon"></span> {{ item.deviceTypeName }}</p>
                <div class="d-time">
                  <span class="item-time">{{ item.createTime | moment }}</span>
                  <span class="isfrom-fm" v-if="item.comeFM"> 来自FM</span>
                </div>

                <div class="order-btn btn-gray" @click="orderReceiving(item, index)">
                  接单
                </div>
                <div class="order-status">
                  不通过
                </div>
              </li>
            </ul>
          </page-scroller>

        </div>

        <div class="task-list-none" v-if="listError">
          服务器异常
        </div>

      </div>
    </section>

    <!--<vue-toast ref='toast'></vue-toast>-->
  </div>
</template>

<script>
  import PageHeader from '../commonComponents/page-header.vue'
  import MaintainHeader from '../components/maintain-header.vue'
  import PageScroller from '../commonComponents/page-scroller.vue'
//  import Toast from 'v-toast'

  export default {
    name: 'maintain-pending',
    components: {
      PageHeader,
      MaintainHeader,
      PageScroller
    },
    mounted () {
//      this.$toast.success({
//        duration: 2000,
//        message: '成功--测试'
//      })
    },
    data () {
      return {
        itemList: [],
        showDialog: false,
        deviceType: '', // 设备类型
        busy: false, // 加载中
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
        let url = this.$appConfig.api.orderPending(this.nextPage, 'a', 'a', this.deviceType)
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
      }
    }
  }
</script>

