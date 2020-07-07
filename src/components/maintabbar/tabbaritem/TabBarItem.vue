<template>
  <div class="tabbar-item" @click="itemClick">
    <span>
      <slot name="tabbar-icon" :isActive="isActive"></slot>
    </span>
    <span :style="isActiveColor">
      <slot name="tabbar-text"></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    link: String,
    activeColor: {
      type: String,
      default: '#DB351F'
    }
  },
  computed: {
    isActive () {
      return this.$route.path !== this.link
    },
    isActiveColor () {
      return this.isActive ? {} : { color: this.activeColor }
    }
  },
  methods: {
    itemClick () {
      if (this.link !== this.$route.path) {
        this.$router.replace(this.link)
      }
    }
  },
};
</script>
<style lang='less' scoped>
.tabbar-item {
  flex: 1;
  display: flex;
  font-size: 14px;
  // text-align: center;
  flex-direction: column;
  align-items: center;
  .tabbar-icon {
    margin-top: 3px;
    vertical-align: middle;
    width: 25px;
  }
}
</style>
