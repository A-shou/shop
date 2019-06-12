<template>
    <div>
      <div class="topbox clearfix">
        <div class="imgbox txbox fl">
          <img :src="$store.state.userData.thumb" alt="">
        </div>
        <div class="fl">
          <p class="username">{{$store.state.userData.nickname}}</p>
          <p class="jifen">积分：{{credits}}</p>
        </div>
        <p class="tuichubtn" @click="logout">退出登录</p>
      </div>

      <div class="myaouderbox">
        <p class="clearfix myaouder" @click="$router.push({path:'/pagelist'})">
          <img class="fl listimg" src="../img/dingdan_icon.png" alt="">
          我的订单
          <img class="fr imgbtn" src="../img/back_icon.png" alt="">
          <span class="fr btntext">查看全部订单</span>
        </p>

        <ul class="listbox">
          <li class="list" @click="$router.push({path:'/pagelist', query:{type: 1}})">
            <div class="imgbox">
              <img src="../img/dfk_icon.png" alt="">
            </div>
            <p>已完成</p>
          </li>
          <li class="list" @click="$router.push({path:'/pagelist', query:{type: 2}})">
            <div class="imgbox">
              <img src="../img/dfh_icon.png" alt="">
            </div>
            <p>待发货</p>
          </li>
          <li class="list" @click="$router.push({path:'/pagelist', query:{type: 3}})">
            <div class="imgbox">
              <img src="../img/dsh_icon.png" alt="">
            </div>
            <p>待收货</p>
          </li>
        </ul>
      </div>

      <div class="box">
        <p class="clearfix myaouder" @click="$router.push({path:'/bianji', query:{type: 'my'}})">
          <img class="fl listimg" src="../img/dizhi_icon.png" alt="">
          我的地址
          <img class="fr imgbtn" src="../img/back_icon.png" alt="">
        </p>
        <!--<p class="clearfix myaouder">-->
          <!--<img class="fl listimg" src="../img/password.png" alt="">-->
          <!--修改密码-->
          <!--<img class="fr imgbtn" src="../img/back_icon.png" alt="">-->
        <!--</p>-->
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            credits: 0
          }
        },
      methods: {
          logout () {
            localStorage.removeItem('userInfo');
            this.$store.commit('logout')
            this.$router.push('/')
          }
      },
      beforeMount() {
        this.ajaxPost({
          url: '/cri-cms-api/mall/app/member/credits',
          data: {
            memberId: this.$store.state.userId
          },
          success: res => {
            this.credits = res.data.result.credits
          }
        })
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
    width: 0.5rem;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
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
    margin-top: 0.36rem;
    transform: rotate(180deg);
  }
  .myaouderbox{
    border-bottom: 0.4rem solid #eee;
    padding: 0 0.3rem;
  }
  .myaouder{
    height: 1rem;
    line-height: 1rem;
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
  .txbox img{
    height: 100%;
  }
  .topbox{
    padding: 0.4rem 0.3rem;
    position: relative;
    background: #ee7900;
    background: -webkit-linear-gradient(left,#ffa84e, #ee7900);
    background: -o-linear-gradient(left,#ffa84e, #ee7900);
    background: -moz-linear-gradient(left,#ffa84e, #ee7900);
    background: linear-gradient(left,#ffa84e, #ee7900);
  }
</style>
