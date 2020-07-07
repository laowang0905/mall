<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from 'components/maintabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
};
</script>

<style lang="less">
@import 'assets/css/base.less';
</style>
