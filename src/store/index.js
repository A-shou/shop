import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var state={
  footindex:0,
  footclass:false
};
var mutations = {
  setFootIndex(state,data,oldindex){
    state.footindex = data
  },
  setFootDown(state){
    state.footclass = true
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
