import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/index'
import classpage from '@/components/class'
import cart from '@/components/cart'
import user from '@/components/user'
import search from '@/components/search_page'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '',
          name: 'index',
          component: index,
        }
      ]
    },
    {
      path: '/class',
      name: 'class',
      component: classpage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/user',
      name: 'user',
      component: user,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/order',
      name: 'order',
      component: (resolve) => require(['../components/order/order.vue'],resolve),
    },
    {
      path: '/bianji',
      name: 'bianji',
      component: (resolve) => require(['../components/order/bianji.vue'],resolve),
    },
    {
      path: '/setlist',
      name: 'setlist',
      component: (resolve) => require(['../components/order/setlist.vue'],resolve),
    },
    {
      path: '/pagelist',
      name: 'pagelist',
      component: (resolve) => require(['../components/pagelist.vue'],resolve),
    }
  ]
})
