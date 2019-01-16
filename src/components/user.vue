<template>
    <div>
      <div class="topbox clearfix">
        <div class="imgbox txbox fl">
          <img src="../img/tx_img4.jpg" alt="">
        </div>
        <div class="fl">
          <p class="username">name</p>
          <p class="jifen">积分：123456789</p>
        </div>
        <p class="tuichubtn">退出登录</p>
      </div>

      <div class="myaouderbox">
        <p class="clearfix myaouder" @click="$router.push({path:'/pagelist'})">
          <img class="fl listimg" src="../img/dingdan_icon.png" alt="">
          我的订单
          <img class="fr imgbtn" src="../img/back_icon.png" alt="">
          <span class="fr btntext">查看全部订单</span>
        </p>

        <ul class="listbox">
          <li class="list" @click="$router.push({path:'/pagelist'})">
            <div class="imgbox">
              <img src="../img/dfk_icon.png" alt="">
            </div>
            <p>已完成</p>
          </li>
          <li class="list" @click="$router.push({path:'/pagelist'})">
            <div class="imgbox">
              <img src="../img/dfh_icon.png" alt="">
            </div>
            <p>待发货</p>
          </li>
          <li class="list" @click="$router.push({path:'/pagelist'})">
            <div class="imgbox">
              <img src="../img/dsh_icon.png" alt="">
            </div>
            <p>待收货</p>
          </li>
        </ul>
      </div>

      <div class="box">
        <p class="clearfix myaouder" @click="$router.push({path:'/bianji'})">
          <img class="fl listimg" src="../img/dizhi_icon.png" alt="">
          我的地址
          <img class="fr imgbtn" src="../img/back_icon.png" alt="">
        </p>
        <p class="clearfix myaouder">
          <img class="fl listimg" src="../img/password.png" alt="">
          修改密码
          <img class="fr imgbtn" src="../img/back_icon.png" alt="">
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        }
    }
</script>

<style scoped>
  .tuichubtn{
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    font-size: 0.24rem;
  }
  .listimg{
    width: 0.4rem;
    margin-top: 0.2rem;
    margin-right: 0.1rem;
  }
  .listbox{
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .list{
    width: 1rem;
    font-size: 0.24rem;
    text-align: center;
  }
  .list img{
    width: 0.4rem;
    margin: 0 auto 0.1rem;
  }
  .btntext{
    color: #999;
    margin-right: 0.2rem;
  }
  .imgbtn{
    height: 0.3rem;
    margin-top: 0.26rem;
    transform: rotate(180deg);
  }
  .myaouderbox{
    border-bottom: 0.4rem solid #eee;
    padding: 0 0.3rem;
  }
  .myaouder{
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #ddd;
  }
  .username{
    font-size: 0.32rem;
    padding: 0.2rem 0;
    margin-bottom: 0.1rem;
  }
  .txbox{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 0.06rem solid #fff;
    margin-right: 0.3rem;
  }
  .topbox{
    padding: 0.4rem 0.3rem;
    position: relative;
    background: -webkit-linear-gradient(left,#ffa84e, #ee7900);
    background: -o-linear-gradient(left,#ffa84e, #ee7900);
    background: -moz-linear-gradient(left,#ffa84e, #ee7900);
    background: linear-gradient(left,#ffa84e, #ee7900);
  }
</style>
