import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    component: () => import('@/views/TabPage'),
    children: [
      {
        path: '/HomeBar',
        name: 'home',
        component: () => import('@/views/HomeBar'),
        children: [
          {
            path: '/HomeBar/children/RecEnd',
            name: 'recommend',
            component: () => import('@/views/HomeBar/children/RecEnd')
          },
          {
            path: '/HomeBar/children/SayMovie',
            name: 'recommend',
            component: () => import('@/views/HomeBar/children/SayMovie')
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
