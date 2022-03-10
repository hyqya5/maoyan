<template>
  <div>
    <header>
      <a href="javascript:;">中牟</a>
      <search-bar :placeholder="hotSearchWord" to="/search"/>
    </header>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'header-wrap',
  data () {
    return {
      hotSearchWord: [
        '这个杀手不太冷静',
        '新蝙蝠侠',
        '长津湖之水门桥'
      ]
    }
  }
}
</script>

<style>

</style>
