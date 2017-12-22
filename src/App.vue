<template>
  <div id="app">
    <router-view :data="data.data" :guides="data.categoryInfoList" :goods="data.goods" @send="send" :msg="session.msg"></router-view>
    <foot :count="session.count"></foot>
  </div>
</template>

<script>
  import goods from './components/goods/Goods.vue'
  import shopcart from './components/main/Shopcart.vue'
  import foot from './components/foot/Foot.vue'

export default {
    name: 'app',
    data () {
      return {
        data: {},
        session: {
          msg: [],
          count: 0
        }
      }
    },
    methods: {
      send (val) {
        this.session.msg = this.session.msg.concat(val)
        this.session.count += this.session.msg.length
        this.session.$saveData()
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/data')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.data = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.session = this.$sessionBind(this.session)
    },
    components: {
      goods,
      shopcart,
      foot
    }
}
</script>

<style>
  .zero {
    height: 2.8em;
  }
  a {
    text-decoration: none;
    color: #333;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
</style>
