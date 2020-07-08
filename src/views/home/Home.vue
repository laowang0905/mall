<template>
  <div class="home-container">
    <NavBar navText="首页"></NavBar>
    <MainSwiper :banners="banners"></MainSwiper>
    <Recommend :recommends="recommends"></Recommend>
    <Feature></Feature>
    <TabControl :titles="[{pop:'流行'}, {new:'新款'}, {sell: '精选'}]" @changeTitle="changeTitle($event)"></TabControl>
    <GoodsList :goodsList="goods[type].list"></GoodsList>
  </div>
</template>
<script>
import NavBar from 'components/navbar/NavBar'
import MainSwiper from 'components/mainswiper/MainSwiper'
import Recommend from 'components/recommend/Recommend'
import Feature from 'components/feature/Feature'
import TabControl from 'components/tabControl/TabControl'
import GoodsList from 'components/goods/goodsList/GoodsList'

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
      type: 'pop'
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
      const { data } = await reqGoodsList(type, page)
      this.goods[type].page = page
      this.goods[type].list = this.goods[type].list.concat(data.list)
    },
    // 改变type
    changeTitle(type) {
      this.type = type
    }
  },
  created () {
    this.getMultidata()
    this.getGoodsList('new')
    this.getGoodsList('pop')
    this.getGoodsList('sell')
  },
  components: {
    NavBar,
    MainSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList
  }
}
</script>
<style lang='less' scoped>
.home-container {
  margin: 44px 0 49px 0;
}
</style>
