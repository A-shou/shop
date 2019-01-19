<template>
  <div id="app">
    <div>

    </div>
    <router-view/>
    <v-alterbox></v-alterbox>
    <ul class="foot" :class="{footdown:$store.state.footclass}">
      <li v-for="(item,index) in foot" class="footlist" @click="pageto(item.to,index)">
        <img v-if="$store.state.footindex != index" :src="item.url" alt="" class="foot_icon">
        <img v-if="$store.state.footindex == index" :src="item.urlon" alt="" class="foot_icon">
        <p>{{item.text}}</p>
      </li>
    </ul>
    <div style="height: 1.2rem;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      foot:[
        {
          url:require('./img/icon_1.png'),
          urlon:require('./img/icon_1on.png'),
          text:'首页',
          to:'/'
        },
        {
          url:require('./img/icon_2.png'),
          urlon:require('./img/icon_2on.png'),
          text:'分类',
          to:'/class'
        },
        {
          url:require('./img/icon_3.png'),
          urlon:require('./img/icon_3on.png'),
          text:'购物车',
          to:'/cart'
        },
        {
          url:require('./img/icon_4.png'),
          urlon:require('./img/icon_4on.png'),
          text:'个人中心',
          to:'/user'
        },
      ]
    }
  },
  methods:{
    pageto(path,index){
      this.$store.commit('setFootIndex',index)
      this.$router.push({path:path})
    }
  },
  created () {
    if (localStorage.userInfo) {
      console.log(JSON.parse(localStorage.userInfo))
      this.$store.commit('login', JSON.parse(localStorage.userInfo))
    }
  }
}
</script>

<style>
  @charset "utf-8";
  /* CSS Document */
  body{
    font:normal normal 0.28rem/1 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
    color: #282828;
  }
  textarea,input{
    font:normal normal 0.28rem/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
  }
  img{
    display:block;
  }
  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }
  body,p,ol,ul,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding:0;
    list-style: none;
  }
  a{
    color:#000;
    text-decoration: none;
  }
  .nowrap{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .imgbox{
    overflow:hidden;
  }
  .imgbox>img{
    width: 100%;
  }
  .box{
    margin: 0 0.3rem;
  }
  .foot{
    position: fixed;
    height: 1rem;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -0.02rem 0.2rem rgba(0,0,0,0.2);
    background: #fff;
    transition: 0.4s;
  }
  .footlist{
    width: 25%;
    text-align: center;
    font-size: 0.24rem;
  }
  .foot_icon{
    width: 30%;
    margin:0 auto 0.08rem;
  }
  .swiper-pagination-bullet-active{
    background: #ee7900;
  }
  .footdown{
    transform: translateY(110%);
    opacity: 0;
  }
  .backbtn{
    height: 0.4rem;
    margin: 0.3rem 0;
  }
  .fltop{
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    margin: 0;
    padding: 0 0.3rem;
  }
</style>
