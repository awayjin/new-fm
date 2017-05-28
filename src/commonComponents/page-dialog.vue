<style scoped lang="less">
  @import "../less/_vars.less";

  .dialog-confirm-wrap {
    position: fixed; z-index: 16; top: 110px; display: block; left: 50%; margin-left: -12.5rem ;
  }
  /* dialog */
  .dialog-outer{
    -webkit-animation:inOut  1s ease-in-out 1 ; -webkit-transform: scale(1); transition: transform .3s linear, opacity 3s ease-in-out;
    -webkit-transform: scale(1);  margin: 15px 20px 15px; width: 100%; min-width: 23rem; position: absolute;
    background-color: #fbfbfb;   border-radius: 5px;
    font-size: 14px;   padding: 10px 0px 0px;   z-index: 16;
    /*border: 1px solid #b8b5a6;*/
  }
  .dialog-outer *, .dialog-outer{ box-sizing: content-box;}
  .dialog-content{ border-bottom: 1px solid #ddd; padding: 10px 15px; margin: 10px 0 0px; overflow: auto; min-height: 40px; line-height: 18px; }
  .dialog-content h2 { color: #2e2e33; text-align: center; font-size: 1.6rem; }
  .dialog-buttons{     overflow: hidden; display: -webkit-box; display: -webkit-flex;display: flex;-webkit-box-pack: center;
    -webkit-justify-content: center; justify-content: center;}
  .dialog-buttons .d-button{color: #009949;  display:inline-block; height: 4.5rem; line-height: 4.5rem; font-size:1.6rem;text-align:center;
    white-space:nowrap;vertical-align:middle; width: 100%; cursor:pointer; font-weight: bold;    box-sizing: border-box;
    box-sizing: border-box;display: block; -webkit-box-flex: 1; -ms-flex: 1; }
  .d-button:active, .fault-type33 li:active { background-color: #EFEBEB;}
  .fault-type #checkChoose li:active { background: none;}
  .dialog-buttons .btn-primary { border-right: 1px solid #ddd; }

  .d-mask{position:fixed;width:100%;height:100%;background-color:#000;opacity:.7;filter:alpha(opacity=70);left:0;top:0;z-index:15}

  @media screen and (min-width: 375px) {
    .dialog-outer{  width: 29rem; }
    .dialog-confirm-wrap { margin-left: -14.5rem;}

  }
</style>

<template>
  <div v-show="showDialog">
    <div class="dialog-confirm-wrap">
      <div class="dialog-outer" data-alert="alert">
        <div class="dialog-content"><h2> {{ dialogText }} </h2></div>
        <div class="dialog-buttons clearfix">
          <div class="d-button btn-primary btn-lack" @click="affirmDialog">确定</div>
          <div class="d-button d-cancel" @click="cancelDialog">取消</div>
        </div>
      </div>
    </div>

    <div class="d-mask"></div>
  </div>

</template>

<script>
  export default {
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      dialogText: {
        type: String,
        default: '确认吗'
      }
    },
    methods: {
      cancelDialog () {
        this.$emit('event-cancel-dialog')
      },
      affirmDialog () {
        this.$emit('event-affirm-dialog')
      }
    }
  }
</script>
