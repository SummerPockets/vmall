<template>
    <div>
      <article class="breadcrumb prod-breadcrumb" id="breadcrumb" style="top: 0px;">
        <header>
          <a id="btn-back" href="javascript:history.go(-1);"></a>
        </header>
        <div class="productNav">
          <nav class="productNavTab">
            <ul class="clearfix" ref="topUl">
              <li class="current" @click="change($event)">
                <a id="prdDetailbasicInfo" href="javascript:;"><span>商品</span></a>
              </li>
              <li @click="change($event)">
                <a id="prdDetailpicDetaii" href="javascript:;"><span>详情</span></a>
              </li>
              <li @click="change($event)">
                <a id="prdDetailspecification" href="javascript:;"><span>参数</span></a>
              </li>
              <li @click="change($event)">
                <a id="prdDetailreview" href="javascript:;"><span>评价</span></a>
              </li>
            </ul>
          </nav>
        </div>

        <section class="shortcut" @click="nowActive = !nowActive">
          <ul>
            <li>
              <a href="javascript:;"class="icon-header-menu" title="下拉菜单"></a>
            </li>
          </ul>
        </section>
        <div class="header-menu" :class="{active: nowActive}">
          <nav>
            <ul>
              <li><a href="/search/index"><i class="icon-menu-search"></i><span>搜索</span></a></li>
              <li><a href="/category/view"><i class="icon-menu-category"></i><span>分类</span></a></li>
              <li><a href="javascript:;" id="productDetailShare"><i class="icon-menu-share"></i><span>分享</span></a></li>
            </ul>
          </nav>
        </div>
      </article>
      <div class="hr-48"></div>
      <div id="basicInfo" class="tab" style="display: block;">
        <!-- 20170518-商品图片画廊-start -->
        <section class="pro-gallery" style="height:14.5em;">
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205//428_428_1500952937405mp.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205/group//428_428_1500952925810.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205/group//428_428_1500952920460.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205/group//428_428_1500952924022.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205/group//428_428_1500952921939.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="https://res.vmallres.com/pimages//product/6901443189205/group//428_428_1500952924985.jpg">
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination" style="height: 24px"></div>
            </swiper>
        </section>
        <!-- 20170518-商品图片画廊-end -->
        <section class="pro-property">
          <!-- 用于获取促销语高度层-start -->
          <article class="pro-meta-area" style="position:absolute;z-index:-1111; opacity: 0; -webkit-opacity: 0;">
            <div class="pro-meta-area-cont">
              <div class="j_promoHeight p-promotion-box" style="max-height:none;">
                <p class="p-promotion j_pro-skuPromWord">
                  <span class="j_pagetimerPromWord red" style="display: inline;">{{goods.skuList[0].timerProm.timerPromWord}}</span>
                  <span class="j_pageskuPromWord" style="display: inline;">{{goods.skuList[0].promWords}}</span>
                </p>
              </div>
            </div>
          </article>
          <!-- 用于获取促销语高度层-end -->

          <!-- 20170518-基本信息-名称价格-start -->
          <article class="pro-meta-area">
            <div class="pro-meta-area-cont">
              <article class="pro-meta-area-name">
                <a href="javascript:;" id="getCoupon" class="pro-coupons" style="display:none;"></a>
                <div class="p-name"><span id="pro-name">{{goods.skuList[0].skuName}}</span></div>
              </article>
              <div class="hide"><p class="p-point hide" id="skuWeight"></p></div>
              <p class="p-price">
                <i class="j_pro-bundler pro-bundler hide" style="display: none;"><em>套餐</em></i>
                <i id="pro-rushbuy" class="pro-rushbuy" style="display:none;"><em>抢购价</em></i>
                <i id="pro-deposit" class="pro-deposit" style="display:none;"><em>订金</em></i>
                <b><em id="pro-price"><small>¥</small> {{parseInt(goods.skuList[0].skuPrice)}}</em></b>
                <del><em id="pro-prime-price"></em></del>
              </p>
              <div class="j_promotionBox p-promotion-box" style="">
                <p class="p-promotion j_pro-skuPromWord">
                  <span class="j_pagetimerPromWord red" style="display: inline;">{{goods.skuList[0].timerProm.timerPromWord}}</span>
                  <span class="j_pageskuPromWord" style="display: inline;">{{goods.skuList[0].promWords}}</span>
                </p>
                <i class="j_iconmore icon-more-bottom" style="display:none;"></i>
              </div>
            </div>
          </article>
          <!-- 20170518-基本信息-名称价格-end -->

          <!-- 20140623-基本信息-已选商品、服务-start -->
          <article class="pro-meta-area">
            <div class="pro-meta-selected" id="currentSku">
              <dl>
                <dt><label>已选</label></dt>
                <dd>
                  <a href="javascript:;" class="btn-next" @click="show">选择<i class="icon-more-right"></i></a>
                  <div class="p-selected j_currSkuInfowrap" style="">
                    <p class="j_currentSkuInfo"><span>幻夜黑</span>, <span>全网通标配版</span>, <span>4GB+64GB</span>, <span>官方标配</span></p>
                    <em>x<span class="j_skuItemAmt">1</span></em>
                  </div>
                  <div class="j_pguarantee"><p class="p-guarantee">可选保障服务</p></div>
                </dd>
              </dl>
            </div>
          </article>
          <!-- 20140623-基本信息-已选商品、服务-end -->



          <!-- 20170518-基本信息-送货地址-start -->
          <section class="pro-meta-area">
            <div class="pro-meta-match">
              <table border="0" class="t-product j_gif-prd-areawrap">
                <!-- 赠品信息start -->
                <tbody><tr class="t-product-2" id="gif-prd-area"><th><label>配</label></th><td><div class="match-product"><ul class="clearfix"><li><a href="javascript:void(0);"><img class="j_giftImg" src="https://res.vmallres.com/pimages//product/GB1603020018501//428_428_1497323467743mp.jpg" alt="1497323467743mp.jpg" onerror="this.src='https://res.vmallres.com/nwap/activity/honor/images/mask.png'"></a></li></ul></div><a href="javascript:void(0);" class="btn-next">选择<i class="icon-more-right"></i></a></td></tr>
                <!-- 赠品信息end -->
                </tbody></table>
            </div>

            <div class="pro-meta-area-cont" id="productArrival" style="display:none;">
              <div class="related-address-area">
                <i class="icon-send-address"></i>
                <div class="related-address-add" id="related-address-add">
                  <span id="addressSelect"></span>
                </div>
                <div class="arrived-tips">暂时无法给出预计到货时间，如有疑问联系客服</div>
                <span><i class="icon-more-right"></i></span>
              </div>
            </div>
            <div class="pro-meta-service" id="getService">
              <dl>
                <dt><label>服务</label></dt>
                <dd>
                  <i class="icon-more-right"></i>
                  <p class="j_pservice p-service"><span v-for="item in goods.skuList[0].serviceInfos" :key="item.id">{{item.title}}</span></p>
                </dd>
              </dl>
            </div>

            <div class="pro-meta-area-discount" id="getPromotion">
              <p class="p-discount j_pdiscount"><span v-for="item in goods.skuList[0].benefitInfos" :key="item.id">{{item.title}}</span><i class="icon-more-right"></i></p>
            </div>
          </section>
          <!-- 20170518-基本信息-送货地址-end -->

          <!--20170521 用户评论 start-->
          <section class="pro-meta-area pro-meta-area-review" style="">
            <header class="h"><h3><span>用户评价<em id="totalwRecord">（84798条）</em></span><a href="javascript:;" onclick="_paq.push(['trackLink', 'wap-pdp-hot_comment-click_event', 'link', '']); $('#prdDetailreview').click();">查看全部评价<i class="icon-more-right"></i></a></h3></header>
            <div class="review-area" id="scoreAreaw">
              <div class="review-keyword clearfix" id="remarkLabelwDiv"><a href="javascript:;"><span><em>（45659）</em>高颜值</span></a><a href="javascript:;"><span><em>（43433）</em>操作流畅</span></a><a href="javascript:;"><span><em>（36620）</em>物流快</span></a><a href="javascript:;"><span><em>（33563）</em>系统稳定</span></a><a href="javascript:;"><span><em>（29465）</em>有声有色</span></a><a href="javascript:;"><span><em>（28425）</em>通话清晰</span></a><a href="javascript:;"><span><em>（14404）</em>续航持久</span></a></div>
              <div class="review-content">
                <ul id="all-areaw">
                  <li><div class="info clearfix"><p class="fl"><i><img src="https://res.vmallres.com/nwap/20170926/images/echannelWap/misc/defaultface_user_after.png"></i><span><b><em>17352*****</em><time>2017.10.24 18:29</time></b></span></p><p class="fr"><b class="star-area"><s style="width:100%;"></s></b></p></div><div class="word">很好！从荣耀6用到了9！！力挺！！！</div><div class="reply"><div class="reply-cont"><span>华为商城回复：</span>我们一直追求的就是顾客的满意，您的满意我们的动力。感谢您对荣耀一路上的支持！期待您下次光临！</div></div></li></ul>
              </div>
            </div>
          </section>
          <!--20170521 用户评论 end-->
          <!-- 关联商品start -->
          <section class="pro-meta-area related-area">
            <header class="h">
              <h3><span>推荐商品</span></h3>
            </header>
            <section class="related-area-content">
              <ul>
                <li v-for="(item, index) in goods.relatedProductList" :key="item.id" v-if="index < 3">
                  <a :href="'/product/'+ item.prdId + '.html'">
                    <p class="p-img"><img :src="item.defaultImgPath" onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'"></p>
                    <p class="p-name"><span>{{item.prdName}}</span></p>
                  </a>
                </li>
              </ul>
              <ul>
                <li v-for="(item, index) in goods.relatedProductList" :key="item.id" v-if="index > 2">
                  <a :href="'/product/'+ item.prdId + '.html'">
                    <p class="p-img"><img :src="item.defaultImgPath" onerror="javascript:this.src='https://res.vmallres.com/nwap/20170926/images/echannelWap/loading/mask.png'"></p>
                    <p class="p-name"><span>{{item.prdName}}</span></p>
                  </a>
                </li>
              </ul>
            </section>
            <!-- 以旧换新 -->
            <div class="pro-meta-area-replace"> <a href="http://mobile.huishoubao.com/?pid=1056" onclick="ecWap.code.BIClickReport('trackLink','wap-pdp-renew-click_event','link','')"><p class="p-replace"><span>以旧换新（旧机回收最高抵5599元）</span><i class="icon-more-right"></i></p></a></div>
            <!-- 面包屑 -->
            <div class="pro-meta-area-crumbs">
              <p class="p-crumbs"><a href="/"><span>首页</span></a> &gt;
                <a href="/category/detail-75-75"><span>荣耀</span></a> &gt;
                <span class="j_pro-name">荣耀9 全网通标配版 4GB+64GB（幻夜黑）</span>
              </p>
            </div>
          </section>
          <!-- 关联商品end -->

          <!-- sku弹框内容 start -->

          <!-- sku弹框内容 end -->
        </section>
        <div class="loading-action"><span class="loading-action-btn" onclick="_paq.push(['trackLink', 'wap-pdp-recommendation-click_event', 'link', '']);$('#prdDetailpicDetaii').click();"><i class="icon-more-top"></i>&nbsp;点击查看详情</span></div>
      </div>
      <section class="pro-property-action-area-big">
        <div class="pro-property-action-area-btn">
          <div class="pro-property-home">
            <a href="/">
            </a>
            <p>首页</p>
          </div>
          <div class="pro-property-shoppingCart">
            <a id="prdDetailShoppingCart" href="/shopcart" title="购物车">
              <em :class="{show: this.session.count}"><i id="cartNum">{{this.session.count}}</i></em>
            </a>
            <p>购物车</p>
          </div>
          <div class="pro-property-easyBuy hide" id="easybuy" style="display: none;">
            <a href="javascript:;"></a>
            <p>优享购</p>
          </div>
        </div>
        <div class="pro-property-action-area-right" id="pro-operation"><section class="pro-property-action-area"><article class="pro-property-action"><a href="javascript:;" class="j_addCartbtn button-style-4-big"><span @click="buy">加入购物车</span></a><a href="javascript:;" class="j_buynowBtn button-style-1-big"><span>立即购买</span></a></article></section></div>

      </section>
      <div class="ecWap-mask" id="ecWap-box-bg-skuMainBox" style="height: 1692px; width: 414px; position: absolute; left: 0px; top: 0px; z-index: 990;display: none;"></div>
      <article class="ecWap-box-em ecWap-box-lower ecWap-box-sku" id="ecWap-box-skuMainBox" style="position: fixed; left: 0px; width: 100%; z-index: 991; top: auto; height: 596px; display: none;">
        <header class="ecWap-box-header">
          <span class="ecWap-box-title" style="display: none;">提示</span>
          <a href="javascript:;" style="z-index:990" class="j_boxclose ecWap-box-close box-close" @click="close">关闭</a>
        </header>
        <section class="ecWap-box-content">
          <div class="sku-product">
            <div class="sku-product-top">
              <div class="sku-product-summary clearfix">
                <div class="summary-img">
                  <img class="j_skuImgShow" src="https://res.vmallres.com/pimages//product/6901443189205//800_800_1500952937405mp.jpg">
                </div>
                <div class="summary-cont">
                  <p class="summary-price">
                    <i class="j_pro-bundler pro-bundler hide" style="display: none;">
                      <em>套餐</em>
                    </i>
                    <i class="j_pro-rushbuy pro-rushbuy hide" style="display: none;">
                      <em>抢购价</em>
                    </i>
                    <i class="j_pro-deposit pro-deposit" style="display: none;">
                      <em>订金</em>
                    </i>
                    <b>
                      <em class="j_pro-price">
                        <small>¥</small> 2299
                      </em>
                    </b>
                    <del><em class="j_pro-prime-price"></em></del></p><p class="summary-choice">已选：<span class="j_skuResult"><span id="color">幻夜黑</span> <span id="style">全网通标配版</span> <span id="capacity">4GB+64GB</span> <span id="package">官方标配</span> </span><em>x<span class="j_skuItemAmt">1</span></em></p></div></div><div class="sku-product-gift" id="skuGiftResult"><table border="0" class="t-product"><tbody><tr><th><label>配</label></th><td><ul class="clearfix"><li><a href="javascript:void(0);"><img class="j_giftImg" src="https://res.vmallres.com/pimages//product/GB1603020018501//428_428_1497323467743mp.jpg" alt="1497323467743mp.jpg" onerror="this.src='https://res.vmallres.com/nwap/activity/honor/images/mask.png'"></a></li></ul></td></tr></tbody></table></div></div></div><div class="sku-product-main" style="top: 165px;">
        <!-- 20170518-基本信息-sku-start -->
        <div class="pro-meta-sku">
          <div class="pro-meta-sku-content" id="skuList">
            <dl class="clearfix">
              <dt>
                <label>颜色</label>
              </dt>
              <dd>
                <a href="javascript:;" class="color" @click="select($event)">
                  <span>魅海蓝</span>
                </a>
                <a href="javascript:;" class="color" @click="select($event)">
                  <span>海鸥灰</span>
                </a>
                <a href="javascript:;" class="color" @click="select($event)">
                  <span>琥珀金</span>
                </a>
                <a href="javascript:;" class="color selected" @click="select($event)">
                  <span>幻夜黑</span>
                </a>
                <a href="javascript:;" class="color" @click="select($event)">
                  <span>知更鸟蓝</span>
                </a>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt>
                <label>制式</label>
              </dt>
              <dd>
                <a href="javascript:;" class="style selected" @click="select($event)">
                  <span>全网通标配版</span>
                </a>
                <a href="javascript:;" class="style" @click="select($event)">
                  <span>全网通高配版</span>
                </a>
                <a href="javascript:;" class="style" @click="select($event)">
                  <span>全网通尊享版</span>
                </a>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt>
                <label>容量</label>
              </dt>
              <dd>
                <a href="javascript:;" class="capacity selected" @click="select($event)">
                  <span>4GB+64GB</span>
                </a>
                <a href="javascript:;" class="capacity disabled" @click="select($event)">
                  <span>6GB+64GB</span>
                </a>
                <a href="javascript:;" class="capacity disabled" @click="select($event)">
                  <span>6GB+128GB</span>
                </a>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt>
                <label>套餐</label>
              </dt>
              <dd>
                <a href="javascript:;" class="package selected" @click="select($event)">
                  <span>官方标配</span>
                </a>
                <a href="javascript:;" class="package" @click="select($event)">
                  <span>超值套餐一</span>
                </a>
                <a href="javascript:;" class="package" @click="select($event)">
                  <span>超值套餐二</span>
                </a>
                <a href="javascript:;" class="package" @click="select($event)">
                  <span>超值套餐三</span>
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <!-- 套餐选择区域 start -->
        <div class="pro-meta-sku" id="bundlerList-section" style="display:none;">
          <div class="pro-meta-sku-content" style="border-top:none; padding-top:0;">
            <dl class="clearfix">
              <dt>
                <label>套餐</label>
              </dt>
              <dd id="bundlerList"></dd>
            </dl>
            <input type="hidden" name="selectbundleid" id="selectbundleid" value="">
          </div>
        </div>
        <!-- 套餐选择区域 end -->
        <!-- 20170518-基本信息-套餐详细-start -->
        <section class="pro-suit-1" id="bundlerListArea" style="display:none;"></section>
        <!-- 20170518-基本信息-套餐详细-end -->

        <div class="pro-meta-sku" id="extWarrantyList-section" style="">
          <div class="pro-meta-sku-content">
            <dl class="clearfix pro-meta-sku-insurance">
              <dt>
                <label>延保</label>
              </dt>
              <dd id="extWarrantyList">
                <a href="javascript:;" class="warranty selected" @click="select($event)">
                  <span>无需延保</span>
                </a>
                <a href="javascript:;" class="warranty" @click="select($event)">
                  <span class="j_warrname">华为延长服务宝（半年期）</span>
                  <span class="j_warrprice">&nbsp;¥88.00</span>
                </a>
                <a href="javascript:;" class="warranty" @click="select($event)">
                  <span class="j_warrname">华为延长服务宝（一年期）</span>
                  <span class="j_warrprice">&nbsp;¥158.00</span>
                </a>
              </dd>
              <div class="j_extWarrantyDetail clearfix" style="display: none;">
                <a href="javascript:;" id="extWarrantyDetail">详情 &gt;</a>
              </div>
            </dl>
            <input type="hidden" name="selectExtWarrantyId" id="selectExtWarrantyId" value="">
          </div>
        </div>

        <div class="pro-meta-sku" id="accWarrantyList-section" style="">
          <div class="pro-meta-sku-content">
            <dl class="clearfix pro-meta-sku-insurance">
              <dt>
                <label>碎屏保</label>
              </dt>
              <dd id="accWarrantyList">
                <a href="javascript:;" class="screen selected" @click="select($event)">
                  <span>无需碎屏保</span>
                </a>
                <a href="javascript:;" class="screen" @click="select($event)">
                  <span class="j_warrname">华为碎屏服务宝（一年期）</span>
                  <span class="j_warrprice">&nbsp;¥129.00</span>
                </a>
              </dd>
              <div class="j_accWarrantyDetail clearfix" style="display: none;">
                <a href="javascript:;" id="accWarrantyDetail">详情 &gt;</a>
              </div>
            </dl>
            <input type="hidden" name="selectAccWarrantyId" id="selectAccWarrantyId" value="">
          </div>
        </div>
        <!-- 20170518-基本信息-sku-end -->

        <!-- 20170518-基本信息-弹框赠品选择-start -->
        <div id="skuGiftOperationArea" class="pro-meta-sku">
          <div class="pro-meta-sku-content pro-meta-sku-choice">
            <dl class="clearfix">
              <dt>
                <label>选择</label>
              </dt>
              <dd>
                <div class="choice-product">
                  <ul>
                    <li class="clearfix">
                      <p class="p-img" onclick="location.href=&quot;/product/932946320.html#41272885&quot;">
                        <img class="j_giftImgBig" src="https://res.vmallres.com/pimages//product/GB1603020018501//428_428_1497323467743mp.jpg">
                      </p>
                      <p class="p-name" onclick="location.href=&quot;/product/932946320.html#41272885&quot;">
                        <span>天际通 1GB全球上网流量</span>
                      </p>
                      <p class="p-model">
                        <a href="javascript:;" class="j_checkbox checkbox-text checkbox-text-checked" data-gftid="932946320" data-skuid="41272885" data-giftname="天际通 1GB全球上网流量" data-purl="https://res.vmallres.com/pimages//product/GB1603020018501//428_428_1497323467743mp.jpg">
                          <span>天际通 1GB全球上网流量</span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 20170518-基本信息-弹框赠品选择-end -->

        <!-- 数量操作区 start-->
        <div class="pro-meta-sku pro-meta-sku-number">
          <div class="pro-meta-sku-content">
            <dl>
              <dt>
                <label style="position:relative; top:.2em;">数量</label>
              </dt>
              <dd>
                <p class="textbox">
                  <b class="minus minus-disabled" id="product-delNum" @click="dec"></b>
                  <input id="quantity" type="tel" value="1" maxlength="3" data-price="2299" data-inventory="4581" readonly="readonly">
                  <b id="product-addNum" class="add" @click="add"></b>
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 数量操作区 end-->
      </div>
      </section>
        <footer class="ecWap-box-footer">
          <section class="pro-property-action-area">
            <article class="pro-property-action">
              <a id="prdDetailAddCart" href="javascript:;" class="j_addCartbtn button-style-4-big" @click="buy">
                <span>加入购物车</span>
              </a>
              <a id="prdDetailBuyNow" href="javascript:;" class="j_buynowBtn button-style-1-big">
                <span>立即购买</span>
              </a>
            </article>
          </section>
        </footer>
      </article>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      goods: {
        type: Object
      }
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: false,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          loop: true,
          slidesPerview: 'auto',
          loopedSlides: 8,
          debugger: true
        },
        nowActive: false,
        session: {
          count: 0
        }
      }
    },
    methods: {
      change (event) {
        let ul = this.$refs.topUl
        let list = ul.getElementsByTagName('li')
        for (let i = 0; i < list.length; i++) {
          list[i].className = ''
        }
        event.currentTarget.className = 'current'
      },
      show () {
        let mask = document.getElementById('ecWap-box-bg-skuMainBox')
        let list = document.getElementById('ecWap-box-skuMainBox')
        mask.style.display = 'block'
        list.style.display = 'block'
      },
      close () {
        let mask = document.getElementById('ecWap-box-bg-skuMainBox')
        let list = document.getElementById('ecWap-box-skuMainBox')
        mask.style.display = 'none'
        list.style.display = 'none'
      },
      select (event) {
        let title = null
        if (event.currentTarget.className === 'color') {
          let list = document.getElementsByClassName('color')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'color'
          }
          title = document.getElementById('color')
        } else if (event.currentTarget.className === 'style') {
          let list = document.getElementsByClassName('style')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'style'
          }
          title = document.getElementById('style')
        } else if (event.currentTarget.className === 'capacity') {
          let list = document.getElementsByClassName('capacity')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'capacity'
          }
          title = document.getElementById('capacity')
        } else if (event.currentTarget.className === 'package') {
          let list = document.getElementsByClassName('package')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'package'
          }
          title = document.getElementById('package')
        } else if (event.currentTarget.className === 'warranty') {
          let list = document.getElementsByClassName('warranty')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'warranty'
          }
        } else if (event.currentTarget.className === 'screen') {
          let list = document.getElementsByClassName('screen')
          for (let i = 0; i < list.length; i++) {
            list[i].className = 'screen'
          }
        }
        event.currentTarget.className += ' selected'
        title.innerHTML = event.currentTarget.innerHTML
      },
      add () {
        let count = document.getElementById('quantity')
        let dec = document.getElementById('product-delNum')
        let tNum = document.getElementsByClassName('j_skuItemAmt')
        count.value++
        dec.className = 'minus'
        for (let i = 0; i < tNum.length; i++) {
          tNum[i].innerHTML++
        }
      },
      dec () {
        let count = document.getElementById('quantity')
        let dec = document.getElementById('product-delNum')
        if (dec.className === 'minus minus-disabled') {
          return
        }
        count.value--
        if (count.value === '1') {
          dec.className += ' minus-disabled'
        }
      },
      buy () {
        let goods = []
        let obj = {}
        let mainImg = document.getElementsByClassName('j_skuImgShow')[0]
        let message = document.getElementsByClassName('j_pro-name')[0].innerText
        let list = document.getElementsByClassName('pro-meta-selected')[0]
        let count = list.getElementsByTagName('em')[0]
        let price = document.getElementsByClassName('j_pro-price')[0]
        let server = document.getElementsByClassName('p-guarantee')[0]
        let bottomImg = document.getElementsByClassName('j_giftImgBig')[0]
        let bottomDes = document.getElementsByClassName('p-model')[0]
        let style = document.getElementById('style')
        let capacity = document.getElementById('capacity')
        let color = document.getElementById('color')

        message = '荣耀9 ' + style.innerText + ' ' + capacity.innerText + '（' + color.innerText + '）'

        this.session.count++
        obj.mainImg = mainImg.src
        obj.msg = message
        obj.count = count.innerText
        obj.price = price.innerText
        obj.server = server.innerHTML
        obj.bottomImg = bottomImg.src
        obj.bottomDes = bottomDes.innerText
        goods.push(obj)
        this.$emit('send', goods)
        this.session.$saveData()
      }
    },
    created () {
      this.session = this.$sessionBind(this.session)
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/swiper-3.4.2.min.css"

  .clearfix:after {
    clear: both;
  }
  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }

  div {
    .prod-breadcrumb {
      background-color: #fff;
      position: fixed;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      z-index: 100;
      border-bottom: 0;
      header {
        #btn-back {
          width: 1.2em;
          height: 1.2em;
          margin: .6em 0 .6em .8em;
          background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon11_1.png) scroll no-repeat 50% 50%;
          background-size: .8em .8em;
          display: block;
          float: left;
        }
      }
      .productNav {
        position: absolute;
        left: 3em;
        right: 3em;
        .productNavTab {
          .clearfix {
            display: box;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            box-sizing: border-box;
            list-style: none;
              li {
                height: 2.4em;
                text-align: center;
                overflow: hidden;
                display: block;
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                &.current a {
                  border-bottom: 2px solid #ca141d;
                  color: #ca141d;
                }
                a {
                  font-size: .75em;
                  width: 2.667em;
                  line-height: 3.2em;
                  display: block;
                  margin: 0 auto;
                  position: relative;
                  top: -2px;
                  span {
                    font-weight: bold;
                    position: relative;
                    top: 2px;
                  }
                }
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
              .icon-header-menu {
                display: block;
                position: relative;
                padding: .6em;
                margin: 0 .15em;
                background-size: 1.2em 1.2em;
                background-position: center;
                background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_header_nav.png) scroll no-repeat;
              }
            }
          }
        }
      }
      .header-menu {
        width: 4em;
        height: 0;
        position: absolute;
        top: 2.5em;
        right: .5em;
        border-radius: .1em;
        background-color: #333;
        display: block;
        overflow: hidden;
        transition: height 0.5s;
        &.active {
             height: 111px;
           }
        nav {
          ul {
            list-style: none;
            li {
              border-bottom: 1px solid rgba(255,255,255,0.3);
              a {
                display: block;
                padding: 0 .5em 0 1.4em;
                height: 1.5em;
                position: relative;
                i.icon-menu-search {
                  position: absolute;
                  left: .35em;
                  top: 50%;
                  margin-top: -0.45em;
                  &.icon-menu-search {
                    width: .9em;
                    height: .9em;
                    display: inline-block;
                    background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_search_white.png) no-repeat center;
                    background-size: .9em .9em;
                  }
                  &.icon-menu-category {
                    width: .9em;
                    height: .9em;
                    display: inline-block;
                    background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_category_white.png) no-repeat center;
                    background-size: .9em .9em;
                  }
                  &.icon-menu-share {
                    width: .9em;
                    height: .9em;
                    display: inline-block;
                    background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_header_share.png) no-repeat center;
                    background-size: .9em .9em;
                  }
                  span {
                    font-size: .6em;
                    line-height: 2.5em;
                    color: #fff;
                    padding-left: .41667em;
                  }
                }
              }
            }
          }
        }
      }
    }
    .hr-48 {
      height: 2.4em;
    }
    #basicInfo {
      .pro-gallery {
        padding: 1.5em 0;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        .swiper-container {
          height: 100%;
          overflow: hidden;
          margin: 0 1.75em;
          .swiper-wrapper {
            .swiper-slide {
              text-align: center;
              position: relative;
              -webkit-flex-shrink: 0;
              -ms-flex: 0 0 auto;
              flex-shrink: 0;
              width: 100%;
              height: 100%;
              img {
                width: auto;
                height: 14.5em;
              }
            }
          }
        }
      }
      .pro-property {
        position: relative;
        .pro-meta-area {
          background-color: #fff;
          margin-bottom: .3em;
          .pro-meta-area-cont {
            padding: .5em .8em;
            .p-promotion-box {
              position: relative;
              max-height: 1.35em;
              overflow: hidden;
              -webkit-tap-highlight-color: rgba(0,0,0,0);
              padding-right: .7em;
              .p-promotion {
                font-size: .55em;
                color: #888;
                line-height: 1.2em;
                word-break: break-all;
                .red {
                  color: #ca151e;
                }
              }
            }
          }
        }
        .pro-meta-area {
          background-color: #fff;
          margin-bottom: .3em;
          .pro-meta-area-cont {
            padding: .5em .8em;
            .pro-meta-area-name {
              position: relative;
              background-color: #fff;
              .pro-coupons {
                width: 2em;
                height: .9em;
                margin: .1em 0 0 .55em;
                float: right;
                display: block;
                background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_pro_coupons.png) no-repeat center;
                background-size: 2em .9em;
              }
              .p-name {
                span {
                  font-size: .75em;
                  line-height: 1.3em;
                  font-weight: bold;
                  max-height: 2.6em;
                  word-break: break-all;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  position: relative;
                  top: .1em;
                }
              }
            }
            .hide {
              display: none;
              .p-point {
                float: right;
              }
            }
            .p-price {
              line-height: .75em;
              color: #e01d20;
              padding: .4em 0 .3em;
              .pro-bundler {
                text-indent: -999em;
                width: 1.7em;
                height: .8em;
                margin-right: .2em;
                background-position: center;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_bundler.png);
              }
              .pro-rushbuy {
                width: 2.2em;
                text-indent: -999em;
                height: .8em;
                display: inline-block;
                margin-right: .2em;
                background-position: center;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_rushbuy.png);
              }
              .pro-deposit {
                background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_deposit.png);
                text-indent: -999em;
                width: 1.7em;
                height: .8em;
                display: inline-block;
                margin-right: .2em;
                background-position: center;
                background-size: 100% 100%;
                background-repeat: no-repeat;
              }
              b {
                font-size: .9em;
                #pro-price {
                  small {
                    font-size: .723em;
                  }
                }
              }
              del {
                font-size: .55em;
                color: #888;
                #pro-prime-price {

                }
              }
            }
            .p-promotion-box {
              position: relative;
              max-height: 1.35em;
              overflow: hidden;
              -webkit-tap-highlight-color: rgba(0,0,0,0);
              padding-right: .7em;
              .p-promotion {
                font-size: .55em;
                color: #888;
                line-height: 1.2em;
                word-break: break-all;
                .red {
                  color: #ca151e;
                }
              }
              i {
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
                transform: rotate(90deg);
                -webkit-transform: rotate(90deg);
                width: .5em;
                height: .5em;
                background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                background-size: .5em .5em;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }
            }
          }
        }
        .pro-meta-area {
          background-color: #fff;
          margin-bottom: .3em;
          .pro-meta-selected {
            padding: .5em .8em;
            dl {
              position: relative;
              dt {
                width: 1.65em;
                float: left;
                label {
                  font-size: .55em;
                  line-height: 1.4;
                  color: #888;
                  display: block;
                }
              }
              dd {
                padding: 0 2em 0 1.65em;
                .btn-next {
                  font-size: .5em;
                  display: block;
                  position: absolute;
                  top: 50%;
                  right: 0;
                  margin-top: -.3em;
                  padding-right: 1.2em;
                  line-height: 1.2em;
                  color: #888;
                  vertical-align: middle;
                  i {
                    font-size: 2em;
                    margin-top: -.3em;
                    &.icon-more-right {
                      display: block;
                      position: absolute;
                      right: 0;
                      top: 50%;
                      width: .5em;
                      height: .5em;
                      background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                      background-size: .5em .5em;
                      -webkit-tap-highlight-color: rgba(0,0,0,0);
                    }
                  }
                }
                .p-selected {
                  font-size: .6em;
                  line-height: 1.33;
                  max-height: 2.5em;
                  margin-bottom: .25em;
                  word-break: break-all;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  position: relative;
                  .j_currentSkuInfo {
                    display: inline;
                  }
                  em {
                    color: #888;
                    padding-left: .833em;
                  }
                }
                .j_pguarantee {
                  .p-guarantee {
                    color: #888;
                    font-size: .6em;
                    line-height: 1.6;
                  }
                }
              }
            }
          }
        }
        .pro-meta-area {
          background-color: #fff;
          margin-bottom: .3em;
          .pro-meta-match {
            padding: 0 .8em;
            .t-product {
              width: 100%;
              tbody {
                .t-product-2 {
                  th {
                    width: 1.65em;
                    color: #888;
                    label {
                      font-size: .55em;
                      min-width: 3.1em;
                      text-align: left;
                      display: block;
                    }
                  }
                  td {
                    position: relative;
                    display: block;
                    overflow: hidden;
                    .match-product {
                      width: 100%;
                      padding: .35em 0;
                      ul {
                        padding-right: 2em;
                        max-height: 3.6em;
                        overflow: hidden;
                        list-style: none;
                        li {
                          height: 1.5em;
                          width: 1.5em;
                          background-color: #fff;
                          margin: .15em .5em .15em 0;
                          border: 1px solid #eaeaea;
                          border-radius: .1em;
                          float: left;
                          overflow: hidden;
                          box-sizing: border-box;
                          a {
                            img {
                              height: 100%;
                            }
                          }
                        }
                      }
                    }
                    .btn-next {
                      font-size: .5em;
                      display: block;
                      position: absolute;
                      top: 50%;
                      right: 0;
                      margin-top: -.3em;
                      padding-right: 1.2em;
                      line-height: 1.2em;
                      color: #888;
                      vertical-align: middle;
                      .icon-more-right {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        font-size: 2em;
                        margin-top: -.3em;
                        width: .5em;
                        height: .5em;
                        background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                        background-size: .5em .5em;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                      }
                    }
                  }
                }
              }
            }
          }
          .pro-meta-area-cont {
            border-top: 1px solid #eaeaea;
            padding: .5em .8em;
            .related-address-area {
              padding-right: 1.5em;
              padding-left: 1.65em;
              position: relative;
              .icon-send-address {
                background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/misc/icon_address.png) no-repeat;
                display: inline-block;
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -0.45em;
                font-style: normal;
                width: .9em;
                height: .9em;
                background-position: 0 0;
                background-size: 100% 100%;
              }
              .related-address-add {
                color: #333;
                font-size: .65em;
                line-height: 1.6;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                position: relative;
                span {
                  max-width: 19.5em;
                }
              }
              .arrived-tips {
                color: #888;
                font-size: .55em;
                line-height: 1.5;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              span {
                .icon-more-right {
                  display: block;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  margin-top: -.25em;
                  width: .5em;
                  height: .5em;
                  background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                  background-size: .5em .5em;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                }
              }
            }
          }
          .pro-meta-service {
            border-top: 1px solid #eaeaea;
            padding: .5em .8em;
            dl {
              position: relative;
              dt {
                width: 1.65em;
                float: left;
                label {
                  font-size: .55em;
                  line-height: 1.4;
                  color: #888;
                  display: block;
                }
              }
              dd {
                padding: 0 2em 0 1.65em;
                .icon-more-right {
                  display: block;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  margin-top: -.25em;
                  width: .5em;
                  height: .5em;
                  background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                  background-size: .5em .5em;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                }
                .p-service {
                  font-size: .4em;
                  height: 2em;
                  overflow: hidden;
                  span {
                    max-width: 100%;
                    color: #ca141d;
                    height: 1.875em;
                    line-height: 1.775em;
                    border: 1px solid rgba(255,92,92,.3);
                    border-radius: .5em;
                    padding: 0 .625em;
                    margin: 0 1.15em .125em 0;
                    display: block;
                    float: left;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    box-sizing: border-box;
                  }
                }
              }
            }
          }
          .pro-meta-area-discount {
            max-height: 1.5em;
            background-color: #f6f6f6;
            border-top: 1px solid #eaeaea;
            padding: 0 .8em;
            overflow: hidden;
            .p-discount {
              line-height: 1em;
              padding-right: .6em;
              overflow: hidden;
              position: relative;
              span {
                font-size: .55em;
                color: #888;
                display: inline-block;
                padding: 0 1.82em 0 1.182em;
                height: 2.728em;
                line-height: 3em;
                background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_discount.png) no-repeat left center;
                background-size: .91em .91em;
              }
              .icon-more-right {
                display: block;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -.25em;
                width: .5em;
                height: .5em;
                background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                background-size: .5em .5em;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }
            }
          }
        }
        .pro-meta-area-review {
          padding: 0 .8em;
          .h {
            height: 1.75em;
            line-height: 1.55em;
            overflow: hidden;
            border-bottom: 1px solid #eaeaea;
            box-sizing: border-box;
            h3 {
              padding: 0;
              font-size: 1em;
              span {
                font-size: .65em;
              }
              a {
                color: #888;
                font-size: .5em;
                height: 3.5em;
                line-height: 3.7em;
                padding-right: 1.2em;
                display: block;
                float: right;
                position: relative;
                .icon-more-right {
                  display: block;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  margin-top: -.25em;
                  font-size: 2em;
                  width: .5em;
                  height: .5em;
                  background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                  background-size: .5em .5em;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                }
              }
            }
          }
          .review-area {
            .review-keyword {
              a {
                max-width: 93%;
                height: 1.1em;
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: -webkit-inline-flex;
                display: inline-flex;
                border-radius: .55em;
                background-color: #f6f6f6;
                padding: 0 .3em 0 .5em;
                margin: .2em .45em .2em 0;
                overflow: hidden;
                pointer-events: none;
                cursor: default;
                span {
                  font-size: .55em;
                  line-height: 2.1em;
                  display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  em {
                    float: right;
                  }
                }
              }
            }
            .review-content {
              padding: .55em 0 0;
              background-color: #fff;
              ul {
                list-style: none;
                li {
                  border-bottom: 1px solid #eee;
                  padding: .75em 0 .25em;
                  padding-top: 0;
                  .info {
                    margin-bottom: .4em;
                    vertical-align: middle;
                    .fl {
                      width: 75%;
                      float: left;
                      i {
                        width: 1.5em;
                        height: 1.5em;
                        margin-right: .55em;
                        display: block;
                        float: left;
                        img {
                          border: 0;
                          max-width: 100%;
                          height: auto;
                          vertical-align: top;
                        }
                      }
                      span {
                        height: 1.5em;
                        display: box;
                        display: -webkit-box;
                        display: -moz-box;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        b {
                          width: 100%;
                          em {
                            font-size: .6em;
                            line-height: 1.2;
                            display: block;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                          }
                          time {
                            font-size: .55em;
                            color: #888;
                            display: block;
                            margin-top: .3em;
                          }
                        }
                      }
                    }
                    .fr {
                      line-height: 1.2em;
                      float: right;
                      .star-area {
                        display: inline-block;
                        height: .5em;
                        background-size: .7em 1em;
                        width: 3.3em;
                        overflow: hidden;
                        position: relative;
                        background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/star/star.png) repeat-x;
                        s {
                          display: block;
                          position: absolute;
                          top: 0;
                          left: 0;
                          height: .5em;
                          background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/star/star.png) repeat-x;
                          background-size: .7em 1em;
                          background-position: 0 bottom;
                        }
                      }
                    }
                  }
                  .word {
                    font-size: .6em;
                    line-height: 1.4;
                    padding-bottom: .667em;
                  }
                  .reply {
                    line-height: 1.45;
                    background-color: #f5f5f5;
                    padding: .35em .4em;
                    margin-bottom: .3em;
                    .reply-cont {
                      font-size: .6em;
                      span {
                        color: #ca151e;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .related-area {
          padding: 0;
          margin-bottom: 0;
          background-color: #fff;
          .h {
            height: 1.75em;
            line-height: 1.55em;
            overflow: hidden;
            border-bottom: 1px solid #eaeaea;
            box-sizing: border-box;
            h3 {
              font-size: 1em;
              padding: 0 .8em;
              span {
                font-size: .65em;
              }
            }
          }
          .related-area-content {
            ul {
              position: relative;
              padding: .58em 0;
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
                  width: 4.4em;
                  display: block;
                  margin: 0 auto;
                  .p-img {
                    width: 2.75em;
                    height: 2.75em;
                    margin: 0 auto;
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
                    margin-top: .25em;
                    height: 1.3em;
                    span {
                      font-size: .55em;
                      line-height: 1.2;
                      color: #333;
                      width: 100%;
                      display: block;
                      word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                  }
                }
              }
            }
          }
          .pro-meta-area-replace {
            max-height: 1.5em;
            background-color: #f6f6f6;
            border-top: 1px solid #eaeaea;
            padding: 0 .8em;
            overflow: hidden;
            a {
              .p-replace {
                line-height: 1em;
                padding-right: .6em;
                overflow: hidden;
                position: relative;
                span {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  display: block;
                  font-size: .55em;
                  color: #888;
                  padding: 0 1.82em 0 1.182em;
                  height: 2.728em;
                  line-height: 3em;
                  background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_replace.png) no-repeat left center;
                  background-size: .91em .91em;
                }
                .icon-more-right {
                  display: block;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  margin-top: -.25em;
                  width: .5em;
                  height: .5em;
                  background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
                  background-size: .5em .5em;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                }
              }
            }
          }
          .pro-meta-area-crumbs {
            padding: 0 .8em;
            height: 1.2em;
            border-top: 1px solid #eaeaea;
            .p-crumbs {
              line-height: 2.3em;
              font-size: .55em;
              color: #888;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              span {
                color: #888;
              }
            }
          }
        }
      }
      .loading-action {
        margin-bottom: 50px;
        text-align: center;
        padding: .75em 0;
        span {
          font-size: .55em;
          color: #888;
          display: block;
          .icon-more-top {
            font-size: 1rem;
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            display: inline-block;
            width: .5em;
            height: .5em;
            background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_arrow_more.png) no-repeat center;
            background-size: .5em .5em;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }
        }
      }
      .tab {
        display: none;
      }
    }
    .pro-property-action-area-big {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 720px;
      background-color: #fff;
      z-index: 100;
      border-top: 1px solid #eaeaea;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -ms-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: box;
      .pro-property-action-area-btn {
        max-height: 2.25em;
        height: 100%;
        text-align: center;
        -webkit-box-flex: 0;
        -moz-flex-shrink: 0;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        .pro-property-home {
          width: 2.75em;
          padding: .2em 0;
          float: left;
          border-right: 1px solid #eaeaea;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 1.2em;
            display: block;
            margin: 0 auto;
            position: relative;
            background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_shoppingCart.png) no-repeat center;
            background-size: 1.2em 1.2em;
            background-position: 50% 50%;
          }
          p {
            font-size: .5em;
            padding-top: .4em;
            color: #888;
          }
        }
        .pro-property-shoppingCart {
          width: 2.75em;
          padding: .2em 0;
          float: left;
          border-right: 1px solid #eaeaea;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 1.2em;
            display: block;
            margin: 0 auto;
            position: relative;
            background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_shoppingCart.png) no-repeat center;
            background-size: 1.2em 1.2em;
            background-position: 50% 50%;
            em {
              display: none;
              width: 100%;
              height: 100%;
              position: absolute;
              bottom: .7em;
              right: -18%;
              margin: 0 auto;
              &.show {
                display: block;
              }
              i {
                min-width: 1.3em;
                height: 1.3em;
                line-height: 1.35em;
                border-radius: 2em;
                box-shadow: 0 0 0 3px #fff;
                display: inline-block;
                font-size: 1.35em;
                font-style: normal;
                color: #fff;
                text-align: center;
                background-color: #ca141d;
                padding: .05em;
                margin: 0 auto;
                -webkit-transform: scale(0.33);
                transform: scale(0.33);
              }
            }
          }
          p {
            font-size: .5em;
            padding-top: .4em;
            color: #888;
          }
        }
        .pro-property-easyBuy {
          width: 2.75em;
          padding: .2em 0;
          float: left;
          border-right: 1px solid #eaeaea;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 1.2em;
            display: block;
            margin: 0 auto;
            position: relative;
            background: transparent url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_shoppingCart.png) no-repeat center;
            background-size: 1.2em 1.2em;
            background-position: 50% 50%;
          }
          p {
            font-size: .5em;
            padding-top: .4em;
            color: #888;
          }
        }
        .hide {
          display: none;
        }
      }
      .pro-property-action-area-right {
        position: relative;
        -webkit-box-flex: 1;
        -moz-flex-shrink: 1;
        -webkit-flex-shrink: 1;
        flex-shrink: 1;
        .pro-property-action-area {
          width: 100%;
          .pro-property-action {
            position: relative;
            z-index: 100;
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 720px;
            margin: 0 auto;
            background-color: #fff;
            display: box;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            box-sizing: border-box;
            a {
              display: block;
              border: 0;
              border-radius: 0;
              height: 2.25em;
              line-height: 2em;
              box-sizing: border-box;
              -webkit-box-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              font-size: 1em;
              span {
                font-size: .65em;
              }
            }
            .button-style-4-big {
              background-color: #f17f00;
              box-shadow: 0 0 0 0.7em #f17f00 inset;
              color: #fff;
              padding: 0 .7em;
              text-align: center;
              min-width: 2.05em;
            }
            .button-style-1-big {
              padding: 0 .7em;
              text-align: center;
              min-width: 2.05em;
            }
          }
        }
      }
    }
    .ecWap-mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      background-color: rgba(0,0,0,0.7);
      visibility: visible;
      min-height: 100%;
    }
    .ecWap-box-sku {
      background-color: #fff;
      border-radius: 0;
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60%;
      .ecWap-box-header {
        position: absolute;
        height: 0;
        width: 100%;
        padding: .6em 0;
        border-bottom: 1px solid #f0f0f0;
        top: 0;
        text-align: center;
        .ecWap-box-title {
          font-size: .75em;
          color: #333;
          position: relative;
          font-weight: bold;
          .box-close {
            position: absolute;
            top: .35em;
            right: .8em;
            margin-top: 0;
            z-index: 11;
            display: block;
            background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_ecWap_close.png) no-repeat;
            width: 1.2em;
            height: 1.2em;
            text-indent: -9999px;
            background-size: .9em .9em;
            background-position: center;

          }
        }
      }
      .ecWap-box-content {
        position: absolute;
        top: 0;
        padding: 0;
        overflow: visible;
        max-height: none;
        bottom: 2.25em;
        left: 0;
        right: 0;
        .sku-product {
          position: relative;
          height: 100%;
          .sku-product-top {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-bottom: 1px solid #eaeaea;
            background-color: #fff;
            z-index: 10;
            .sku-product-summary {
              margin: 0 .8em;
              .summary-img {
                width: 4.25em;
                height: 4.25em;
                float: left;
                border-radius: .1em;
                position: relative;
                top: -1em;
                margin-right: .5em;
                border: 1px solid #eaeaea;
                background-color: #fff;
                img {
                  border: 0;
                  max-width: 100%;
                  height: auto;
                  vertical-align: top;
                }
              }
              .summary-cont {
                padding: .65em 0 .65em 4.75em;
                .summary-price {
                  line-height: .75em;
                  .pro-bundler {
                    background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_bundler.png);
                    text-indent: -999em;
                    width: 1.7em;
                    height: .8em;
                    margin-right: .2em;
                    background-position: center;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                  }
                  .pro-rushbuy {
                    width: 2.2em;
                    background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_rushbuy.png);
                    text-indent: -999em;
                    height: .8em;
                    margin-right: .2em;
                    background-position: center;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                  }
                  .pro-deposit {
                    background-image: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon_deposit.png);
                    text-indent: -999em;
                    width: 1.7em;
                    height: .8em;
                    margin-right: .2em;
                    background-position: center;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                  }
                  b {
                    font-size: .9em;
                    color: #ca141d;
                    font-weight: normal;
                  }
                  del {
                    font-size: .55em;
                    color: #888;
                    text-decoration: line-through;
                  }
                }
                .summary-choice {
                  font-size: .55em;
                  color: #333;
                  line-height: 1.5;
                  padding-top: .2em;
                  em {
                    font-size: .91em;
                    color: #888;
                    padding-left: 1em;
                  }
                }
              }
            }
            .sku-product-gift {
              margin: 0 .8em;
              border-top: 1px solid #eaeaea;
              .t-product {
                width: 100%;
                tbody {
                  tr {
                    th {
                      width: 1.65em;
                      text-align: left;
                      label {
                        font-size: .55em;
                        color: #888;
                        position: relative;
                        top: -.2em;
                      }
                    }
                    td {
                      ul {
                        margin: .35em 0;
                        li {
                          float: left;
                          width: 1.5em;
                          height: 1.5em;
                          margin: .15em .5em .15em 0;
                          border: 1px solid #eaeaea;
                          border-radius: .1em;
                          overflow: hidden;
                          box-sizing: border-box;
                          a {
                            img {
                              height: 100%;
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
        .sku-product-main {
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          overflow: auto;
          .pro-meta-sku {
            background-color: #fff;
            .pro-meta-sku-content {
              padding: 0 .8em;
              dl {
                padding: .3em 0;
                border-bottom: 1px solid #eaeaea;
                dt {
                  width: 2em;
                  float: left;
                  padding-top: .15em;
                  label{
                    font-size: .55em;
                    line-height: 1.5;
                    color: #888;
                  }
                }
                dd {
                  padding-left: 2em;
                  a {
                    display: inline-block;
                    text-align: left;
                    max-width: 100%;
                    font-size: .6em;
                    height: 1.95em;
                    line-height: 1.95em;
                    padding: 0 1em;
                    border-radius: 1em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: text-bottom;
                    min-width: 1em;
                    border: 1px solid #b2b2b2;
                    margin: .2em .5em .2em 0;
                    background-color: #fff;
                    color: #333;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    box-sizing: border-box;
                    &.selected {
                      border-color: #ca151e;
                      color: #ca151e;
                    }
                    span {
                      display: inline;
                      font-size: 1em;
                    }
                  }
                }
                .j_extWarrantyDetail {
                  padding: .2em 0 .2em 2em;
                  a {
                    font-size: .5em;
                    color: #888;
                    float: right;
                    position: relative;
                    top: .15em;
                  }
                }
              }
            }
          }
          .pro-suit-1 {
            padding: 0 .8em;
            background-color: #f6f6f6;
            position: relative;
            top: -1px;
          }
          .pro-meta-sku {
            .pro-meta-sku-choice {
              dl {
                padding: 0;
                border-bottom: 0;
                dt {
                  width: 100%;
                  float: none;
                  padding-top: .4em;
                  laber {
                    line-height: 1.2;
                    display: block;
                  }
                }
                dd {
                  padding-left: 0;
                  .choice-product {
                    ul {
                      li {
                        border-bottom: 1px solid #eee;
                        padding: .5em 0;
                        position: relative;
                        .p-img {
                          width: 2.75em;
                          height: 2.75em;
                          float: left;
                        }
                        .p-name {
                          overflow: hidden;
                          padding-left: .8em;
                          span {
                            font-size: .65em;
                            color: #333;
                            line-height: 1.23em;
                            font-weight: bold;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                          }
                        }
                        .p-model {
                          min-height: 1.5em;
                          overflow: hidden;
                          padding-left: .8em;
                          padding-bottom: 1px;
                          a {
                            margin: .4em .5em 0 0;
                            text-align: left;
                            max-width: 100%;
                            font-size: .6em;
                            height: 1.95em;
                            line-height: 1.95em;
                            padding: 0 1em;
                            border-radius: 1em;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            vertical-align: text-bottom;
                            min-width: 1em;
                            border: 1px solid #b2b2b2;
                            display: inline-block;
                            background-color: #fff;
                            color: #333;
                            -moz-box-sizing: border-box;
                            -webkit-box-sizing: border-box;
                            -ms-box-sizing: border-box;
                            box-sizing: border-box;
                            float: left;
                            span {
                              color: #ca151e;
                              display: inline;
                              font-size: 1em;
                            }
                          }
                          a.checkbox-text-checked {
                            border-color: #ca151e;
                            color: #ca151e;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .pro-meta-sku-number {
            .pro-meta-sku-content {
              margin: 0 .8em 1em;
              padding: 0;
              dl {
                width: 100%;
                dt {
                  display: table-cell;
                  white-space: nowrap;
                  float: left;
                  padding-top: .25em;
                  label {
                    line-height: 2.5;
                    top: .15em;
                  }
                }
                dd {
                  .textbox {
                    width: auto;
                    height: auto;
                    line-height: 1.55em;
                    text-align: center;
                    position: relative;
                    top: 0;
                    border-radius: 1.5em;
                    border: 1px solid #eaeaea;
                    min-width: 1em;
                    display: inline-block;
                    margin: .2em .15em 0 0;
                    background-color: #fff;
                    color: #333;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    box-sizing: border-box;
                    b.minus-disabled {
                      opacity: .3;
                      cursor: default;
                      background-color: #bbb;
                    }
                    b.minus {
                      background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon53.png) no-repeat;
                      background-size: 200% 100%;
                      height: 2.9em;
                      width: 3.2em;
                      display: block;
                      float: left;
                      font-size: .5em;
                      -webkit-tap-highlight-color: rgba(0,0,0,0);
                      background-position: left;
                      margin-right: 2.6em;
                      border-radius: 1.5em 0 0 1.5em;
                    }
                    input {
                      border: 0 none;
                      width: 4em;
                      height: 100%;
                      line-height: 100%;
                      font-size: .65em;
                      color: #333;
                      text-align: center;
                      ime-mode: disabled;
                      -webkit-appearance: none;
                      -moz-appearance: none;
                      appearance: none;
                      border-right: 1px solid #eaeaea;
                      border-left: 1px solid #eaeaea;
                      vertical-align: middle;
                      box-sizing: border-box;
                      position: absolute;
                      top: 0;
                      left: 50%;
                      padding: 0;
                      margin-left: -2em;
                      border-radius: 0;
                    }
                    b.add {
                      background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon53.png) no-repeat;
                      background-size: 200% 100%;
                      height: 2.9em;
                      width: 3.2em;
                      display: block;
                      float: left;
                      font-size: .5em;
                      cursor: pointer;
                      border-radius: 0 1.5em 1.5em 0;
                      -webkit-tap-highlight-color: rgba(0,0,0,0);
                      background-position: right;
                      margin-left: 2.6em;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .ecWap-box-footer {
        height: 2.25em;
        line-height: 2.25em;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        z-index: 10;
        .pro-property-action-area {
          width: 100%;
          .pro-property-action {
            padding: 0;
            width: 100%;
            max-width: none;
            display: box;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            box-sizing: border-box;
            position: relative;
            z-index: 100;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            background-color: #fff;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            a {
              margin: 0;
              border: 0;
              border-radius: 0;
              height: 2.25em;
              line-height: 2em;
              box-sizing: border-box;
              box-flex: 1;
              display: block;
              -webkit-box-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              font-size: 1em;
              &.button-style-4-big {
                background-color: #f17f00;
                box-shadow: 0 0 0 0.7em #f17f00 inset;
                color: #fff;
                padding: 0 .7em;
                text-align: center;
                min-width: 2.05em;
                span {
                  font-size: .65em;
              }
              &.button-style-1-big {
                background-color: #ca151e;
                box-shadow: 0 0 0 0.7em #ca151e inset;
                color: #fff;
                padding: 0 .7em;
                text-align: center;
                min-width: 2.05em;
                span {
                  font-size: .65em;
                }
              }
              }
              span {
                font-size: .65em;
              }
            }
          }
        }
      }
    }
  }
</style>
