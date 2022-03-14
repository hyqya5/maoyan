<template>
  <div class="home-page">
    <header-wrap />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap.vue'
export default {
  name: 'home-bar',
  components: {
    HeaderWrap
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.home-page{
  .content {
    background: #ccc;
    width: 100vw;
    min-height: calc(100vh - 123px);
  }
}
</style>
