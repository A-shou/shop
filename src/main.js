// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import search from '@/components/block/search.vue';
Vue.use(search)
Vue.component('v-search', search);

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next) => {
  next()
  if(to.path == '/'){
    store.state.footindex = 0
  }else if(to.path == '/class'){
    store.state.footindex = 1
  }else if(to.path == '/cart'){
    store.state.footindex = 2
  }else if(to.path == '/user'){
    store.state.footindex = 3
  }
  window.scrollTo(0,0);
})
