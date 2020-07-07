<template>
  <div>
    <NavBar navText="首页"></NavBar>
    <MainSwiper :banners="banners"></MainSwiper>
    <Recommend :recommends="recommends"></Recommend>
  </div>
</template>
<script>
import NavBar from 'components/navbar/NavBar'
import MainSwiper from 'components/mainswiper/MainSwiper'
import Recommend from 'components/recommend/Recommend'
import { multidataApi } from 'network/homeApi.js'

export default {
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  methods: {
    async getMultidata () {
      const { data } = await multidataApi()
      console.log(data);
      this.recommends = data.recommend.list
      this.banners = data.banner.list
    }
  },
  created () {
    this.getMultidata()
  },
  components: {
    NavBar,
    MainSwiper,
    Recommend
  }
}
</script>
<style lang=''>
</style>
