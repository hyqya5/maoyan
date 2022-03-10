<template>
  <div>
    <header-wrap :placeholder="items"></header-wrap>
    <div class="menu">
      <rec-end>
      </rec-end>
      <say-movie></say-movie>
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap.vue'
import RecEnd from './children/RecEnd'
import SayMovie from './children/SayMovie'
export default {
  name: 'home-bar',
  components: {
    HeaderWrap,
    RecEnd,
    SayMovie
  },
  data () {
    return {
      items: [
        '长津湖之水门桥',
        '这个杀手不太冷静',
        '新蝙蝠侠'
      ]
    }
  }
}
</script>

<style>

</style>
