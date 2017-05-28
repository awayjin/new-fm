
<style lang="less" scoped>
  @import "../../less/_vars";
.trans-accept {
    ul {
        li{
            height: 6.5rem;
            line-height: 6.5rem;
            position: relative;
            border-bottom:1px solid  @gray-bg;
            .left {
                float:left;
                width:100%;
                margin-right:-100px;
                .name{
                    width:80%;
                    height: 2rem;
                    line-height: 2rem;
                    margin: 0.83rem;
                    span{float: left}
                }
                .tag {
                    display: inline-block;
                    border:1px solid  @gray-cool;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    padding: 0 0.8rem;
                    color: @gray-brownish;
                    font-size:1rem;
                    margin-left:0.5rem;
                    margin-top: 0.2rem;
                    border-radius: 0.83rem;
                }
                .info {
                    width:80%;
                    height: 2rem;
                    line-height: 2rem;
                    margin-left: 0.83rem;
                    .full {
                      white:100%;
                      color: @gray-brownish;
                      font-size:1.17rem;
                      white-space:nowrap; 
                      overflow:hidden; 
                      text-overflow:ellipsis;
                    }
                    .skill,.city{
                        width: 50%;
                        float: left;
                        color: @gray-brownish;
                        font-size:1.17rem;
                        white-space:nowrap; 
                        overflow:hidden; 
                        text-overflow:ellipsis;
                    }
                    .city {
                        text-indent: 1rem;
                    }                   
                }   
            }
            .right {
                position: absolute;
                right: 0;
                top:0;
                width:2.5rem;
                .active{
                    background: url('../../../static/img/Group.png');
                    background-size: cover;   
                }
                span{
                    display: inline-block;
                    width: 2rem;
                    height: 2rem;
                    margin-top: 2rem;
                    background: url('../../../static/img/Ring.png');
                    background-size: cover;                    
                }
            }
        }
    }
}
</style>
<template>
  <div>
    <ul>
      <li v-for="v in userList">
        <div class="left">
          <div class="name"><span v-text="v.userName">李阳</span><span class="tag" v-text="v.role" v-if="isAccept">技术员</span></div>
          <div class="info">
            <div class="full" v-text="v.skillNames" v-bind:class="{ skill : isAccept }">供配电、给排水</div>
            <div class="city" v-text="v.city" v-if="isAccept">天津东丽万科城</div>
          </div>
        </div>
        <div class="right">
          <span v-bind:class="{ active : v.isCheck }" @click="v.isCheck = !v.isCheck"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PersonList',
  data () {
    return {
      isCheck: false
    }
  },
  props: {
    userList: {
      type: Array,
      default: () => {}
    },
    isAccept: {
      type: Boolean,
      default: false
    }
  }
}
</script>
