<template>
    <div>
      <!--<div class="box">-->
        <!--<v-search />-->
      <!--</div>-->

      <div class="clearfix toptext">
        <p class="fl">可用积分：<span style="color: #ff4e4e;">123456</span></p>
        <p class="fr" @click="bianji = !bianji">编辑 <img class="topbtn" src="../img/bianji.png" alt=""></p>
      </div>

      <div v-if="list.length <= 0" class="nop_box">
        <img src="../img/no_product.png" alt="">
        <p>购物车暂无商品</p>
        <div class="pushbtn" @click="$router.push('/')">去逛逛</div>
      </div>

      <ul v-if="list.length > 0"  class="box">
        <li v-for="(item,index) in list" class="cartlist">
          <img v-if="bianji" class="remove" src="../img/remove.png" alt="" @click="remove(item.id)">
          <div class="checkbox" @click="chageCheck(item)" :class="{checkboxon : item.checked}"><span></span></div>
          <div class="imgbox listimg">
            <img :src="item.mallCommodity.pic1" alt="">
          </div>
          <div class="textbox">
            <p class="listtitle">{{item.mallCommodity.commodityName}}</p>
            <p class="listtext">积分：{{item.mallCommodity.commodityIntegral}}</p>
            <div class="list_box">
              <span @click="minusNumber(item, index)">-</span>
              <span>{{item.commodityNum}}</span>
              <span @click="addNumber(item, index)">+</span>
            </div>
          </div>
        </li>
      </ul>

      <div class="cartfoot">
        <div style="margin-left: 0.3rem;">
          <div class="checkbox fl" @click="allCheck" :class="{checkboxon : allchecked}"><span></span></div>
          全选
        </div>
        <p class="allnumber" style="padding-left: 0.3rem;">总计：{{allNumber}}</p>
        <div class="shopbtn" @click="shop">立即结算</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          bianji:false,
          list:[],
          allNumber: 0,
          allchecked: true
        }
      },
      beforeMount(){
        this.getList()
      },
      methods:{
        allCheck () {
          this.allNumber = 0
          if (!this.allchecked) {
            this.allchecked = true
            this.list.forEach(item => {
              item.checked = true
              this.allNumber += Number(item.commodityNum) * Number(item.mallCommodity.commodityIntegral)
            })
          }
        },
        chageCheck (item) {
          item.checked = !item.checked
          if (!item.checked) {
            this.allchecked = false
          } else {
            this.allchecked = true
            this.list.forEach(item => {
              if (!item.checked) {
                this.allchecked = false
              } else {
                this.allNumber += Number(item.commodityNum) * Number(item.mallCommodity.commodityIntegral)
              }
            })
          }
          this.allNumber = 0
          this.list.forEach(item => {
            if (item.checked) {
              this.allNumber += Number(item.commodityNum) * Number(item.mallCommodity.commodityIntegral)
            }
          })
        },
        getList () {
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/queryTrolley',
            data:{
              userId: this.$store.state.userId,
            },
            success: res => {
              console.log(res)
              this.list = res.data.results
              this.allNumber = 0
              this.list.forEach(item => {
                item.checked = true
                this.allNumber += Number(item.commodityNum) * Number(item.mallCommodity.commodityIntegral)
              })
            }
          })
        },
        remove (id) {
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/delTrolley',
            data:{
              ids: id,
            },
            success: res => {
              this.getList()
            }
          })
        },
        minusNumber (item, index) {
          item.commodityNum = Number(item.commodityNum)
          item.commodityNum = item.commodityNum - 1 <= 1 ? 1 : item.commodityNum - 1
          // this.list.splice(index, 1, item)
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/updateTrolley',
            data:{
              id: item.id,
              commodityNum: item.commodityNum,
            },
            success: res => {
              this.getList()
            }
          })
        },
        addNumber (item, index) {
          item.commodityNum = Number(item.commodityNum)
          item.commodityNum = item.commodityNum + 1 >= item.mallCommodity.inventoryNum ? item.mallCommodity.inventoryNum : item.commodityNum + 1
          // this.list.splice(index, 1, item)
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/updateTrolley',
            data:{
              id: item.id,
              commodityNum: item.commodityNum,
            },
            success: res => {
              this.getList()
            }
          })
        },
        shop(){
          if (this.list.length <= 0) {
            this.$store.commit('setAlter', '请选择商品')
            return
          }
          let shoplist = []
          this.list.forEach(item => {
            if (item.checked) {
              shoplist.push(item)
            }
          })
          let obj = {
            list: shoplist,
            allNumber: this.allNumber
          }
          this.$store.commit('setCartData',obj)
          this.$router.push({path:'/order'})
        }
      }
    }
</script>

<style scoped>
  .allnumber{
    width: calc(100% - 4.4rem);
  }
  .shopbtn{
    color: #fff;
    background: #ff4e4e;
    height: 100%;
    line-height: 1rem;
    width: 2rem;
    text-align: center;
  }
  .cartfoot{
    position: fixed;
    bottom: 1rem;
    background: #fff;
    left: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ddd;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .toptext{
    padding: 0.3rem;
    background: #eee;
  }
  .topbtn{
    display: inline-block;
    height: 0.32rem;
    margin-bottom: -0.05rem;
    margin-left: 0.04rem;
  }
  .cartlist{
    border-bottom: 1px solid #ddd;
    padding: 0.2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .remove{
    position: absolute;
    right: 0;
    top: 0.3rem;
    width: 0.35rem;
    z-index: 20;
  }
  .checkbox{
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    border-radius: 50%;
    border: 1px solid #000;
    box-sizing: border-box;
    position: relative;
  }
  .checkboxon span{
    display: block;
    width: 0.18rem;
    height: 0.18rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    background: #ffa84e;
  }
  .listimg{
    width: 2.9rem;
    height: 1.5rem;
    margin-right: 0.2rem;
  }
  .textbox{
    width: calc(100% - 3.4rem);
    height: 1.5rem;
    position: relative;
  }
  .listtitle{
    line-height: 0.5rem;
    height: 1rem;
    overflow: hidden;
    width: calc(100% - 0.4rem);
  }
  .listtext{
    position: absolute;
    left: 0;
    bottom: 0.1rem;
  }
  .list_box{
    position: absolute;
    right: 0.1rem;
    bottom: 0.04rem;
    font-size: 0;
    border: 1px solid #ddd;
  }
  .list_box span{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: #eee;
    text-align: center;
    font-size: 0.4rem;
    line-height: 0.34rem;
  }
  .list_box span:nth-child(2){
    background: #fff;
    width: 0.6rem;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-size: 0.26rem;
    line-height: 0.4rem;
  }
  .nop_box{
    text-align: center;
    font-size: 0.28rem;
    line-height: 0.4rem;
    color: #aaa;
    padding-top: 1rem;
  }
  .nop_box img{
    width: 40%;
    margin: 0 auto 0.4rem;
  }
  .pushbtn{
    margin: 0.8rem auto 0;
    width: 2rem;
    text-align: center;
    color: #fff;
    background: orange;
    border-radius: 0.1rem;
    padding: 0.1rem 0;
    text-align: center;
  }
</style>
