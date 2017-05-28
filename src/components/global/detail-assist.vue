
<style lang="less" scoped>
  @import "../../less/_vars";
  
  .detail-assist {
       padding-left: 1.25rem;
       color:@gray-brownish;
       border-top:1px solid  @gray-bg;
       position: relative;
       .name,.icons {
           position: absolute; 
           top:0; 
           line-height: 3.71rem;
           display: inline-block;
       }
       .name {left: 1.25rem;width:4rem;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
       .icons {right:0.42rem;}
       .cause {
           margin:0 2.03rem 0 4.83rem ;
           height: 100%;
           line-height: 3.71rem;
           white-space:nowrap; 
           overflow:hidden; 
           text-overflow:ellipsis;
           }
    }
</style>
<template>
  <div>
    <span class="common-tip" v-text="title"></span>
    <div class="detail-assist" v-for="v in list">
        <span class="name"  v-text="v.person"></span>
        <router-link to="/main/maintainDetail"><div class="cause" v-text="v.context" ></div></router-link>
        <span class="icons" >></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailAssist',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
