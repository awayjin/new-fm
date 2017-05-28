/**
 * Created by jinw01 on 2017/5/9.
 */
import LocalStorage from 'local-storage'
import Toast from 'v-toast'

export default {
  install (Vue) {
    // toast提示框--https://github.com/dwqs/vue-toast
    Vue.prototype.$toast = Toast

    Vue.prototype.$appConfig = {
      // 路径
      url: {
        homepage: ''
      },
      // 提示信息
      tips: {
        serverError: '服务器异常',
        noData: '暂无数据',
        loadError: '加载失败',
        loading: '加载中...',
        successNoData: '请求成功,无数据! 状态码:',
        reqError: '请求错误 ',
        lastTip: '已是最后一页!'
      },
      // 远程资源
      api: {
        orderMaintain (number = 1, linkCode = 'default', orgId = 'default', devicetype = 'default') {
          return `/static/datum/order-maintain.json?currentPage=${number}&pageSize=20&requesttype=1&linkCode=${linkCode}&orgId=${orgId}&devicetype=${devicetype}`
          // return `/mend/query/mendOrderList`
        },
        orderPending (number = 1, linkCode = 'default', orgId = 'default', devicetype = 'default') {
          return `/static/datum/order-maintain-pending.json?currentPage=${number}&pageSize=20&requesttype=1&linkCode=${linkCode}&orgId=${orgId}&devicetype=${devicetype}`
          // return `/mend/query/mendOrderList`
        }
      },
      // 离线存储
      ls: LocalStorage
    }
  }
}
