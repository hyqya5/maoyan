import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import FooterBar from './components/FooterBar'
import './assets/font/iconfont.css'
import SearchBar from './components/SearchBar'
import TabBar from './components/TabBar'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import api from '@/api'
Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
Vue.component('TabBar', TabBar)
Vue.prototype.$api = api
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
