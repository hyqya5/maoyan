<template>
  <div class="header-bar">
    <div class="header-menu">
      <template>
      <a
      v-for="(item, index) in tabs"
      :key="index"
      :to="item.path"
      :class="{active: activeIndex === index}"
      @click="change(index)"
      href="javascript:;"
      ref="navs"
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
    tabs: Array,
    router: Boolean
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang="scss">
.header-bar{
  position: relative;
  .header-menu{
  display: flex;
  justify-content: space-around;
  overflow: auto;
  align-items: center;
  a{
    text-decoration: none;
    color: #666;
    font-size: 12px;
    &.active{
      font-size: 20px;
      }
    }
  }
  .line{
    position: absolute;
    bottom: 0px;
    width: 10px;
    height: 2px;
    background: #f03d37;
  }
}
</style>
