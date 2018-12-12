<template>
  <div class="box">
    <div class="topbox">
      <img src="../../img/back_icon.png" alt="" class="topimg" @click="$router.go(-1)">
      <p class="topbtn">确定</p>
    </div>

    <div style="padding-top: 0.3rem;">
      <p>收货人姓名：</p>
      <input type="text"/>
    </div>
    <div>
      <p>收货人联系电话：</p>
      <input type="number"/>
    </div>
    <div>
      <v-asbox />
    </div>

  </div>
</template>

<script>
  import asbox from './address.vue'

  export default {
    components:{
      'v-asbox':asbox
    },
    data(){
      return{

      }
    },
    mounted(){
      this.$store.commit('setFootDown')
    }
  }
</script>

<style scoped>
  input{
    margin: 0.2rem 0;
    border: 1px solid #ddd;
    width: 100%;
    outline: none;
    padding-left: 0.2rem;
    box-sizing: border-box;
  }
  .box>div{
    margin-bottom: 0.2rem;
  }
  .topbox{
    height: 0.4rem;
    padding-top: 0.2rem;
  }
  .topimg{
    height: 0.4rem;
    float: left;
  }
  .topbtn{
    float: right;
    line-height: 0.4rem;
  }
</style>
