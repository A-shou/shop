import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var state={
  footindex:0,
  footclass:false,
  siteId:'1001',
  userId:'123',
  cartData: null
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
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
