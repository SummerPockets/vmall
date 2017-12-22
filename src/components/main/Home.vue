<template>
  <div v-if="data">
    <scroll-pic :scrollPics="data.scrollAdsGB"></scroll-pic>
    <myheader :guides="data.gridInfoList"></myheader>
    <bodyone :adOne="data.compositeAdsFst" :adTwo="data.compositeAdsSec" :adThree="adThree" :adFour="adFour"></bodyone>
    <bodytwo :top="data.sysNoticeList" :middle="data.subChannelAds"></bodytwo>
    <div class="zero"></div>
    <bodythree :longAds="data.newRegionListGB"></bodythree>
    <section id="bottom-area" class="bottom-area">
      <p class="login">
        <a href="/account/applogin?url=/" id="loginBtn">登录</a>
        <a href="http://club.huawei.com/thread-1144534-1-1.html">反馈</a>
      </p>

      <p class="touch">
        <a href="/app/download"><i></i><span>客户端</span></a>
        <a href="/" class="current"><i></i><span>触屏版</span></a>
        <a href="javascript:;" onclick="go2PC();return false;"><i></i><span>电脑版</span></a>
      </p>

      <p class="copyright clearfix">
        <a id="policy-link" href="javascript:void(0)">隐私政策</a>
        <a id="agreement-link" href="javascript:void(0)">用户协议</a>
        <a href="http://www.miitbeian.gov.cn">苏ICP备17040376号-6</a>
        <br>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010009">苏公网安备32011402010009号</a>
        <span> Copyright © 2012-2017  VMALL.COM 版权所有</span>
      </p>
    </section>
    <div class="hr-50"></div>
    <section class="hungBar"> <a href="#" class="button-top"><span>返回顶部</span></a> </section>
  </div>
</template>

<script>
  import scrollPic from '../scrollpic/ScrollPic.vue'
  import myheader from '../header/Header.vue'
  import bodyone from '../body/Bodyone.vue'
  import bodytwo from '../body/Bodytwo.vue'
  import bodythree from '../body/Bodythree.vue'

  export default {
    props: {
      data: {
        type: Object
      }
    },
    data () {
      return {}
    },
    computed: {
      adThree () {
        return this.data.newRegionListGB[0].regionContent.productList
      },
      adFour () {
        return this.data.newRegionListGB[1].regionContent
      }
    },
    components: {
      scrollPic,
      myheader,
      bodyone,
      bodytwo,
      bodythree
    }
  }
</script>

<style lang="stylus" scoped>
 div {
   #bottom-area {
     position: relative;
     bottom: 0;
     z-index: 19;
     width: 100%;
     background-color: #fff;
     margin-top: .4em;
     padding: 0 1.1em;
     -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
     text-align: center;
     .login {
       margin: 0 auto;
       padding: .45em 0;
       height: 1.5em;
       display: inline-block;
       a {
         float: left;
         width: 6em;
         font-size: .6em;
         height: 2.5em;
         line-height: 2.5em;
         position: relative;
       }
     }
     .touch {
       padding: .8em 0;
       height: 2.45em;
       border-top: 1px solid #eaeaea;
       border-bottom: 1px solid #eaeaea;
       margin-top: -0.2em;
       a {
         float: left;
         margin-left: 3.2em;
         i {
           display: block;
           height: 1.8em;
           width: 1.8em;
           background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/bg/bg-bottom.png) no-repeat center top;
           background-size: auto 100%;
         }
         span {
           font-size: .6em;
           color: #888;
           padding-top: 5px;
         }
         &:first-child {
           float: left;
           margin-left: 1.6em;
           i {
             background-position: center left;
           }
         }
         &:last-child {
           i {
             background-position: center right;
           }
         }
       }
       a.current {
         span {
           color: #333;
         }
       }
     }
     .copyright {
       padding: .35em 0 .6em;
       line-height: .7em;
       &:before {
         content: " ";
         display: table;
       }
       &:after {
         content: " ";
         display: table;
         clear: both;
       }
       a {
         font-size: .5em;
         line-height: 1;
         color: #333;
         padding: 0 .8em 0 .5em;
         position: relative;
         &:before {
           content: '';
           position: absolute;
           right: 0;
           top: 50%;
           margin-top: -0.5em;
           height: 1em;
           width: 0;
           border-right: 1px solid #eaeaea;
         }
       }
       span {
         font-size: .5em;
         line-height: 1;
         color: #333;
         padding: 0 .8em 0 .5em;
         position: relative;
       }
     }
   }
   .hr-50 {
     height: 2.5em;
   }
   .hungBar {
     position: fixed;
     z-index: 103;
     bottom: 2.9em;
     right: .5em;
     .button-top {
       display: inline-block;
       border-radius: 50%;
       width: 1.95em;
       height: 1.95em;
       background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/button-top.png) no-repeat center;
       background-size: 1.95em 1.95em;
       span {
         display: none;
       }
     }
   }
 }
</style>
