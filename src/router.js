import Vue from 'vue'
import Router from 'vue-router'
import SelectType from './views/SelectType.vue'
import InputPage from './views/InputPage.vue'
import Success from './views/Success.vue'
import Failure from './views/Failure.vue'
import Error from './views/Error.vue'
import ConfirmPage from './views/ConfirmPage.vue'
import vuelearning from './views/vuelearning.vue'


Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  scrollBehavior () {//常に一番上から表示
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/learning',
      name: 'leaning',
      component: vuelearning
    },
    {
      path: '/',
      name: 'selecttype',
      component: SelectType
    },
    {
      path: '/inputpage/:type',
      name: 'inputpage',
      component: InputPage,
      props:true
    },
    {
      path: '/confirmpage',
      name: 'confirmpage',
      component: ConfirmPage
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },

    {
      path: '/failure',
      name: 'failure',
      component: Failure
    },

    {
      path: '*',//全てのルート
      name: 'error',
      component: Error//上から順にマッチングされる
    },

  ]
})

// router.beforeEach((to, from, next) => {
//   store.commit('setLoading', true)
//   next({path:loading})
// })

// router.afterEach(() => {
//   store.commit('setLoading', false)
// })

// router.beforeEach((to, from, next) => {
//   setTimeout(next(),20000)
// })
// // ルーターナビゲーションの後にフック
// router.afterEach(() => {
//   store.commit('end')
// })

export default router