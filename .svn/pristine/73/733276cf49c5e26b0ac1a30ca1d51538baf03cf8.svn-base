export default {
  routes: [
    // FM主页
    {
      path: '/',
      component: resolve => require(['../pages/home.vue'], resolve)
    },
    // 临时工单-待接单
    {
      path: '/order-maintain',
      component: resolve => require(['../pages/orderMaintain.vue'], resolve)
    },
    // 临时工单-待处理
    {
      path: '/order-maintain-pending',
      component: resolve => require(['../pages/orderMaintainPending.vue'], resolve)
    },
    // 临时工单-待验收
    {
      path: '/order-maintain-checking',
      component: resolve => require(['../pages/orderMaintainChecking.vue'], resolve)
    },
    // 临时工单-已完成
    {
      path: '/order-maintain-done',
      component: resolve => require(['../pages/orderMaintainDone.vue'], resolve)
    },
    // 周期性工单-待处理
    {
      path: '/periodicity-waiting',
      component: resolve => require(['../pages/periodicityWaiting.vue'], resolve)
    },
    // 周期性工单-待处理
    {
      path: '/periodicity-pending',
      component: resolve => require(['../pages/periodicityPending.vue'], resolve)
    },
    // 周期性工单-已完成
    {
      path: '/periodicity-done',
      component: resolve => require(['../pages/periodicityDone.vue'], resolve)
    },
    // 周期性工单-详细-基本信息
    {
      path: '/per-detail-base',
      component: resolve => require(['../pages/perDetailBase.vue'], resolve)
    },
    // 周期性工单-详细-处理记录
    {
      path: '/per-detail-dispose',
      component: resolve => require(['../pages/perDetailDispose.vue'], resolve)
    },
    // 周期性工单-详细-协助记录
    {
      path: '/per-detail-assist',
      component: resolve => require(['../pages/perDetailAssist.vue'], resolve)
    },
    // 周期性工单-详细-协助记录--子工单
    {
      path: '/per-assist-child',
      component: resolve => require(['../pages/perAssistChild.vue'], resolve)
    },
    {
      path: '/main',
      component: resolve => require(['../pages/main.vue'], resolve),
      children: [
        {
          // //临时工单详情
          path: 'maintainDetail/:id?',
          component: resolve => require(['../pages/maintain-detail.vue'], resolve)
        },
        {
          // //临时子工单详情
          path: 'maintainChildDetail/:id?',
          component: resolve => require(['../pages/maintain-child-detail.vue'], resolve)
        },
        {
          // //转单
          path: 'maintainTransfer',
          component: resolve => require(['../pages/maintain-transfer.vue'], resolve)
        },
        {
          // //选择转单人
          path: 'maintainTransferChoice',
          component: resolve => require(['../pages/maintain-transfer-choice.vue'], resolve)
        },
        {
          // //协助
          path: 'maintainAssist',
          component: resolve => require(['../pages/maintain-assist.vue'], resolve)
        },
        {
          // //挂起
          path: 'maintainHang',
          component: resolve => require(['../pages/maintain-hang.vue'], resolve)
        },
        {
          // //选择协助人
          path: 'maintainAssistChoice',
          component: resolve => require(['../pages/maintain-assist-choice.vue'], resolve)
        },
        {
          // //验收
          path: 'maintainAccept',
          component: resolve => require(['../pages/maintain-accept.vue'], resolve)
        },
        {
          // //转验收人
          path: 'maintainAcceptTrans',
          component: resolve => require(['../pages/maintain-accept-trans.vue'], resolve)
        },
        {
          // //完成
          path: 'maintainFinish',
          component: resolve => require(['../pages/maintain-finish.vue'], resolve)
        }
      ]
    }

  ]
}
