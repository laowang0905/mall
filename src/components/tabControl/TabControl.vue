<template>
  <div class="tabcontrol-container">
    <ul>
      <li
        v-for="(item, index) in titles"
        :key="index"
        @click="itemClick(index, item)"
      >
        <span :class="{active: currentIndex==index}">{{item[Object.keys(item)[0]]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: 0,
      currentTitle: Object.keys(this.titles[0])[0]
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemClick (index, item) {
      this.currentIndex = index
      this.currentTitle = Object.keys(item)[0]
      this.$emit('changeTitle', this.currentTitle)
    }
  }
}
</script>
<style lang='less' scoped>
.tabcontrol-container {
  position: sticky;
  top: 44px;
  ul {
    display: flex;
    background-color: #fff;
    height: 40px;
    border-radius: 6px 6px 0 0;
    li {
      flex: 1;
      line-height: 40px;
      list-style: none;
      text-align: center;
      font-weight: bold;
      span {
        padding: 5px;
        &.active {
          color: #db351f;
          border-bottom: 2px solid #db351f;
        }
      }
    }
  }
}
</style>
