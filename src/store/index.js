import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var state={
  footindex:0,
  footclass:false,
  siteId:'1001',
  userId:null,
  cartData: null,
  userData: null,
  alterShow: false,
  alterText: '提示'
};
var mutations = {
  setFootIndex(state,data,oldindex){
    state.footindex = data
  },
  setFootDown(state){
    state.footclass = true
  },
  setCartData (state, data) {
    state.cartData = data
  },
  login (state, data) {
    state.userId = data.cid
    state.userData = data
    localStorage.userInfo = JSON.stringify(data)
  },
  logout () {
    state.userId = null
    state.userData = null
    this.$router.push('/')
  },
  setAlter (state, data) {
    state.alterShow = true
    state.alterText = data
    setTimeout(function () {
      state.alterShow = false
      state.alterText = ''
    }, 3000)
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
