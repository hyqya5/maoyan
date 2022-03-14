<template>
  <div class="header-bar">
    <div class="header-menu">
      <template>
      <a
      v-for="(item, index) in tabs"
      :key="index"
      :class="{active: activeIndex === index}"
      @click="change(item, index)"
      href="javascript:;"
      ref="nave"
       >{{item.title}}</a>
      </template>
    </div>
     <span class="line" ref="line"></span>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: [Array, Object],
    router: Boolean
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.setLineLeft()
  },
  methods: {
    change (item, index) {
      if (this.router && this.$route.fullPath !== item.path) {
        this.$router.push(item.path)
      }
      this.activeIndex = index
      this.$nextTick(() => {
        this.setLineLeft()
      })
    },
    setLineLeft () {
      const activeNav = this.$refs.nave[this.activeIndex]
      const width = activeNav.clientWidth
      const left = activeNav.offsetLeft + width / 2 - 5
      this.$refs.line.style.left = left + 'px'
    }
  }
}
</script>
<style lang="scss">
.header-bar{
  position: relative;
  margin-bottom: 15px;
  .header-menu{
  display: flex;
  justify-content: space-around;
  overflow: auto;
  align-items: center;
  a{
    text-decoration: none;
    color: #666;
    font-size: 12px;
    display: block;
    &.active{
      font-size: 20px;
      }
    }
  }
  .line{
    position: absolute;
    bottom: -10px;
    width: 10px;
    height: 2px;
    background: #f03d37;
    transition: all 0.5s ease;
    display: block;
  }
}
</style>
