import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    redirect: '/HomeBar',
    component: () => import('@/views/TabPage'),
    children: [
      {
        path: '/HomeBar',
        name: 'home',
        redirect: '/HomeBar/RecEnd',
        component: () => import('@/views/HomeBar'),
        children: [
          {
            path: '/HomeBar/RecEnd',
            component: () => import('@/views/HomeBar/children/RecEnd')
          },
          {
            path: '/HomeBar/SayMovie',
            component: () => import('@/views/HomeBar/children/SayMovie')
          },
          {
            path: '/HomeBar/HotFilm',
            component: () => import('@/views/HomeBar/children/HotFilm')
          },
          {
            path: '/HomeBar/DramaSynthesis',
            component: () => import('@/views/HomeBar/children/DramaSynthesis')
          },
          {
            path: '/HomeBar/TraiLer',
            component: () => import('@/views/HomeBar/children/TraiLer')
          }
        ]
      },
      {
        path: '/MoveBar',
        name: 'move',
        component: () => import('@/views/MoveBar')
      },
      {
        path: '/PerForm',
        name: 'perform',
        component: () => import('@/views/PerForm')
      },
      {
        path: '/SporTs',
        name: 'sport',
        component: () => import('@/views/SporTs')
      },
      {
        path: '/MinEa',
        name: 'mine',
        component: () => import('@/views/MinEa')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
