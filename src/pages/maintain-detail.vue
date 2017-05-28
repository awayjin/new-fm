<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../less/_vars.less";
  @import "../less/_detail.less";

</style>

<template>
  <!--<div class="page" >-->
    <section class="content clearfix">
      <div class="detail">
        <!--处理超时-->
        <div class="timeout"><span></span>处理超时</div>
        <!--基本信息-->
        <div class="detail-base common-bg">
          <detail-base :title="'所属项目'" :context="'万科金域华府1'" :is-cause="false"></detail-base>
          <detail-base :title="'设备类型'" :context="'监控系统1'" :is-cause="false"></detail-base>
          <detail-base :title="'故障描述'" :is-cause="false" :context="'铁皮房监控2#三区二栋对面、栋六区二桥西南、23栋三区右边无视频信号，这里显示完整的工单描述内容'"></detail-base>
        </div>
        <!--故障原因-->
        <div class="common-bg">
          <detail-base :title="'故障原因'" :context="'设备老化造成设备问题设备老化造成设备问题设备老化造成设备问题'" :is-cause="true"></detail-base>
        </div>
        <div class="common-bg">
          <detail-base :title="'维修方法'" :context="'设备老化造成设备问题设备老化造成设备问题设备老化造成设备问题'" :is-cause="true"></detail-base>
        </div>
        <!--协助记录-->
        <div class="common-bg">
          <detail-assist :title="'我发起的协助记录'" :list="itemList"></detail-assist>
        </div>
        <!--处理记录  -->
        <div class="common-bg">
              <detail-record :title="'处理记录'" :log="logList" :hours="'工时 5:00'"></detail-record>
        </div>
        <!--流程按钮-->
        <div class="process-btn">
          <div class="left">
          <div class="innerLeft" >
            <router-link to="/main/maintainTransfer"><div>转单</div></router-link>
            <router-link to="/main/maintainHang"><div>挂起</div></router-link>
          </div>
          </div>
          <!--<div class="green-btn">接单</div>-->
          <router-link to="/main/maintainFinish"><div class="green-btn">完成</div></router-link>
          <div class="right">
            <div class="innerRight" >
              <router-link to="/main/maintainAssist"><div>协助</div></router-link>
            </div>
          </div>
          
        </div>
         <!--验收按钮-->
        <!--<div class="assign-btn">
          <ul>
            <li><div class=""><span class="return-icon"></span>验收不通过</div></li>
            <li ><router-link to="/main/maintainAccept"><div class="green-btn"><span class="pass-icon"></span>验收通过</div></router-link></li>
            <li><router-link to="/main/maintainAcceptTrans"><div>转验收人</div></router-link></li>
          </ul>
        </div>-->
      </div>
    </section>

  <!--</div>-->
</template>

<script>
  import PageHeader from '../commonComponents/page-header'
  import MaintainHeader from '../components/maintain-header.vue'

  export default {
    name: 'maintain-receiving',
    components: {
      PageHeader,
      MaintainHeader
    },
    data () {
      return {
        itemList: [
          {person: '王小军', text: '万宏向王小军发起协助', context: '由于设备维修比较麻烦,需要协助需要协助需要协助需要协助需要协助需要协助'},
          {person: '李浩', text: '万宏向王小军发起协助', context: '由于设备维修比较麻烦,需要协助需要协助需要协助需要协助'},
          {person: '张慧小号', text: '万宏向王小军发起协助', context: '由于设备维修比较麻烦,需要协助需要协助需要协助需要协助'},
          {person: '王小军', text: '万宏向王小军发起协助', context: '由于设备维修比较麻烦,需要协助需要协助需要协助需要协助'}
        ],
        logList: [
          {text: '万宏向王小军发起协助111', time: '1495816296'},
          {text: '万宏向王小军发起协助111', time: '20分钟前'},
          {text: '万宏向王小军发起协助', time: '上午 8 : 23'},
          {text: '万宏向王小军发起协助', time: '昨天 19 : 23'},
          {text: '万宏向王小军发起协助', time: '昨天 20 : 23'}
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.mainBus.$emit('setHeader', {
          title: '临时工单详情',
          leftText: '返回'
        })
      })
    },
    methods: {
      demo () {
        console.log(this)
        console.log(this.$appConfig)
        let url = this.$appConfig.api.demo(233)
        this.$http.get(url).then((res) => {
          console.log(res)
        }, (res) => {
          console.log('error')
        })
      }
    }
  }
</script>

