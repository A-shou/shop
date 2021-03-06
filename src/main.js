// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import vloading from '@/components/block/loading.vue';
Vue.use(vloading)
Vue.component('v-loading', vloading);

import search from '@/components/block/search.vue';
Vue.use(search)
Vue.component('v-search', search);

import alterbox from '@/components/block/alterbox.vue';
Vue.use(alterbox)
Vue.component('v-alterbox', alterbox);

import alter_box from '@/components/alertBlock.vue';
Vue.use(alter_box)
Vue.component('v-alter', alter_box);

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

import axios from 'axios';
axios.defaults.baseURL = funengData.api//端口号
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$http = axios

Vue.prototype.ajaxPost = function(obj){ //ajax post方法
  var params = new URLSearchParams();
  for(var key in obj.data){
    params.append(key, obj.data[key]);
  }
  params.append('siteId', store.state.siteId);
  this.$http({
    method: 'post',
    url: obj.url,
    data:params,
    // headers:{
    //   token: this.$store.state.userdata.token
    // }
  }).then(res => {
    if(obj.success){
      obj.success(res)
    }
  }).catch(err => {
    console.log(err)
  })
}

Vue.prototype.keydownFun = function (nub, fun) {
  let gettype = Object.prototype.toString
  let arrtrue = gettype.call(nub) === '[object Array]' ? true : false
  if (typeof nub === 'number') {
    nub = nub + ''
  }
  if (arrtrue){
    for (let i = 0; i < nub.length; i++) {
      if (typeof nub[i] === 'string') {
        nub[i] = parseInt(nub[i])
      }
    }
  }
  document.onkeydown = function(){
    if (nub === 'all') {
      fun()
    } else if (nub.indexOf(event.keyCode) >= 0) {
      fun()
    }
  }
}
// console.log = function () {}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next) => {
  if (to.path == '/user' || to.path == '/cart') {
    if (!store.state.userId) {
      router.push('/login')
      window.scrollTo(0,0);
      return
    }
  }
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
  store.state.footclass = false
  window.scrollTo(0,0);
})
