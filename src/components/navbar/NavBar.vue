<template>
  <div class="nav-container" :style="{background: navColor}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">{{navText}}</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navText: String,
    navColor: {
      type: String,
      default: '#DB351F'
    }
  }
}
</script>
<style lang='less' scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 44px;
  color: #fff;
  z-index: 999;
  // background-color: #bfa;
  .left,
  .right {
    line-height: 44px;
    height: 44px;
    width: 16vw;
    // background-color: pink;
    text-align: center;
    img {
      width: 20px;
      vertical-align: middle;
    }
  }
  .center {
    flex: 1;
    // height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
