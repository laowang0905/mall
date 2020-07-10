<template>
  <div class="goods-container">
    <GoodsItem v-for="item in goodsList" :key="item.show.img+Math.random()" :item="item"></GoodsItem>
  </div>
</template>
<script>
import GoodsItem from '../goodsItem/GoodsItem'
export default {
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>
<style lang='less' scoped>
.goods-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  padding: 0 7.5px;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
