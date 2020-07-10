<template>
  <div class="home-container">
    <NavBar navText="首页"></NavBar>
    <TabControl
      :titles="[{pop:'流行'}, {new:'新款'}, {sell: '精选'}]"
      @changeTitle="changeTitle($event)"
      ref="tabcontrol1"
      class="tabPos"
      v-show="isFixed"
      :tabControlSync="tabControlSync"
    ></TabControl>
    <Scroll
      class="home-wrapper"
      ref="scroll"
      :probe="3"
      :pullupload="true"
      @scroll="scrollPos"
      @pullingUp="loadMore"
    >
      <MainSwiper :banners="banners" @isLoaded="getOffsetTop"></MainSwiper>
      <Recommend :recommends="recommends"></Recommend>
      <Feature></Feature>
      <TabControl
        :titles="[{pop:'流行'}, {new:'新款'}, {sell: '精选'}]"
        @changeTitle="changeTitle($event)"
        ref="tabcontrol2"
        :tabControlSync="tabControlSync"
      ></TabControl>
      <GoodsList :goodsList="goods[type].list"></GoodsList>
    </Scroll>
    <transition name="fade">
      <BackTop @click.native="backClick" v-show="isShow"></BackTop>
    </transition>
  </div>
</template>
<script>
import NavBar from 'components/navbar/NavBar'
import MainSwiper from 'components/mainswiper/MainSwiper'
import Recommend from 'components/recommend/Recommend'
import Feature from 'components/feature/Feature'
import TabControl from 'components/tabControl/TabControl'
import GoodsList from 'components/goods/goodsList/GoodsList'
import Scroll from 'components/scroll/Scroll'
import BackTop from 'components/backTop/BackTop'

import { multidataApi, reqGoodsList } from 'network/homeApi.js'

export default {
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        pop: { page: 0, list: [] }
      },
      type: 'pop',
      // backTop显示与隐藏
      isShow: false,
      tabControlTop: 0,
      isFixed: false,
      tabControlSync: 0
    }
  },
  methods: {
    // 获取轮播数据
    async getMultidata () {
      const { data } = await multidataApi()
      this.recommends = data.recommend.list
      this.banners = data.banner.list
    },
    // 获取商品数据
    async getGoodsList (type) {
      const page = this.goods[type].page + 1
      this.goods[type].page = page
      const { data } = await reqGoodsList(type, page)
      this.goods[type].list = this.goods[type].list.concat(data.list)
    },
    // 改变type
    changeTitle (arr) {
      this.type = arr[0]
      this.tabControlSync = arr[1]
      // this.$refs.tabcontrol1.currentIndex = arr[1]
      // this.$refs.tabcontrol2.currentIndex = arr[1]
    },
    // 返回顶部事件
    backClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    // scroll事件处理函数
    scrollPos (pos) {
      this.isShow = Math.abs(pos.y) > this.$refs.scroll.$el.clientWidth
      if (-pos.y >= this.tabControlTop) {
        this.isFixed = true
      } else[
        this.isFixed = false
      ]
    },
    // 加载更多
    loadMore () {
      this.getGoodsList(this.type)
      this.$nextTick(() => {
        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.refresh()
      })

    },
    // refresh节流函数
    debounce (func, delay) {
      let timer = null
      return function (...args) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    // 获取tabcontrol的offsetTop
    getOffsetTop () {
      this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop
    }
  },
  components: {
    NavBar,
    MainSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created () {
    this.getMultidata()
    this.getGoodsList('new')
    this.getGoodsList('pop')
    this.getGoodsList('sell')
  },
  mounted () {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('imgLoaded', () => {
      refresh()
    })
  }
}
</script>
<style lang='less' scoped>
.home-container {
  margin: 44px 0 49px 0;
  padding-bottom: 96px;
  height: 100%;
  position: relative;
  .tabPos {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .home-wrapper {
    height: 100%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
