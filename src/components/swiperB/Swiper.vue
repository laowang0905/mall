<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt />
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 前进后退 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->
    <!-- 滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: "Detail",
  data () {
    return {
      swiper: null
    }
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    },
    swiperOptions: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    topImages () {
      this.$nextTick(() => {
        // console.log(this.swiperOptions);
        new Swiper('.swiper-container', this.swiperOptions)
      })
    }
  },
}
</script>
<style lang='less' scoped>
.swiper-container {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
