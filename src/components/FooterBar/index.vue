<template>
  <div class="footer-nav">
    <router-link
      v-for="(item, index) in tabs"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <i :class="['iconfont', item.icon]"></i>
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabs: [
        {
          path: '/HomeBar',
          icon: 'icon-shouye',
          selectIcon: 'icon-shouye1',
          text: '首页'
        },
        {
          path: '/MoveBar',
          icon: 'icon-yingyuan',
          selectIcon: 'icon-yingyuan1',
          text: '电影/影院'
        },
        {
          path: '/PerForm',
          icon: 'icon-yanchu',
          selectIcon: 'icon-yanchu1',
          text: '演出'
        },
        {
          path: '/SporTs',
          icon: 'icon-zhibo',
          selectIcon: '',
          text: '体育/赛事'
        },
        {
          path: '/MinEa',
          icon: 'icon-wode',
          selectIcon: 'icon-wode1',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer-nav {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: #fff;
  a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    padding: 5px 0px;
    color: #666;
    display: flex;
    flex-direction: column;
    span{
      font-size: 12px;
    }
    &.active {
      color: #f03d37;
    }
  }
}
</style>
