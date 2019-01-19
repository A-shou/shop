<template>
  <div>
    <img src="../img/back_icon.png" alt="" class="backbtn" @click="$router.back(-1)">
    <div class="loginlog">
      <img src="../img/logo.jpg" class="logo">
      <p>登录积分商城</p>
    </div>
    <div class="inputbox">
      <img src="../img/icon_4.png" alt="">
      <input v-model="phone" placeholder="请输入手机号" type="text">
    </div>
    <div class="inputbox">
      <img src="../img/password.png" alt="">
      <input v-model="password" placeholder="请输入密码" type="password">
    </div>
    <div style="height: 0.4rem;"></div>
    <div class="loginbtn" @click="login">登 录</div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data () {
          return {
            phone: '',
            password: ''
          }
      },
      methods: {
        login () {
          if (this.phone == '') {
            this.$store.commit('setAlter', '请输入手机号')
          } else if (this.password == '') {
            this.$store.commit('setAlter', '请输入密码')
          }
          this.ajaxPost({
            url: '/cri-cms-api/member/login',
            data: {
              phone: this.phone,
              password: this.password
            },
            success: res => {
              console.log(res)
              if (res.data.code != '1') {
                this.$store.commit('setAlter', res.data.msg)
              } else {
                this.$store.commit('login', res.data.result)
                this.$router.back(-1)
              }
            }
          })
        }
      },
      mounted() {
        this.$store.commit('setFootDown')
      }
    }
</script>

<style scoped>
  .backbtn{
    position: fixed;
    z-index: 999;
    top: 0.1rem;
    left: 0.3rem;
  }
  .loginlog{
    padding: 2rem 0 1rem;
    font-size: 0.3rem;
    text-align: center;
  }
  .logo{
    margin: 0 auto 0.4rem;
    border-radius: 0.1rem;
    width: 1.2rem;
  }
  .inputbox{
    margin: 0 0.5rem 0.4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 0.2rem;
  }
  .inputbox img{
    width: 0.5rem;
    margin-right: 0.2rem;
  }
  .inputbox input{
    outline: none;
    border: 0;
    width: calc(100% - 0.7rem);
  }
  .loginbtn{
    margin: 0 0.5rem;
    line-height: 0.8rem;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    background: orange;
    color: #fff;
    text-align: center;
  }
</style>
