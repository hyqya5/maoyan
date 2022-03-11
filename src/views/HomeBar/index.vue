<template>
  <div>
    <header-wrap :placeholder="items"></header-wrap>
    <div class="menu">
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

}
</style>
