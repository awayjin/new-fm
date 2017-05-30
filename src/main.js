import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFilters from './filters'
import appWrap from './App'
import routerConfig from './router/configAMD'
import VueGlobalVariable from './setting'
// 远程接口地址
const G_HOST = process.env.G_HOST
const G_PORT = process.env.G_PORT ? `:${process.env.G_PORT}` : ''
const G_PREFIX = process.env.G_PREFIX ? `/${process.env.G_PREFIX}` : ''

// 引入组件
import DetailBase from 'global/detail-base.vue'
import DetailAssist from 'global/detail-assist.vue'
import DetailRecord from 'global/detail-record.vue'
import PersonList from 'global/person-list.vue'
// import DetailRecord from 'global/detail-record.vue'
// 安装路由
Vue.use(VueRouter)

// 安装数据资源
Vue.use(VueResource)

// 安装过滤器
Vue.use(VueFilters)

console.log('DetailBase.name:' + DetailBase.name)
// 注册全局组件
Vue.component(DetailBase.name, DetailBase)
Vue.component(DetailAssist.name, DetailAssist)
Vue.component(DetailRecord.name, DetailRecord)
Vue.component(PersonList.name, PersonList)
// 设置请求超时
Vue.http.options.emulateJSON = true
Vue.http.options.timeout = 60000
Vue.http.options.root = G_HOST + G_PORT + G_PREFIX
// console.log('G_HOST:' + G_HOST + ' ,G_PORT:' + G_PORT + ', G_PREFIX:' + G_PREFIX)

// 添加全局变量
Vue.use(VueGlobalVariable)

// 创建路由
const router = new VueRouter(routerConfig)

Vue.config.productionTip = false
// window.mainBus = new Vue()
Vue.component('right-component', {template: '<div></div>'})
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<appWrap/>',
//   components: { appWrap }
// })

const App = Vue.extend(appWrap)
window.mainBus = new App({ router }).$mount('#app')

