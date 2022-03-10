import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import FooterBar from './components/FooterBar'
import './assets/font/iconfont.css'
import SearchBar from './components/SearchBar'
Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
