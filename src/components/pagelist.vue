<template>
    <div>
      <div class="box fltop clearfix">
        <img src="../img/back_icon.png" alt="" class="fl backbtn" @click="$router.back(-1)">
      </div>
      <div style="height: 1rem"></div>

      <div class="prolist" v-for="(item,index) in biglist">
        <p>订单状态： {{item.orderStatus}}</p>
        <div class="shxx">
          <p><span>收货人姓名:</span><span>123</span></p>
          <p><span>收货人电话：</span><span>1111111123232</span></p>
          <p><span>收货地址：</span><span>dfhsjlhfjwhejfhjhjfhjdhfj</span></p>
        </div>
        <div class="imgbox line" style="margin-bottom: 0.2rem;">
          <img src="../img/line.jpg" alt="">
        </div>
        <ul>
          <li v-for="(item1,index) in item.mallCommodityList" class="cartlist">
            <div class="imgbox listimg">
              <img :src="item1.pic1" alt="">
            </div>
            <div class="textbox">
              <p class="listtitle">{{item1.commodityName}}</p>
              <p>数量：{{item1.commodityNum}}</p>
              <p class="listtext">积分：{{item1.commodityIntegral}}</p>
            </div>
          </li>
        </ul>
        <div class="box zhbox">
          <p>商品数：<span>2 件</span></p>
          <p>总积分：<span>{{item.orderIntegral}} 积分</span></p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      data(){
        return{
          list:['1','2'],
          biglist:['1','2'],
        }
      },
      beforeMount(){
        this.$store.commit('setFootDown')
        this.ajaxPost({
          url: '/cri-cms-api/mall/app/queryOrder',
          data: {
            userId: this.$store.state.userId
          },
          success: res => {
            console.log(res.data.results)
            this.biglist = res.data.results
          }
        })
      }
    }
</script>

<style scoped>
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
    width: 3.5rem;
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
  .prolist{
    border-bottom: 0.4rem solid #eee;
    padding: 0.3rem 0.2rem 0.1rem;
  }
  .shxx{
    line-height: 0.3rem;
    padding: 0.1rem 0;
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
</style>
