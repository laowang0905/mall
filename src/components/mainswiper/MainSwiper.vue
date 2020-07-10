<template>
  <div class="swiper-container">
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import Swiper from 'components/mainswiper/swiper/Swiper'
import SwiperItem from 'components/mainswiper/swiperitem/SwiperItem'

export default {
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    imgLoad () {
      if (!this.isLoad) {
        this.$emit('isLoaded')
        this.isLoad = true
      }
    }
  },
}
</script>
<style lang='less' scoped>
</style>
