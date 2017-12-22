<template>
  <div>
    <footer>
      <ul class="clearfix" ref="allkinds">
        <!--  需要的红色状态追加className: active   -->
        <li id="index" class="active" @click="change($event)">
          <router-link to="/">
            <a href="/"><span>首页</span></a>
          </router-link>
        </li>
        <li id="category" @click="change($event)">
          <router-link to="/kind">
            <a href="/kind"><span>分类</span></a>
          </router-link>
        </li>
        <li id="shoppingCart" @click="change($event)">
          <router-link to="/shopcart">
          <a href="/shoppingCart"><span>购物车</span><em ref="bubble"><i id="cartNum">{{count}}</i></em></a>
          </router-link>
        </li>
        <li id="personal" @click="change($event)">
          <router-link to="/mine">
          <a href="/personal"><span>我的</span></a>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    props: ['count'],
    data () {
      return {}
    },
    methods: {
      change (event) {
        let ul = this.$refs.allkinds
        let list = ul.getElementsByTagName('li')
        for (let i = 0; i < list.length; i++) {
          list[i].className = ''
        }
        event.currentTarget.className = 'active'
      }
    },
    mounted () {
      let zero = document.getElementById('breadcrumb')
      if (zero) {
        let ul = this.$refs.allkinds
        let list = ul.getElementsByTagName('li')
        for (let i = 0; i < list.length; i++) {
          list[i].className = ''
        }
        list[2].className = 'active'
      }
      if (this.count) {
        this.$refs.bubble.className = 'show'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  div {
    position: relative;
    footer {
      position: fixed;
      z-index: 20;
      ul {
        position: fixed;
        bottom: 0;
        list-style: none;
        display: block;
        list-style-type: disc;
        background-color: #fff;
        width: 100%;
        &:before {
          content: " ";
          display: table;
        }
        &:after {
          content: " ";
          display: table;
          clear: both;
        }
        li {
          float: left;
          width: 25%;
          display: block;
          text-align: center;
          height: 2.4em;
          background: url(https://res8.vmallres.com/nwap/20170926/images/echannelWap/icon/icon55.png) no-repeat center top;
          background-size: 400% 4.8em;
          position: relative;
          &:nth-child(1) {
            background-position: 0 0;
            &.active:nth-child(1) {
              background-position: 0 -2.4em;
            }
          }
          &:nth-child(2) {
            position: relative;
            top: 0;
            background-position: 33% 0;
            &.active:nth-child(2) {
              background-position: 33% -2.4em;
            }
          }
          &:nth-child(3) {
            background-position: 66% 0;
            &.active:nth-child(3) {
              background-position: 66% -2.4em;
            }
          }
          &:nth-child(4) {
            background-position: 99% 0;
            &.active:nth-child(4) {
              background-position: 99% -2.4em;
            }
          }
          a {
            width: 100%;
            height: 100%;
            display: block;
            span {
              display: block;
              text-indent: -9999em;
            }
            em {
              display: none;
              width: 100%;
              height: 100%;
              position: absolute;
              bottom: .8em;
              right: -13%;
              margin: 0 auto;
              &.show {
                display: block;
              }
              i {
                min-width: 1.3em;
                height: 1.3em;
                line-height: 1.35em;
                border-radius: 1.3em;
                border: .11em solid #fff;
                display: inline-block;
                font-size: 1.8em;
                font-style: normal;
                color: #fff;
                text-align: center;
                background-color: #ca141d;
                margin: 0 auto;
                -webkit-transform: scale(0.25);
                transform: scale(0.25);
              }
            }
          }
        }
      }
    }
  }
</style>
