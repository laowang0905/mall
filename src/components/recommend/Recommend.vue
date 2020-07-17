<template>
  <div class="recommend-container">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang='less' scoped>
.recommend-container {
  font-size: 14px;
  // height: 100px;
  display: flex;
  border-radius: 6px;
  background-color: #fff;
  // margin: 0 2px;
  .recommend-item {
    flex: 1;
    padding: 10px;
    a {
      display: block;
      text-align: center;
      img {
        width: 100%;
        vertical-align: middle;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
