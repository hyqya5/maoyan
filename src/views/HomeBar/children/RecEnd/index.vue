<template>
  <div>
    <BannerBar :images="bannerList" />
    <vajra-position :images2="bannerList2" />
  </div>
</template>

<script>
import BannerBar from './components/BannerBar.vue'
import VajraPosition from './components/VajraPosition.vue'
export default {
  name: 'rec-end',
  data () {
    return {
      bannerList: [],
      bannerList2: []
    }
  },
  components: {
    BannerBar,
    VajraPosition
  },
  created () {
    this.Rotation()
    this.VajraPosition1()
  },
  methods: {
    // 轮播图
    Rotation () {
      this.$api.home.banner().then((res) => {
        this.bannerList = res.data.data[0].config
      })
    },
    VajraPosition1 () {
      this.$api.home.vajra().then((res) => {
        this.bannerList2 = res.data.data[0].config
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
