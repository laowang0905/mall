<template>
  <div class="detail-container">
    <NarBar navColor="#fff" class="text-color">
      <template v-slot:left>
        <div @click="backClick">
          <img src="./img/back.png" />
        </div>
      </template>
      <template v-slot:center>
        <ul class="detail-title">
          <li
            v-for="(item, index) in title"
            :key="index"
            :class="{active: currentIndex==index}"
            @click="itemClick(index)"
          >{{item}}</li>
        </ul>
      </template>
    </NarBar>
    <div class="detail-main wrapper" ref="detailwrapper">
      <div class="content">
        <SwiperB :topImages="topImages" :swiperOptions="swiperOptions" class="detail-swiper"></SwiperB>
        <DetailBase :goodsInfo="goodsInfo"></DetailBase>
        <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
        <DetailGoodsInfo :detailInfo="detailInfo" @imgLoadComplete="refreshScroll"></DetailGoodsInfo>
        <DetailParamInfo :paramInfo="paramInfo" ref="paramInfo"></DetailParamInfo>
        <DetailCommentInfo :commentInfo="commentInfo" ref="commentInfo"></DetailCommentInfo>
        <DetailRecommendInfo :recommendList="recommendList" ref="recommendList"></DetailRecommendInfo>
      </div>
    </div>
    <DetailBottomBar></DetailBottomBar>
  </div>
</template>
<script>
import NarBar from 'components/navbar/NavBar'
import SwiperB from 'components/swiperB/Swiper'
import DetailBase from './datailComponents/DetailBase'
import DetailShopInfo from './datailComponents/DetailShopInfo'
import DetailGoodsInfo from './datailComponents/DetailGoodsInfo'
import DetailParamInfo from './datailComponents/DetailParamInfo'
import DetailCommentInfo from './datailComponents/DetailCommentInfo'
import DetailRecommendInfo from './datailComponents/DetailRecommendInfo'
import DetailBottomBar from './datailComponents/DetailBottomBar'
import Scroll from 'better-scroll'

import { reqDetail, GOODSINFO, GOODSPARAMS, reqRecommend } from 'network/detailApi'
import { debounce } from 'common/utils'

export default {
  name: 'Detail',

  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
      topImages: [],
      // swiper-detail 配置
      swiperOptions: {
        // initalSlide: 0,
        // observer: true,
        // observeParents: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'swiper-detail',
          bulletActiveClass: 'swiper-detail-active'
        }
      },
      goodsInfo: {},
      shopInfo: {},
      // 商品详情
      detailInfo: {},
      // scroll对象
      scroll: {},
      paramInfo: {},
      // 评论信息
      commentInfo: {},
      // 推荐数据
      recommendList: [],
      refresh: null,
      rollPos: [0, 0, 0, 0]
    }
  },
  components: {
    NarBar,
    SwiperB,
    DetailBase,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.scroll.scrollTo(0, -this.rollPos[index], 300)
    },
    backClick () {
      this.$router.go(-1)
    },
    // 获取详情数据
    async getDetail () {
      const { result } = await reqDetail(this.$route.params.iid)
      // console.log(result);
      this.$nextTick(() => {
        this.scroll.refresh()
      })
      this.topImages = result.itemInfo.topImages
      this.goodsInfo = new GOODSINFO(result.itemInfo, result.columns, result.shopInfo.services)
      this.shopInfo = result.shopInfo
      this.detailInfo = result.detailInfo
      // 商品参数
      this.paramInfo = new GOODSPARAMS(result.itemParams.info, result.itemParams.rule)
      // 获取评论信息
      if (result.rate.list) [
        this.commentInfo = result.rate.list[0]
      ]
    },
    // 获取推荐数据
    async getRecommend () {
      const { data } = await reqRecommend()
      this.recommendList = data.list

    },
    // 更新scroll
    refreshScroll () {
      this.scroll.refresh()
      this.rollPos[1] = this.$refs.paramInfo.$el.offsetTop
      this.rollPos[2] = this.$refs.commentInfo.$el.offsetTop
      this.rollPos[3] = this.$refs.recommendList.$el.offsetTop
    }
  },
  created () {
    this.getDetail()
    this.getRecommend()
  },
  mounted () {
    this.scroll = new Scroll(this.$refs.detailwrapper, {
      click: true,
      probeType: 3
    })
    this.scroll.on('scroll', (pos) => {
      if (-pos.y < this.rollPos[1]) {
        this.currentIndex = 0
      } else if (-pos.y >= this.rollPos[1] && -pos.y < this.rollPos[2]) {
        this.currentIndex = 1
      } else if (-pos.y >= this.rollPos[2] && -pos.y < this.rollPos[3]) {
        this.currentIndex = 2
      } else {
        this.currentIndex = 3
      }
    })
    // 这里把refresh套一层的原因是的debounce
    this.refresh = debounce(this.refreshScroll, 0)
    this.$bus.$on('imgLoaded', this.refresh)
  },
  destroyed () {
    this.$bus.$off('imgLoaded', this.refresh)
  }
}
</script>
<style lang='less' scoped>
.detail-container {
  height: 100%;
  .text-color {
    color: #666;
    .detail-title {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      font-size: 14px;
      li {
        flex: 1;
        &.active {
          color: @main-color;
        }
      }
    }
  }
  .detail-main {
    position: relative;
    height: 100%;
    margin-top: 44px;
    margin-bottom: -44px;
  }
}
</style>
<style lang="less">
.detail-main {
  .content {
    padding-bottom: 90px;
  }
  .swiper-pagination-bullets {
    height: 20px;
    text-align: center;
    .swiper-detail {
      width: 8px;
      height: 4px;
      display: inline-block;
      background: #000;
      opacity: 0.3;
      border-radius: 30%;
      margin: 0 5px;
      outline: 0;
      &.swiper-detail-active {
        background-color: #fff;
        opacity: 1;
      }
    }
  }
}
</style>
