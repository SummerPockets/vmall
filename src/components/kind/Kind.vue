<template>
  <div v-if="guides">
      <div class="hr-48"></div>
      <div class="index-top home-top">
        <!-- 21030531-头部-start -->
        <header class="header index-header category-header" id="index-header">
          <section class="search index-search">
            <a id="indexSearch" href="/search/index">
              <input type="text" placeholder="搜索商品" readonly="readonly">
            </a>
          </section>
          <section class="shortcut">
            <ul>
              <li>
                <a id="message" href="/message/index" class="icon-message icon-message-black" title="消息"></a>
              </li>
            </ul>
          </section>
          <div class="shadow"></div>
        </header>
      </div>
      <article class="category category-list">
        <!-- 20140722-一级分类选择-start -->
        <section class="category-left">
          <ul>
            <li v-for="item in guides" :key="item.id">
              <a href="javascript:;" :data="item.id" :class="{'current':item.show}" @click="selectSort(item)">
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </section>
        <!-- 20140722-一级分类选择-end -->

        <!-- 20140722-二级分类选择-start -->
        <section v-for="all in guides" :key="all.id" class="category-right" :class="{'show':all.show}" id="category-1">
          <!--大广告-->
          <div class="system-ads" v-if="all.subCategorys[3]" v-for="item in guides[0].subCategorys[3].subCategorys" :key="item.id">
            <a :href="item.categoryUrl"><img :src="item.picUrl"></a>
          </div>
          <!--小广告-->
          <div class="system-ads category-ads" v-if="all.subCategorys[3]">
            <div class="category-ads-list">
              <div class="swiper-container swiper-container-horizontal swiper-container-free-mode" id="197">
                <swiper :options="swiperOption" ref="mySwiper" style="height: 44px">
                  <!-- slides -->
                  <swiper-slide v-for="item in guides[0].subCategorys[2].subCategorys" :key="item.id">
                    <a :href="item.categoryUrl"><img :src="item.picUrl"></a>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <!--商品或虚拟分类-->
          <div class="category-list">
            <div v-for="(item, index) in all.subCategorys" :key="item.id" v-if="index < 2">
              <div class="header-title"><h3><span>{{item.name}}</span></h3></div>

              <div class="b">
                <ul>
                  <li v-for="(key, value) in item.subCategorys" :key="key.id" v-if="value < 3">
                    <a :href="key.categoryUrl">
                      <div class="pro-panels">
                        <p class="p-img"><img :src="key.picUrl"></p>
                        <p class="p-name"><span>{{key.name}}</span></p>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-for="(key, value) in item.subCategorys" :key="key.id" v-if="value > 2">
                    <a :href="key.categoryUrl">
                      <div class="pro-panels">
                        <p class="p-img"><img :src="key.picUrl"></p>
                        <p class="p-name"><span>{{key.name}}</span></p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- 20140722-二级分类选择-end -->
      </article>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: {
      guides: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: false,
          observeParents: true,
          width: 92.53,
          debugger: true
        }
      }
    },
    methods: {
      selectSort (item) {
        this.$nextTick(function () {
          this.guides.forEach(function (item) {
            Vue.set(item, 'show', false)
          })
          Vue.set(item, 'show', true)
        })
      }
    },
    created () {
      this.$nextTick(function () {
        Vue.set(this.guides[0], 'show', true)
      })
    }
    /*
    watch: {
      guides (val) {
        if (val.length > 0) {
          this.$nextTick(() => {
            this.guides.forEach(function (item) {
              Vue.set(item, 'show', false)
            })
            Vue.set(this.guides[0], 'show', true)
          })
        }
      }
    }
    */
  }
</script>

<style lang="stylus" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial,Helvetica,sans-serif,'Lucida Grande',Verdana;
    word-wrap: break-word;
    line-height: 1;
    min-width: 320px;
    background-color: #eaeaea;
    max-width: 720px;
    margin: 0 auto;
    color: #333;
  }
  div {
    .hr-48 {
      height: 2.4em;
    }
    .index-top {
      position: relative;
      height: auto;
      .index-header {
        background-color: #fff;
        .index-search {
          position: relative;
          top: 15%;
          width: auto;
          left: 0;
          padding: 0 2.4em 0 .8em;
          #indexSearch {
            input {
              line-height: 2.3em;
              background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_search.png) no-repeat .62em center;
              background-size: 1.38em 1.38em;
              background-color: rgba(234,234,234,0.8);
              color: #000;
              padding: 0 .62em 0 2.9em;
              text-overflow: ellipsis;
              font-size: .65em;
              width: 100%;
              height: 2.1em;
              text-align: left;
              border-radius: 1.07em;
              -webkit-border-radius: 1.07em;
              border: 0;
              -webkit-user-select: none;
            }
          }
        }
        .shortcut {
          position: absolute;
          right: 0;
          top: 50%;
          padding-right: .6em;
          z-index: 10;
          margin-top: -0.6em;
          ul {
            list-style: none;
            li {
              position: relative;
              text-align: center;
              display: inline-block;
              vertical-align: top;
              #message {
                background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_message_black.png);
              }
            }
          }
        }
        .shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: 0 -7px 15px #333;
          -webkit-box-shadow: 0 -7px 15px #333;
          -moz-box-shadow: 0 -7px 15px #333;
          background: -webkit-gradient(linear,left bottom,left top,color-stop(100%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,1)));
        }
      }
    }
    .category-list {
      top: 2em;
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 720px;
      margin: 0 auto;
      background-color: #fff;
      .category-left {
        width: 23.62%;
        height: 100%;
        border-right: 1px solid #eaeaea;
        overflow-y: scroll;
        overflow-x: hidden;
        float: left;
        position: relative;
        z-index: 9;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: 0 0 3px #eaeaea;
        -webkit-box-shadow: 0 0 3px #eaeaea;
        -moz-box-shadow: 0 0 3px #eaeaea;
        ul {
          padding-bottom: 2.45em;
          position: relative;
          min-height: 91.5%;
          list-style: none;
          li {
            a{
              height: 2.25em;
              border-bottom: 1px solid #eaeaea;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              -ms-box-sizing: border-box;
              box-sizing: border-box;
              display: box;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              text-align: center;
              padding: 0 .3em;
              span {
                font-size: .65em;
                font-weight: bold;
                line-height: 1.3;
                width: 100%;
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                position: relative;
                top: .15em;
              }
            }
            a.current{
              color: #e01d20!important;
              z-index: 10;
              overflow: hidden;
              border-left: 2px solid #ca141d;
              background-color: #f6f6f6;
              span {
                left: -1px;
              }
            }
          }
        }
      }
      .category-right {
        width: 76.38%;
        float: left;
        height: 100%;
        overflow: auto;
        display: none;
        z-index: 8;
        .system-ads {
          padding: 0 .25em;
          margin-top: .25em;
          position: relative;
          top: 0;
          a {
            text-decoration: none;
            color: #333;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            img {
              width: 100%;
            }
          }
        }
        .category-ads {
          padding: 0 0 0 .25em;
          margin-top: .25em;
          position: relative;
          top: 0;
          .category-ads-list {
            .swiper-container {
              margin: 0 auto;
              position: relative;
              overflow: hidden;
              z-index: 1;
              .swiper-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                z-index: 1;
                display: -webkit-box;
                display: -moz-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-transition-property: -webkit-transform;
                -moz-transition-property: -moz-transform;
                -o-transition-property: -o-transform;
                -ms-transition-property: -ms-transform;
                transition-property: transform;
                -webkit-box-sizing: content-box;
                -moz-box-sizing: content-box;
                box-sizing: content-box;
                -webkit-transition-timing-function: ease-out;
                -moz-transition-timing-function: ease-out;
                -ms-transition-timing-function: ease-out;
                -o-transition-timing-function: ease-out;
                transition-timing-function: ease-out;
                margin: 0 auto;
                -webkit-transform: translate3d(0px, 0, 0);
                -moz-transform: translate3d(0px, 0, 0);
                -o-transform: translate(0px, 0px);
                -ms-transform: translate3d(0px, 0, 0);
                transform: translate3d(0px, 0, 0);
                list-style: none;
                overflow: hidden;
                .swiper-slide {
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  -ms-box-sizing: border-box;
                  box-sizing: border-box;
                  padding-right: .25em;
                  -webkit-flex-shrink: 0;
                  -ms-flex: 0 0 auto;
                  flex-shrink: 0;
                  height: 100%;
                  position: relative;
                  float: left;
                  a {
                    img {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
        }
        .category-list {
          position: relative;
          margin-bottom: 2.5em;
          top: 0;
          width: 100%;
          display: inline-block;
          .header-title {
            width: 100%;
            padding: .55em 0 .6em;
            text-align: center;
            overflow: hidden;
            h3 {
              font-size: 1em;
              display: -webkit-inline-box;
              display: -ms-inline-flexbox;
              display: -webkit-inline-flex;
              display: inline-flex;
              padding: 0 2em;
              position: relative;
              &:after {
                content: '';
                width: 100%;
                height: 1px;
                background-color: #eaeaea;
                position: absolute;
                top: 50%;
                left: 0;
                margin-top: -2px;
              }
              span {
                font-size: .65em;
                line-height: 1.2;
                font-weight: bold;
                background-color: #fff;
                position: relative;
                z-index: 2;
                padding: 0 .77em;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -ms-box-sizing: border-box;
                box-sizing: border-box;
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
            }
          }
          .b {
            padding: 0 .35em;
            ul {
              display: box;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              box-sizing: border-box;
              list-style: none;
              li {
                width: 33.33%;
                position: relative;
                a {
                  text-decoration: none;
                  color: #333;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                  background-clip: padding-box;
                  .pro-panels {
                    border-top: 0;
                    padding: .45em 0 .4em;
                    width: 100%;
                    box-sizing: border-box;
                    .p-img {
                      width: 2.75em;
                      height: 2.75em;
                      margin: 0 auto;
                      float: none;
                      position: relative;
                      padding: .1em 0;
                      img {
                        border: 0;
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        vertical-align: top;
                        overflow: hidden;
                      }
                    }
                    .p-name {
                      display: box;
                      display: -webkit-box;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: -webkit-flex;
                      display: flex;
                      -webkit-box-align: center;
                      align-items: center;
                      text-align: center;
                      margin-top: .2em;
                      height: 1.3em;
                      padding: 0 .3em;
                      color: #333;
                      max-height: 1.7em;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      line-height: .9;
                      padding-right: 0;
                      span {
                        font-size: .55em;
                        line-height: 1.2;
                        color: #333;
                        width: 100%;
                        display: block;
                        top: 0;
                        word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        position: relative;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .show {
        display: block;
      }
    }
  }
</style>
