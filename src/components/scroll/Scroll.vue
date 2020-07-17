<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probe: {
      type: Number,
      default: 0
    },
    pullupload: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probe,
        // pullUpLoad: this.pullupload
        pullUpLoad: this.pullupload
      })
      this.scroll.on('scroll', (pos) => {
        this.$emit('scroll', pos)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    })
  },
  methods: {
    scrollTo (x, y, time = 500) {
      this.scroll&&this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll&&this.scroll.refresh()
    }
  },
}
</script>
<style lang=''>
</style>
