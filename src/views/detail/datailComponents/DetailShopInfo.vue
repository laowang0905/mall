<template>
  <div class="detail-shopinfo-container">
    <div class="detail-shopinfo-title">
      <img :src="shopInfo.shopLogo" class="shop-logo" />
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="detail-shopinfo-main">
      <div class="main-left">
        <div class="sells">
          <span>{{shopInfo.cSells | sellCountFormat}}</span>
          <span>总销量</span>
        </div>
        <div class="goods">
          <span>{{shopInfo.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="main-right">
        <div class="score" v-for="item in shopInfo.score" :key="item.name">
          <span class="score-name">{{item.name}}</span>
          <span class="score-num" :class="{better: item.isBetter}">{{item.score}}</span>
          <span class="score-tag" :class="{better: item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="gotoshop">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellCountFormat (val) {
      if (val < 10000) {
        return val
      } else {
        return (val / 10000).toFixed(1) + "万"
      }
    }
  }
}
</script>
<style lang='less' scoped>
.detail-shopinfo-container {
  background-color: #fff;
  padding-bottom: 5px;
  .detail-shopinfo-title {
    .shop-logo {
      width: 50px;
      border-radius: 50%;
      border: 1px solid #aaa;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      vertical-align: middle;
      margin: 0 20px;
    }
    .shop-name {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .detail-shopinfo-main {
    display: flex;
    margin-top: 20px;
    .main-left {
      display: flex;
      justify-content: space-around;
      flex: 1;
      padding: 0 15px;
      .sells,
      .goods {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          text-align: center;
          margin: 5px 0;
        }
      }
    }
    .main-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .score {
        margin: 5px;
        .score-num {
          color: rgb(10, 163, 10);
          margin: 0 10px;
          &.better {
            color: rgb(153, 12, 12);
          }
        }
        .score-tag {
          padding: 3px;
          color: #fff;
          background-color: rgb(15, 199, 15);
          &.better {
            background-color: rgb(235, 28, 28);
          }
        }
      }
    }
  }
  .gotoshop {
    // display: inline-block;
    background-color: rgba(192, 178, 178, 0.2);
    width: 35vw;
    text-align: center;
    margin: 10px auto;
    overflow: hidden;
    a {
      font-size: 18px;
      display: block;
      padding: 5px;
    }
  }
}
</style>
