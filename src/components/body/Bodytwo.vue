<template>
  <section class="channel-notice">
    <div><a href="/notice"><i class="icon-notice"></i></a></div>
    <div class="more"><a href="/notice">更多</a></div>
    <div id="noticeSlider">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-no-swiping" v-for="item in top" :key="item.id" style="height: 48px;
            text-align: left;
            text-decoration: none;
            font-weight: normal;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;">
          <a :href="'/notice-'+ item.noticeId + '?fromHome=0'" style="font-size: 14.4px;font-weight: 400">{{item.title}}</a>
        </swiper-slide>
      </swiper>
    </div>

    <section class="channel-area">
      <ul>
        <li v-for="item in middle" :key="item.id">
          <p>
            <a :href="item.adPrdUrl" target="_self">
              <img :src="item.adPicUrl" title="华为">
            </a>
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      top: {
        type: Array
      },
      middle: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          direction: 'vertical',
          autoHeight: false,
          loop: true,
          slidesPerview: 'auto',
          loopedSlides: 8,
          debugger: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
  .channel-notice {
    margin-top: .3em;
    background-color: #fff;
    height: 2em;
    position: relative;
    div:first-child {
      height: 100%;
      float: left;
      line-height: 2em;
      text-align: center;
      position: relative;
      padding: 0 .5em 0 .8em;
      a {
        display: block;
        font-weight: bold;
        height: 100%;
        text-decoration: none;
        color: #333;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        .icon-notice {
          background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_notice.png) no-repeat scroll center center;
          background-size: 100% 100%;
          display: inline-block;
          height: .65em;
          width: 1.5em;
        }
      }
    }
    .more {
      position: absolute;
      right: .8em;
      top: 50%;
      margin-top: -.25em;
      z-index: 2;
      a {
        display: block;
        font-size: .55em;
        color: #888;
        padding-right: 1em;
        background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat right center;
        background-size: 1em 1em;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
    }
    #noticeSlider {
      padding-right: 3.9em;
      height: 2em;
      line-height: 2em;
      vertical-align: middle;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      z-index: 1;
      swiper {
        swiper-slide {
          a {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .6em;
            color: #333;
            position: relative;
            top: .1em;
            text-decoration: none;
            word-break:keep-all;
          }
        }
      }
    }
    .channel-area {
      margin-top: .1em;
      ul {
        position: relative;
        list-style: none;
        li {
          float: left;
          width: 49.7%;
          background-color: #fff;
          text-align: center;
          box-flex: 1;
          display: block;
          -webkit-box-flex: 1;
          flex: 1;
          &:first-child {
            margin-right: .1em;
          }
          p {
            a{
              display: block;
              width: 100%;
              margin: 0 auto;
              img {
                border: 0;
                max-width: 100%;
                height: auto;
                vertical-align: top;
              }
            }
          }
        }
      }
    }
  }
</style>
