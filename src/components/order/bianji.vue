<template>
    <div>
      <ul class="box">
        <li class="shxx">
          <p><span>收货人姓名:</span><span>123</span></p>
          <p><span>收货人电话：</span><span>1111111123232</span></p>
          <p><span>收货地址：</span><span>dfhsjlhfjwhejfhjhjfhjdhfj</span></p>
          <img class="bianji" src="../../img/bianji.png" alt="" @click="setlist">
        </li>
        <li class="shxx">
          <p><span>收货人姓名:</span><span>123</span></p>
          <p><span>收货人电话：</span><span>1111111123232</span></p>
          <p><span>收货地址：</span><span>dfhsjlhfjwhejfhjhjfhjdhfj</span></p>
          <img class="bianji" src="../../img/bianji.png" alt="" @click="setlist">
        </li>
        <li class="shxx">
          <p><span>收货人姓名:</span><span>123</span></p>
          <p><span>收货人电话：</span><span>1111111123232</span></p>
          <p><span>收货地址：</span><span>dfhsjlhfjwhejfhjhjfhjdhfj</span></p>
          <img class="bianji" src="../../img/bianji.png" alt="" @click="setlist">
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
      data(){
       return{

       }
      },
      beforeMount(){
        this.$store.commit('setFootDown')
      },
      methods:{
        setlist(){
          this.$router.push({path:'/setlist'})
        }
      }
    }
</script>

<style scoped>
  .shxx{
    line-height: 0.3rem;
    padding: 0.2rem 0;
    position: relative;
    border-bottom: 1px solid #ddd;
    font-size: 0.24rem;
  }
  .shxx:last-child{
    border: 0;
  }
  .shxx span{
    display: block;
  }
  .shxx p{
    margin-bottom: 0.05rem;
    overflow: hidden;
  }
  .shxx span:nth-child(1){
    float: left;
    width: 1.8rem;
  }
  .shxx span:nth-child(2){
    float: right;
    width: calc(100% - 1.8rem);
  }
  .bianji{
    position: absolute;
    right: 0rem;
    top: 0.2rem;
    height: 0.3rem;
  }
</style>
