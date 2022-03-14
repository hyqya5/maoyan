// 首页轮播图
<template>
  <swiper class="swiper-wrap" ref="mySwiper"  :options="swiperOptions">
    <swiper-slide v-for="(item, index) in images" :key="index">
      <img :src="item.image" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'BannerBar',
  props: {
    images: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  width: 100%;
  overflow: hidden;
  .swiper-slide {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
