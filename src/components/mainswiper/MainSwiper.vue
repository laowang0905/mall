<template>
  <div class="swiper-container">
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import Swiper from 'components/mainswiper/swiper/Swiper'
import SwiperItem from 'components/mainswiper/swiperitem/SwiperItem'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style lang='less' scoped>
</style>
