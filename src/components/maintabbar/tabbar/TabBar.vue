<template>
  <div class="tabbar-container">
    <slot></slot>
  </div>
</template>
<script>

export default {
}
</script>
<style lang='less' scoped>
.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 5px rgba(206, 200, 200, 0.4);
  height: 49px;
  display: flex;
}
</style>
