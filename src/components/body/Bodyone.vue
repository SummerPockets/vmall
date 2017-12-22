<template>
    <div>
      <section class="channel-floor channel-ads">
        <article class="b" style="text-align:left;">
          <ul>
            <li v-for="item in adOne" :key="item.id">
              <div class="normal">
                <a href="/goods">
                  <img :src="item.adPicUrl" style="float:none;">
                </a>
              </div>
            </li>
          </ul>
          <ul class="two">
            <li v-for="item in adTwo" :key="item.id">
              <div class="normal">
                <a :href="item.adPrdUrl">
                  <img :src="item.adPicUrl" style="float:none;">
                </a>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section class="channel-floor channel-floor-index channel-floor-list3">
        <div class="b">
          <ul>
            <li v-for="(item, index) in adThree" :key="item.id" v-if="index < 3">
              <a :href="'/product/'+ item.prdId +'.html'">
                <p class="p-img"><img onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'" :src="item.prdPicUrl">
                  <i class="icon-tag"><img :src="item.tagPhotoUrl"></i>
                </p>
                <p class="p-name"><span><em>{{item.prdName}}</em></span></p>
                <p class="p-promotion">{{item.prdDescription}}</p>
                <p class="p-price"><b><em>¥ </em>{{parseInt(item.prdCurrentPrice)}}
                </b>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="channel-floor channel-floor-index">
        <header class="h">
          <span>{{adFour.name}}</span>
        </header>
        <div class="channel-floor-roll choiceness-wrap">
          <div class="swiper-container swiper-container-horizontal" id="chaozhiDiv">
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="(item, index) in adFour.productList" :key="item.id" v-if="index < 6" class="li" style="width: 165.6px">
                <a :href="'/product/' + item.prdId + '.html'">
                  <p class="p-img"><img :src="item.prdPicUrl" onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'">
                    <i class="icon-tag"><img :src="item.tagPhotoUrl"></i>
                  </p>
                  <p class="p-name"><span><em>{{item.prdName}}</em></span></p>
                  <p class="p-promotion">{{item.prdDescription}}</p>
                  <p class="p-price">
                    <b><em>¥ </em>{{parseInt(item.prdCurrentPrice)}}
                    </b>
                  </p>
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
      adOne: {
        type: Array
      },
      adTwo: {
        type: Array
      },
      adThree: {
        type: Array
      },
      adFour: {
        type: Object
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
    .channel-ads{
      overflow:hidden;
      margin: .3em 0 0;
      background-color: #fff;
      .b {
        overflow:hidden;
        ul {
          position: relative
          float: left;
          li {
            float: left;
            width: 50%;
          }
        }
        .two {
          position: relative;
          li {
            margin-top: .1em;
          }
        }
      }
    }
    .channel-floor-list3 {
      .b {
        background-color: #fff;
        ul {
          list-style: none;
          overflow: hidden;
          li {
            position: relative;
            float:left;
            width: 33%;
            margin-right: .08em;
            box-sizing: border-box;
            margin-bottom: -1px;
            background-color: #f6f6f6;
            a {
              padding: .65em .3em .45em;
              text-align: center;
              text-decoration: none;
              color: #333;
              -webkit-tap-highlight-color: rgba(0,0,0,0);
              cursor: auto;
              display: block;
              .p-img {
                width: 3.6em;
                height: 3.6em;
                padding: 0;
                margin: 0 auto;
                text-align: center;
                position: static;
                img {
                  width: 100%;
                  height: 100%;
                  border: 0;
                  max-width: 100%;
                  text-align: center;
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
                line-height: 1.2;
                padding-top: .5em;
                margin: 0 auto;
                display: table;
                white-space: normal;
                text-overflow: ellipsis;
                overflow: hidden;
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
    .channel-floor-index {
      margin-top: .3em;
      background-color: #fff;
      display: block;
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
      }
      .choiceness-wrap {
        border-top: 1px solid #eaeaea;
        width: 100%;
        overflow: hidden;
        .swiper-container {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          .swiper-wrapper {
            transition-duration: 0ms;
            transform: translate3d(-579.6px, 0px, 0px);
            .li {
              position: relative;
              float:left;
              width: 33%;
              margin-right: .08em;
              box-sizing: border-box;
              margin-bottom: -1px;
              background-color: #f6f6f6;
              a {
                padding: .65em .3em .45em;
                text-align: center;
                text-decoration: none;
                color: #333;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                cursor: auto;
                display: block;
                .p-img {
                  width: 3.9em;
                  height: 3.9em;
                  padding: 0;
                  margin: 0 auto;
                  text-align: center;
                  position: static;
                  img {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    max-width: 100%;
                    text-align: center;
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
                  line-height: 1.2;
                  padding-top: .5em;
                  margin: 0 auto;
                  display: table;
                  white-space: normal;
                  text-overflow: ellipsis;
                  overflow: hidden;
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
