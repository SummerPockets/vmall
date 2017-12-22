<template>
  <div>
    <section v-for="(item, index) in longAds" :key="item.id" v-if="index > 1" class="channel-floor channel-floor-index channel-floor-list">
      <header class="h">
        <span>{{item.regionContent.name}}</span>
        <a :href="'/category-' + item.regionContent.virtualCategoryId" class="more">更多</a>
      </header>
      <div class="b">
        <ul>
          <li v-for="(key, i) in item.regionContent.productList" :key="key.id" v-if="i < 4">
            <a :href="'/product/' + key.prdId + '.html'">
              <p class="p-img"><img onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'" :src="key.prdPicUrl">
              </p>
              <p class="p-name"><span><em>{{key.prdName}}</em></span></p>
              <p class="p-promotion">{{key.prdDescription}}</p>
              <p class="p-price"><b><em>¥ </em>{{key.prdCurrentPrice}}
              </b></p>
            </a>
          </li>
        </ul>
      </div>
      <div class="channel-floor-roll choiceness-wrap">
        <div class="swiper-container swiper-container-horizontal" id="test337155">
          <swiper class="swiper-wrapper choiceness-content" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-slide swiper-slide-active"  v-for="(it, j) in item.regionContent.productList" :key="it.id" v-if="j > 3"data-virtualcategoryid="36" data-displaydescription="手机" style="width: 165.6px;">
          <a :href="'/product/' + it.prdId + '.html'">
            <p class="p-img"><img onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'" :src="it.prdPicUrl">
            </p>
            <p class="p-name"><span><em>{{it.prdName}}</em></span></p>
            <p class="p-promotion">{{it.prdDescription}}</p>
            <p class="p-price"><b><em>¥ </em>{{it.prdCurrentPrice}}
            </b></p>
          </a>
        </swiper-slide>
      </swiper>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      longAds: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          width: 165.6,
          direction: 'horizontal'
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
  div {
    .channel-floor {
      background-color: #fff;
      .h {
        height: 1.75em;
        line-height: 1.6em;
        background-color: #fff;
        text-align: left;
        padding: 0 .8em;
        position: relative;
        overflow: hidden;
        span {
          font-size: .65em;
          color: #222;
        }
        a {
          position: absolute;
          font-size: .55em;
          color: #888;
          padding-right: 1em;
          background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat right center;
          background-size: 1em 1em;
          right: 1.45em;
          top: 50%;
          margin-top: -1.4em;
        }
      }
      .b {
        background-color: #fff;
        ul {
          width: 100%;
          list-style: none;
          overflow: hidden;
          li {
            float: left;
            width: 50%;
            padding-right: .05em;
            position: relative;
            box-sizing: border-box;
            a {
              height: 8.25em;
              padding-bottom: .5em;
              position: relative;
              text-align: center;
              display: block;
              .p-img {
                width: 100%;
                height: 5.5em;
                img {
                  width: 100%;
                  height: 100%;
                  border: 0;
                  max-width: 100%;
                  text-align: top;
                }
                .icon-tag {
                  width: 1.35em;
                  height: 1.35em;
                  top: 0;
                  position: absolute;
                  left: 0;
                  overflow: hidden;
                  img {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    max-width: 100%;
                    vertical-align: top;
                  }
                }
              }
              .p-name {
                display: table;
                height: auto;
                max-height: 2.4em;
                padding: .66em .2em 0;
                text-align: center;
                margin: 0 auto;
                white-space: normal;
                font-size: .65em;
                color: #333;
                span {
                  display: table-cell;
                  vertical-align: middle;
                  em {
                    line-height: 1.2;
                    max-height: 2.4em;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  }
                }
              }
              .p-promotion {
                text-align: center;
                display: block;
                font-size: .6em;
                padding-top: .25em;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                height: 1.1em;
                color: #bbb;
              }
              .p-price {
                padding-top: 0;
                line-height: .9;
                height: .95em;
                display: -webkit-inline-box;
                vertical-align: top;
                b {
                  display: inline-block;
                  color: #ca151e;
                  font-size: .65em;
                  font-weight: normal;
                  line-height: 1.2;
                  em {
                    font-size: .85em;
                  }
                }
              }
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }

      .channel-floor-roll {
        border-top: 1px solid #eaeaea;
        width: 100%;
        overflow: hidden;
        .swiper-container-horizontal {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: box;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            box-sizing: border-box;
            .swiper-slide {
              position: relative;
              box-sizing: border-box;
              border-right: 1px solid #eaeaea;
              a {
                padding: .55em .95em .45em;
                text-align: center;
                display: block;
                .p-img {
                  width: 3.9em;
                  height: 3.9em;
                  margin: 0 auto;
                  text-align: center;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                  .icon-tag {
                    width: 1.35em;
                    height: 1.35em;
                    top: 0;
                    position: absolute;
                    left: 0;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                      border: 0;
                      max-width: 100%;
                      vertical-align: top;
                    }
                  }
                }
                .p-name {
                  text-align: center;
                  height: 2.4em;
                  padding-top: .5em;
                  margin: 0 auto;
                  display: table;
                  white-space: normal;
                  font-size: .65em;
                  color: #333;
                  span {
                    display: table-cell;
                    vertical-align: middle;
                    em {
                      line-height: 1.2;
                      max-height: 2.4em;
                      word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                  }
                }
                .p-promotion {
                  text-align: center;
                  display: block;
                  font-size: .6em;
                  padding-top: .25em;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  height: 1.1em;
                  color: #bbb;
                }
                .p-price {
                  padding-top: 0;
                  line-height: .9;
                  height: .95em;
                  display: -webkit-inline-box;
                  vertical-align: top;
                  b {
                    display: inline-block;
                    color: #ca151e;
                    font-size: .65em;
                    font-weight: normal;
                    line-height: 1.2;
                    em {
                      font-size: .85em;
                    }
                  }
                }
              }
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
