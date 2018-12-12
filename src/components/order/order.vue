<template>
    <div>
      <div class="box shxx" @click="$router.push({path:'/bianji'})">
        <p><span>收货人姓名:</span><span>123</span></p>
        <p><span>收货人电话：</span><span>1111111123232</span></p>
        <p><span>收货地址：</span><span>dfhsjlhfjwhejfhjhjfhjdhfj</span></p>
        <img class="bianji" src="../../img/back_icon.png" alt="">
      </div>
      <div class="imgbox line">
        <img src="../../img/line.jpg" alt="">
      </div>

      <ul style="padding-top: 0.3rem;">
        <li v-for="(item,index) in list" class="cartlist">
          <div class="imgbox listimg">
            <img src="../../img/product.jpg" alt="">
          </div>
          <div class="textbox">
            <p class="listtitle">123</p>
            <p>数量：1</p>
            <p class="listtext">积分：123</p>
          </div>
        </li>
      </ul>

      <div class="box zhbox">
        <p>商品数：<span>2 件</span></p>
        <p>总积分：<span>246 积分</span></p>
      </div>

      <div class="productfoot" :class="{productfootdown:!$store.state.footclass}">
        <div class="productfoottext">
          合计：<span>246</span>积分
        </div>
        <div class="fr shopbtn">提交订单</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          list:['1','2']
        }
      },
      mounted(){
        this.$store.commit('setFootDown')
      }
    }
</script>

<style scoped>
  .shxx{
    line-height: 0.4rem;
    padding: 0.2rem 0;
    position: relative;
  }
  .shxx span{
    display: block;
  }
  .shxx p{
    margin-bottom: 0.1rem;
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
  .line{
    border-bottom: 0.4rem solid #eee;
  }
  .cartlist{
    background: #eee;
    border-bottom: 0.04rem solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0.2rem 0.3rem;
  }
  .listimg{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.2rem;
  }
  .textbox{
    width: calc(100% - 1.5rem);
    height: 1.5rem;
    position: relative;
  }
  .listtitle{
    line-height: 0.4rem;
    overflow: hidden;
    margin-bottom: 0.2rem;
    width: calc(100% - 0.4rem);
  }
  .listtext{
    position: absolute;
    right: 0;
    bottom: 0.1rem;
  }
  .zhbox p{
    border-bottom: 1px solid #ddd;
    line-height: 0.8rem;
  }
  .zhbox p:last-child{
    border: 0;
  }
  .zhbox span{
    float: right;
    color: #fe4646;
  }
  .productfoot{
    transition: 0.4s;
    height: 1rem;
    width: 100%;
    z-index: 500;
    background: #fff;
    bottom: 0;
    left: 0;
    transition-delay: 0.2s;
    box-shadow: 0 -0.02rem 0.2rem rgba(0,0,0,0.2);
    position: fixed;
  }
  .productfootdown{
    transform: translateY(100%);
  }
  .shopbtn{
    color: #fff;
    background: #ff4e4e;
    height: 100%;
    line-height: 1rem;
    width: 2rem;
    text-align: center;
  }
  .productfoottext{
    line-height: 1rem;
    padding-left: 0.3rem;
    float: left;
    font-size: 0.26rem;
  }
  .productfoottext span{
    font-size: 0.36rem;
    color: #ff4e4e;
    margin: 0 0.2rem;
  }
  .bianji{
    position: absolute;
    right: 0rem;
    top: 0.7rem;
    height: 0.4rem;
    transform: rotate(180deg);
  }
</style>
