/**
 * Created by jinw01 on 2017/5/22.
 */
import moment from 'moment'
moment.locale('zh-cn')

export default {
  install (Vue) {
    Vue.filter('moment', function (date, format = 'YYYY-MM-DD HH:mm:ss') {
      if (!date) {
        return 'N/A'
      }

      let today = moment(moment().format('YYYY-MM-DD'))
      let curDate = moment(moment(date, format).format('YYYY-MM-DD'))
      let diff = parseInt((curDate - today) / (24 * 60 * 60 * 1000)) // 86400000
      if (diff === 0) { // 当天
        let curMinute = moment(moment().format('YYYY-MM-DD HH:mm'))
        let passMinute = moment(moment(date, format).format('YYYY-MM-DD HH:mm'))
        let minuteDiff = parseInt((curMinute - passMinute) / (60 * 1000))
        if (minuteDiff > 0 && minuteDiff < 60) {
          return minuteDiff + ' 分钟前'
        }
        return moment(date, format).fromNow()
      } else if (diff === -1) { // 昨天
        return '昨天 ' + moment(date).format('HH:mm')
      }

      return moment(date, format).format('MMMDo HH:mm')
    })
  }
}
