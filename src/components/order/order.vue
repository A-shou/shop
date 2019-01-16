<template>
    <div>
      <div class="box fltop clearfix">
        <img src="../../img/back_icon.png" alt="" class="fl backbtn" @click="$router.back(-1)">
      </div>
      <div style="height: 1rem"></div>

      <div v-if="adlist" class="box shxx" @click="$router.push({path:'/bianji'})">
        <p><span>收货人姓名:</span><span>{{adlist.consigneeName}}</span></p>
        <p><span>收货人电话：</span><span>{{adlist.consigneePhone}}</span></p>
        <p><span>收货地址：</span><span>{{adlist.consigneeProvince}} - {{adlist.consigneeCity}} - {{adlist.consigneeArea}} - {{adlist.consigneeContent}}</span></p>
        <img class="bianji" src="../../img/back_icon.png" alt="">
      </div>
      <div v-if="!adlist" class="box shxx" @click="$router.push({path:'/bianji'})">
        <p>暂无地址</p>
        <p>请前往添加地址</p>
        <img class="bianji" src="../../img/back_icon.png" alt="">
      </div>

      <div class="imgbox line">
        <img src="../../img/line.jpg" alt="">
      </div>

      <ul style="padding-top: 0.3rem;">
        <li v-for="(item,index) in list" class="cartlist">
          <div class="imgbox listimg">
            <img :src="item.mallCommodity.pic1" alt="">
          </div>
          <div class="textbox">
            <p class="listtitle">{{item.mallCommodity.commodityName}}</p>
            <p>数量：{{item.commodityNum}}</p>
            <p class="listtext">积分：{{item.mallCommodity.commodityIntegral}}</p>
          </div>
        </li>
      </ul>

      <div class="box zhbox">
        <p>商品数：<span>{{number}} 件</span></p>
        <p>总积分：<span>{{allNumber}} 积分</span></p>
      </div>

      <div class="box">
        <textarea v-model="liuyan" placeholder="买家留言"></textarea>
      </div>

      <div class="productfoot" :class="{productfootdown:!$store.state.footclass}">
        <div class="productfoottext">
          合计：<span>{{allNumber}}</span>积分
        </div>
        <div class="fr shopbtn" @click="addOrder">提交订单</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          list: [],
          allNumber: 0,
          number: 0,
          liuyan: '',
          adlist: null
        }
      },
      methods: {
        addOrder () {
          let commodityInfo = ''
          this.list.forEach((item, index) => {
            if (index == this.list.length - 1) {
              commodityInfo += item.mallCommodity.id + '@' + item.commodityNum
            } else {
              commodityInfo += item.mallCommodity.id + '@' + item.commodityNum + '|'
            }
          })
          let trolleyId = ''
          this.$store.state.cartData.list.forEach((item, index) => {
            if (index == this.$store.state.cartData.list.length - 1) {
              trolleyId += item.id
            } else {
              trolleyId += item.id + ','
            }
          })
          console.log(trolleyId)
          this.ajaxPost({
            url: '/cri-cms-api/mall/app/saveOrder',
            data: {
              commodityInfo: commodityInfo,
              userId: this.$store.state.userId,
              orderIntegral: this.allNumber,
              buyerMessage: this.liuyan,
              trolleyId: trolleyId,
              addressId: this.adlist.id
            },
            success: res => {
              this.$router.push('/pagelist')
            }
          })
        }
      },
      mounted(){
        this.$store.commit('setFootDown')
        if (this.$route.query.id) {
          this.adlist = this.$route.query
        } else {
          this.ajaxPost({
            url: '/cri-cms-api/mall/app/queryAddress',
            data: {
              userId: this.$store.state.userId
            },
            success: res => {
              this.adlist = res.data.results[0]
            }
          })
        }
        this.list = this.$store.state.cartData.list
        this.allNumber = this.$store.state.cartData.allNumber
        this.number = 0
        this.list.forEach(item => {
          this.number += Number(item.commodityNum)
        })
      }
    }
</script>

<style scoped>
  textarea{
    width: 100%;
    margin: 0;
    padding: 0.1rem 0.2rem;
    box-sizing: border-box;
    border: 1px solid #ddd;
    resize: none;
    height: 2rem;
    outline: none;
  }
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
    width: 3.2rem;
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
