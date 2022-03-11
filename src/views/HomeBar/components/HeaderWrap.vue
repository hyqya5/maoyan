<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中牟</a>
      <search-bar :placeholder="hotSearchWord" to="/search"/>
    </header>
    <div>
      <tab-bar :tabs="tabs" router></tab-bar>
    </div>
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
      ],
      tabs: [
        {
          path: '/HomeBar/children/RecEnd',
          title: '推荐'
        },
        {
          path: '/HomeBar/children/HotFilm',
          title: '热片解读'
        },
        {
          path: '/HomeBar/children/SayMovie',
          title: '说电影'
        },
        {
          path: '/HomeBar/children/TraiLer',
          title: '预告片'
        },
        {
          path: '/HomeBar/children/DramaSynthesis',
          title: '剧综'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header-wrap{
  header{
    display: flex;
    padding:10px;
    justify-content: space-between;
    align-items: center;
    a{
      font-size: 12px;
      text-decoration: none;
      flex-shrink:0 ;
      color: #333;
    }
  }
}
</style>
