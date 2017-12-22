<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" style="height: 218px">
      <!-- slides -->
      <swiper-slide v-for="item in scrollPics" :key="item.id">
        <a :href="item.adPrdUrl">
          <img :src="item.adPicUrl">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination" style="height: 24px"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      scrollPics: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
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
  @import "../../common/swiper-3.4.2.min.css"
  div{
    .swiper-pagination {
      bottom:0px;
    }
  }
</style>
