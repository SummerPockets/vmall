<template>
    <div>
      <div class="top">
        <header class="header index-header" id="index-header" style="background: rgba(255, 255, 255, 0); top: 0px;">
          <section class="search index-search">
              <input type="text" placeholder="HUAWEI P10 荣耀9" readonly="readonly">
          </section>
          <section class="shortcut">
            <ul>
              <li>
                <a id="message" href="/message/index" class="icon-message" title="消息" style="color:#f0ad4e;"></a>
              </li>
              <li class="hide">
                <a id="loginIcon" class="icon-login icon-login-white" title="登录" href="/account/applogin?url=/"><span>登录</span></a>
              </li>
            </ul>
          </section>
          <div class="shadow" style="opacity: 1; box-shadow: rgb(51, 51, 51) 0px -5px 0px -27px;"></div>
        </header>
      </div>
      <div class="middle">
        <section class="channel-floor-quicklink channel-floor-change">
          <ul class="clearfix">
            <li v-for="item in guides" :key="item.id">
              <a :href="item.gridURL">
                <i><img :src="item.gridPicUrl" onerror="javascript:this.src='https://res.vmallres.com/nwap/20170904/images/echannelWap/loading/mask.png'"></i>
                <p style="color:#333333">{{item.gridName}}</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
      props: {
        guides: {
          type: Array
        }
      },
      data () {
        return {}
      },
      methods: {
        scroll () {
          let navBar = document.getElementById('index-header')
          if (!navBar) {
            return
          }
          let message = document.getElementById('message')
          let loginIcon = document.getElementById('loginIcon')
          let login = loginIcon.getElementsByTagName('span')[0]
          let scroll = document.body.scrollTop
          if (scroll < 200) {
            login.style.color = '#fff'
            message.className = 'icon-message'
            navBar.style.backgroundColor = 'rgba(255, 255, 255, ' + scroll / 200 + ')'
          } else if (scroll >= 200) {
            login.style.color = '#000'
            message.className = 'icon-message icon-message-black'
            navBar.style.backgroundColor = 'rgba(255, 255, 255, 1)'
          }
        }
      },
      mounted () {
        window.addEventListener('scroll', this.scroll)
      }
    }
</script>

<style lang="stylus" scoped>
  div {
    .middle {
      padding-top: 10px;
      background-color: #fff;
      section {
        background-color: #fff;
        padding: 0 .25em;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        .clearfix {
          li {
            width: 20%;
            float: left;
            list-style: none;
            a {
              display: block;
              text-align: center;
              position: relative;
              padding: .6em .2em;
              i {
                display: inline-block;
                width: 1.5em;
                height: 1.5em;
                img {
                  border: 0;
                  max-width: 100%;
                  height: auto;
                  vertical-align: top;
                }
              }
              p {
                font-size: .55em;
                padding-top: .545em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
</style>
