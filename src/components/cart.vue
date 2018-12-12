<template>
    <div>
      <div class="box">
        <v-search />
      </div>

      <div class="clearfix toptext">
        <p class="fl">可用积分：<span style="color: #ff4e4e;">123456</span></p>
        <p class="fr" @click="bianji = !bianji">编辑 <img class="topbtn" src="../img/bianji.png" alt=""></p>
      </div>

      <ul class="box">
        <li v-for="(item,index) in list" class="cartlist">
          <img v-if="bianji" class="remove" src="../img/remove.png" alt="">
          <label>
            <div class="checkbox"><span></span></div>
            <input style="display: none;" type="checkbox"/>
          </label>
          <div class="imgbox listimg">
            <img src="../img/product.jpg" alt="">
          </div>
          <div class="textbox">
            <p class="listtitle">123</p>
            <p class="listtext">积分：123</p>
            <div class="list_box">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </li>
      </ul>

      <div class="cartfoot">
        <div style="margin-left: 0.3rem;">
          <label>
            <div class="checkbox fl"><span></span></div>
            <input style="display: none;" type="checkbox"/>
            全选
          </label>
        </div>
        <p class="allnumber">总计：</p>
        <div class="shopbtn" @click="shop">立即结算</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          bianji:false,
          list:['1','2','3','1','2','3','1','2','3','1','2','3']
        }
      },
      methods:{
        shop(){
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
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.2rem;
  }
  .textbox{
    width: calc(100% - 2.4rem);
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
</style>
