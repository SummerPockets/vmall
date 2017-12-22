<template>
  <div>
    <article class="breadcrumb prod-breadcrumb SCat-breadcrumb" id="breadcrumb">
      <header>
        <h1 id="pageTitle">购物车</h1>
      </header>
      <section class="shortcut">
      </section>
    </article>
    <div class="hr-48"></div>
    <div id="system-content-area" v-for="message in messages" :key="message.id">
      <form id="orderForm" action="/order/confirm" method="get">
        <!-- 21030309-购物车商品展示-start -->
        <section class="sc-list" id="system-content-section">
          <section class="sc-pro-list">
            <div id="product-list">
              <!-- 主商品 -->
              <section class="sc-pro-area productList">
                <div class="b">
                  <!-- 主商品 start -->
                  <div class="sc-pro-goods">
                    <div class="pro-panels">
                      <label class="checkbox form-msg"><input type="checkbox" class="vam" data-prdid="84570258" data-skuid="373909345" data-type="1" checked="checked"><i></i> </label>
                      <div class="sc-pro-href">
                        <a class="prddetail" href="/goods">
                          <p class="p-img p-img-70">
                            <img :src="message.mainImg" alt="">
                          </p>
                          <p class="p-name">
                            <span>{{message.msg}}</span>
                          </p>
                        </a>
                        <p class="p-price showPriceUI">
                          <del>
                            <em>
                              <small></small>
                            </em>
                          </del>
                          <b class="red">
                            <em>{{message.price}}</em>
                          </b>
                        </p>
                      </div>
                      <p class="p-amount-num hide" id="p-amount-num_373909345">
			                    <span class="textbox">
			                        <b class="minus minus-disabled" id="minus-373909345"></b>
		                            <input data-quantity="1" type="text" id="quantity-373909345" value="1" data-limit="5" readonly="readOnly">
			                        <b class="add" id="add-373909345"></b>
			                    </span>
                      </p>
                      <p class="p-amount" id="p-amount_373909345">
                        <span>{{message.count}}</span>
                      </p>
                    </div>
                  </div>
                  <!-- 20170720-带服务的商品-服务-start -->
                  <div class="sc-pro-other sc-pro-service">
                    <div class="pro-other">
                      <div class="pro-other-title">
                        <span>服务</span>
                      </div>
                      <div class="pro-other-cont serviceEvent" id="showServiceId-1001010043737">
                        <div class="pro-service showService-1001010043737">
                          <div class="pro-service-box">
                            <p class="p-guarantee">
                              <span>{{message.server}}</span>
                            </p>
                          </div>
                        </div>
                        <div class="icon-more-right"></div>
                      </div>
                    </div>
                  </div>
                  <!-- 20170720-带服务的商品-服务-end -->

                  <!-- 20170720-赠品-start -->
                  <div class="sc-pro-other">
                    <div class="pro-other">
                      <div class="pro-other-title">
                        <span>配</span>
                      </div>
                      <div class="pro-other-cont">
                        <div class="pro-box-list gift-373909345" data-prdid="932946320" data-giftid="41272885" data-mainskuid="373909345" data-type="4">
                          <a class="prddetail" href="/product/932946320.html#41272885">
                            <p class="pro-box-img">
                              <img :src="message.bottomImg">
                            </p>
                            <p class="pro-box-info"><span class="pro-box-name">{{message.bottomDes}}</span></p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 20170720-赠品-end -->


                  <!-- 20170720-带优惠购的商品-优惠购-start -->
                  <!-- 20170720-带优惠购的商品-优惠购-end -->

                  <!-- 20170720-商品滚动区-优惠购列表-start -->
                  <!-- 20170720-商品滚动区-优惠购列表-end -->


                </div>
              </section>


              <!-- 套餐 -->
              <!-- 套餐的if-end -->
            </div>

            <!-- 20170720-商品滚动区-推荐搭配-start -->
            <!-- 20170720-商品滚动区-推荐搭配-end -->

          </section>
        </section>
        <input type="hidden" value="373909345:1" id="skuIdAndQtys" name="skuIdAndQtys">
        <input type="hidden" value="" id="bundleIdAndQtys" name="bundleIdAndQtys">
        <input type="hidden" value="" id="mainSkuIds" name="mainSkuIds">
        <input type="hidden" value="0" id="types" name="types">
        <input type="hidden" value="41272885" id="giftSkuIds" name="giftSkuIds">
        <input type="hidden" value="1" id="state" name="state">
        <input type="hidden" value="true" id="enableAutoCoupon" name="enableAutoCoupon">
      </form>
    </div>
    <div id="searchDiv" :class="{vanish: this.session.count}">
      <section class="system-empty system-empty-small">
        <header class="h">
          <p class="system-empty-title"><i class="icon-sc"></i><span>购物车中还没有商品，赶紧选购吧！</span></p>
        </header>
        <div class="f small">
          <a class="button-style-5-big" href="/"><span>去逛逛</span></a>
        </div>
      </section>
      <section class="system-pro-list">
        <header class="h hide"><span>热销推荐</span></header>
        <div class="b">
        </div>
      </section>
      <div class="toast" id="check-number" style="display:none"></div>
      <div class="hr-60"></div>
      <!-- 21040627-提交-start -->
      <section class="action-fixed action-fixed-shoppingcart" id="button-area-1">
        <!-- 21030310-订单-总计-start -->
        <!-- 21030310-订单-总计-end -->
      </section>
    </div>
    <section class="system-pro-list">
      <header id="recommandHeader" class="h hide"><span>热销推荐</span></header>
      <div id="recommandDIV" class="b">
      </div>
    </section>
    <div class="toast" style="display:none"></div>
    <div class="hr-60"></div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: Array
      }
    },
    data () {
      return {
        session: {
          count: -1
        }
      }
    },
    computed: {
      messages () {
        this.session.count = this.msg.length
        this.session.$saveData()
        return this.msg
      }
    },
    created () {
      this.session = this.$sessionBind(this.session)
    }
  }
</script>

<style lang="stylus" scoped>
  div {
    article.breadcrumb {
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      z-index: 100;
      border-bottom: 1px solid #e5e5e5;
      header {
        #pageTitle {
          margin-left: 1.15em;
          display: block;
          width: 45%;
          height: 3.43em;
          line-height: 3.43em;
          vertical-align: middle;
          font-size: .7em;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .shortcut {
        position: absolute;
        right: 0;
        top: 50%;
        padding-right: .6em;
        z-index: 10;
        margin-top: -0.6em;
      }
    }
    .hr-48 {
      height: 2.4em;
    }
    #system-content-area {
      #orderForm {
        .sc-list {
          margin-bottom: .65em;
          .sc-pro-list {
            #product-list {
              .sc-pro-area {
                margin-bottom: .3em;
                background-color: #fff;
                .b {
                  .sc-pro-goods {
                    padding: 0 .8em;
                    position: relative;
                    .pro-panels {
                      margin-left: 1.5em;
                      position: relative;
                      border-top: 0;
                      padding: .5em 0;
                      .checkbox {
                        position: absolute;
                        padding: .7em .3em .7em 0;
                        left: -1.5em;
                        top: 50%;
                        margin-top: -1.3em;
                        z-index: 2;
                        input {
                          display: none;
                        }
                        i {
                          -webkit-appearance: none;
                          -moz-appearance: none;
                          appearance: none;
                          background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon4_1.png) no-repeat;
                          border: 0 none;
                          display: inline-block;
                          width: .9em;
                          height: .9em;
                          background-size: 100% 200%;
                          vertical-align: middle;
                          background-position: bottom;
                        }
                      }
                      .sc-pro-href {
                        height: 3.5em;
                        cursor: pointer;
                        .prddetail {
                          .p-img {
                            position: relative;
                            float: left;
                            height: 3.5em;
                            width: 3.5em;
                            padding: 0;
                            img {
                              border: 0;
                              display: inline-block;
                              width: 100%;
                              height: 100%;
                              vertical-align: top;
                              overflow: hidden;
                              max-width: 100%;
                            }
                          }
                          .p-name {
                            max-height: 1.6em;
                            min-height: .8em;
                            padding-left: .5em;
                            padding-right: 0;
                            line-height: .8em;
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            span {
                              position: relative;
                              font-size: .6em;
                              word-break: break-all;
                              display: block;
                              top: 0;
                            }
                          }
                        }
                        .p-price {
                          position: absolute;
                          left: 4em;
                          bottom: .65em;
                          del {
                            margin-right: .2em;
                            color: #888;
                            text-decoration: line-through;
                            em {
                              font-size: .65em;
                              small {
                                padding-right: .2em;
                              }
                            }
                          }
                          b {
                            color: #ca151e;
                            em {
                              font-size: .65em;
                              small {
                                padding-right: .2em;
                              }
                            }
                          }
                        }
                      }
                      .p-amount {
                        position: absolute;
                        right: 0;
                        bottom: .65em;
                        color: #888;
                        line-height: 1;
                        span {
                          font-size: .55em;
                        }
                      }
                    }
                  }
                  .sc-pro-other {
                    position: relative;
                    .pro-other {
                      position: relative;
                      .pro-other-title {
                        line-height: 1.3;
                        width: 1.6em;
                        padding: .3em 0;
                        position: absolute;
                        left: .8em;
                        z-index: 3;
                        span {
                          font-size: .55em;
                          color: #888;
                          display: block;
                        }
                      }
                      .pro-other-cont {
                        position: relative;
                        min-height: inherit;
                        padding: .2em 1.5em .2em 2.4em;
                        .pro-service {
                          .pro-service-box {
                            display: inline-block;
                            max-width: 100%;
                            vertical-align: top;
                            .p-guarantee {
                              line-height: 1.7;
                              display: -webkit-flex;
                              display: flex;
                              display: -webkit-box;
                              display: -moz-box;
                              display: -ms-flexbox;
                              display: box;
                              span {
                                padding: 0.3em 0;
                                display: block;
                                font-size: .55em;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                -webkit-box-flex: 0;
                                -moz-flex-shrink: 0;
                                -webkit-flex-shrink: 0;
                                flex-shrink: 0;
                              }
                            }
                          }
                        }
                        .icon-more-right {
                          display: block;
                          position: absolute;
                          right: .8em;
                          top: 50%;
                          margin-top: -0.25em;
                          width: .5em;
                          height: .5em;
                          background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                          background-size: .5em .5em;
                          -webkit-tap-highlight-color: rgba(0,0,0,0);
                        }
                      }
                    }
                    .sc-pro-other {
                      position: relative;
                      .pro-other {
                        position: relative;
                        .pro-other-title {
                          line-height: 1em;
                          width: 1.6em;
                          padding: .3em 0;
                          position: absolute;
                          left: .8em;
                          z-index: 3;
                          span {
                            font-size: .55em;
                            color: #888;
                            display: block;
                          }
                        }
                        .pro-other-cont {
                          position: relative;
                          min-height: 1.2em;
                          padding: .2em .8em .2em 2.4em;
                          .pro-box-list {
                            display: inline-block;
                            padding: .1em 0;
                            position: relative;
                            max-width: 100%;
                            vertical-align: middle;
                            .prddetail {
                              .pro-box-img {
                                width: 1em;
                                height: 1em;
                                border: 1px solid #ececec;
                                border-radius: .1em;
                                overflow: hidden;
                                -moz-box-sizing: border-box;
                                -webkit-box-sizing: border-box;
                                -ms-box-sizing: border-box;
                                box-sizing: border-box;
                                position: absolute;
                                left: 0;
                              }
                              .pro-box-info {
                                line-height: 1em;
                                padding-left: 1.4em;
                                display: -webkit-flex;
                                display: flex;
                                display: -webkit-box;
                                display: -moz-box;
                                display: -ms-flexbox;
                                display: box;
                                .pro-box-name {
                                  display: block;
                                  max-width: 100%;
                                  font-size: .55em;
                                  width: auto;
                                  overflow: hidden;
                                  white-space: nowrap;
                                  text-overflow: ellipsis;
                                  -webkit-box-flex: 1;
                                  -moz-flex-shrink: 1;
                                  -webkit-flex-shrink: 1;
                                  flex-shrink: 1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    #searchDiv {
      &.vanish {
        display: none;
      }
      section.system-empty {
        padding: 1.25em .8em;
        text-align: center;
        header.h {
          p.system-empty-title {
            line-height: 1.2em;
            padding: 0;
            i.icon-sc {
              position: relative;
              top: .3em;
              margin-right: .5em;
              background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon32.png);
              height: 1.2em;
              width: 1.2em;
              display: inline-block;
              background-size: 100% auto;
              background-position: 0 0;
            }
            span {
              display: inline-block;
              font-size: .65em;
              color: #666;
            }
          }
        }
        small {
          padding: .4em 0 0;
          .button-style-5-big {
            width: auto;
            span {
              font-size: .65em;
            }
          }
        }
      }
    }
    .system-pro-list {
      background-color: #fff;
      overflow: hidden;
      header.hide {
        display: none;
        height: 1.75em;
        line-height: 1.5em;
        background-color: #fff;
        text-align: left;
        padding: 0 .8em;
        position: relative;
        span {
          font-size: .55em;
          color: #222;
        }
      }

      .b {
        border-top: 1px solid #eaeaea;
      }
    }
    .toast {
      position: fixed;
      bottom: 20%;
      z-index: 1001;
      background-color: rgba(0,0,0,0.9);
      color: #fff;
      text-align: center;
      border-radius: 1.2em;
      width: 80%;
      line-height: 2.4;
      font-size: .6em;
      left: 10%;
      right: 10%;
    }
    .hr-60 {
      height: 3em;
    }
  }
</style>
