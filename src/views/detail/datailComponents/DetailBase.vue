<template>
  <div class="detail-base-container" v-if="Object.keys(goodsInfo).length">
    <div class="detail-base-title">{{goodsInfo.title}}</div>
    <div class="detail-base-price">
      <span class="price-new">{{goodsInfo.newPrice}}</span>
      <span class="price-old">{{goodsInfo.oldPrice}}</span>
      <span
        v-if="goodsInfo.discountDesc"
        class="price-desc"
        :style="{backgroundColor: goodsInfo.discountBgColor}"
      >{{goodsInfo.discountDesc}}</span>
      <span></span>
    </div>
    <div class="detail-base-columns">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="detail-base-services">
      <div v-for="item in 3" :key="item">
        <img :src="goodsInfo.services[item-1].icon" alt />
        <span>{{goodsInfo.services[item-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang='less' scoped>
.detail-base-container {
  background-color: #fff;
  padding: 10px 7.5px;
  font-size: 18px;
  color: #000;
  line-height: 1.4;
  .detail-base-price {
    margin: 10px 0;
    .price-new {
      font-size: 20px;
      font-weight: bold;
      color: @main-color;
      margin-right: 10px;
    }
    .price-old {
      font-size: 14px;
      color: #ccc;
      text-decoration: line-through;
    }
    .price-desc {
      position: relative;
      top: -10px;
      left: 10px;
      color: #fff;
      padding: 3px 5px;
      font-size: 14px;
      border-radius: 10px;
    }
  }
  .detail-base-columns {
    display: flex;
    justify-content: space-between;
    span {
      // flex: 1;
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .detail-base-services {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #aaa;
    margin: 10px 0;
    padding: 10px 0;
    border-top: 1px solid rgba(187, 168, 168, 0.2);
    border-bottom: 7px solid rgba(187, 168, 168, 0.2);
    img {
      width: 20px;
      vertical-align: middle;
      margin-right: 3px;
    }
  }
}
</style>
