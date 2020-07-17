<template>
  <div class="goods-item" @click="goDetail(goodsId)">
    <a>
      <img :src="imgUrl" @load="imgLoad"/>
    </a>
    <a class="goods-introduce">
      <div class="goods-title">
        <span>{{item.title}}</span>
      </div>
      <div class="goods-price">
        <span class="goods-price-sign">￥</span>
        <span class="goods-price-money">{{item.price}}</span>
        <span class="goods-price-sell">{{itemSale}}人已购买</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoaded')
    },
    goDetail(iid) {
      this.$router.push(`/detail/${iid}`)
    }
  },
  computed: {
    imgUrl() {
      return this.item.image||this.item.show.img
    },
    goodsId() {
      return this.item.iid||this.item.item_id
    },
    itemSale() {
      return this.item.sale||this.item.itemSale
    }
  },
}
</script>
<style lang='less' scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  width: 46.9%;
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 9px 4.5px 0 4.5px;
  overflow: hidden;
  border: 1px solid #ddd;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(119, 118, 109, 0.4);
  min-height: 340px;
  img {
    width: 100%;
  }
  .goods-introduce {
    padding: 0 10px;
    .goods-title {
      height: 37px;
      margin-top: 10px;
      text-overflow: ellipsis;
      line-height: 1.4;
      overflow: hidden;
      font-size: 14px;
      span {
        outline: 0;
      }
    }
    .goods-price {
      margin: 10px 0;
      .goods-price-sign {
        font-size: 11px;
        color: @main-color;
      }
      .goods-price-money {
        font-size: 14px;
        color: @main-color;
      }
      .goods-price-sell {
        font-size: 11px;
        margin-left: 10px;
      }
    }
  }
}
</style>
