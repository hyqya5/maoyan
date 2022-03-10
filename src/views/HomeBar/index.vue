<template>
  <div>
    <header-wrap :placeholder="items"></header-wrap>
    <div class="menu">
      <rec-end>
      </rec-end>
      <say-movie></say-movie>
      <hot-film />
      <drama-synthesis />
      <trai-ler />
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap.vue'
import RecEnd from './children/RecEnd'
import SayMovie from './children/SayMovie'
import HotFilm from './children/HotFilm'
import DramaSynthesis from './children/DramaSynthesis'
import TraiLer from './children/TraiLer'
export default {
  name: 'home-bar',
  components: {
    HeaderWrap,
    RecEnd,
    SayMovie,
    HotFilm,
    DramaSynthesis,
    TraiLer
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
.menu{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  text-decoration: none;
}
</style>
